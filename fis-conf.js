/**
 * banff fis3 config
 *
 */
var packConfig = require('./fis-conf/pack.js');
var deployConfig = require('./fis-conf/deploy-config.js');

fis.require('smarty')(fis);
fis.set('namespace', 'reactdemo');
fis.set('project.static', '/static');

fis.set('project.ignore', [
    'fis-conf.js',
    '/components/**.MD',
    '/components/**.md',
    'component.json'
]);

/******** 模块化方案modjs commonJS规范********/
fis.hook('module', {
    mode: 'commonJS'
});

fis.match('/(**.{js,es6,jsx})', {
    moduleId: 'reactdemo:$1'
});


// es6 react
fis.match('*.{es6,jsx}', {
    parser: fis.plugin('babel'),
    useHash: true,
    isMod: true,
    rExt: '.js'
});
fis.match('*.less', {
    rExt: '.css',
    parser: fis.plugin('less-2.x')
});

// ------ 配置components release 规则-------
fis.match('/components/**', {
    release: '${project.static}/${namespace}/$&'
});
fis.match('/components/**.css', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
fis.match('/components/**.js', {
    isMod: true,
    release: '${project.static}/${namespace}/$&'
});
fis.match('/components/**.{md,MD}', {
    release: false
});


// 配置模拟数据
fis.match('/test/**', {
    release: '$0'
});
fis.match('/test/server.conf', {
    release: '/server-conf/server.conf'
});

fis.match('::package', {
    packager: fis.plugin('map', packConfig)
})

// 命名空间  做不同处理
fis.media('prd')
    .match('**.{es6,jsx,js}', {
        optimizer: fis.plugin('uglify-js')
    })
    .match('**.{scss,css}', {
        optimizer: fis.plugin('clean-css')
    });

// ------- 部署depoly-------
devDeploy()

function devDeploy() {

    function push(RD, to) {
        return fis.plugin('http-push', {
            receiver: RD.receiver,
            to: RD.root + to
        });
    }

    for (var k in deployConfig) {
        var RD = deployConfig[k];
        fis.media(k)
            .match('${namespace}-map.json', {
                deploy: push(RD, 'data/smarty')
            })
            .match('plugin/**', {
                deploy: push(RD, 'php/phplib/ext/smarty')
            })
            .match('*.tpl', {
                deploy: push(RD, '')
            })
            .match('widget/**/*.{less,scss,css,js,jsx,es6,png}', {
                deploy: push(RD, 'webroot')
            })
            .match('static/(**)', {
                deploy: push(RD, 'webroot')
            })
            .match('pkg/**', {
                deploy: push(RD, 'webroot')
            })
            .match('config/(**)', {
                deploy: push(RD, 'data/smarty')
            })
    }
}
