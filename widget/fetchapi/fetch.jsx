import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

//
// fetch
//  Headers
//  Request
//  Response
//  它都返回一个 promise 对象
const fetch = window.fetch;
class JsonView extends React.Component {
    _replace (match, ind, key, val, tra) {
        var spanEnd = '</span>';
        var keySpan = '<span class=json-key>';
        var valSpan = '<span class=json-value>';
        var strSpan = '<span class=json-string>';
        var sps = ind || '';
        if (key) {
            sps = sps + '"' + keySpan + key.replace(/[": ]/g, '') + spanEnd + '": ';
        }
        if (val) {
            sps = sps + (val[0] == '"' ? strSpan : valSpan) + val + spanEnd;
        }
        return sps + (tra || '');
    }
    _pretty(obj){
        // 逐行匹配，列举：“key”: "value" | "key": value | "key": [ | "key": { | "key": [],| "Key": {},
        var regLine = /^( *)("[^"]+": )?("[^"]*"|[\w.+-]*)?([,[{]|\[\s*\],?|\{\s*\},?)?$/mg;
        return JSON.stringify(obj, null, 2)
            .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(regLine, this._replace);
    }
    render(){
        let {json} = this.props;
        return (
            <div>
                <h4>请求返回数据：</h4>
                <pre dangerouslySetInnerHTML={{__html: this._pretty(json)}}>
                </pre>
            </div>
        )
    }
}
class GirlView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            json: null
        }
    }
    componentDidMount(){
        this.doFetch();
    }
    doFetch(){
        let headers = new Headers();
        let req = new Request(this.props.url, {headers: headers,method: 'GET', cache: 'reload'});
        let me = this;
        fetch(req)
            .then((response)=>{
                    return response.json();
                })
            .then((json)=>{
                    me.setState({
                        json:json
                    })
                })
    }
    render(){
        let {json} = this.state;
        return(
            <div>
                <p>
                    Fetch 提供了对 Request 和 Response （以及其他与网络请求有关的）对象通用的定义。它之后能够被使用到很多场景中：service workers、Cache API、其他处理请求和响应的方式，甚至任何需要生成自己的响应的方式。
                </p>
                <p>
                    到目前为止，Fetch API还未被所有的浏览器支持。因此，如果你想体验这一技术，最好使用最新版本的Chrome浏览器。
                </p>
                {json ? <JsonView json={json}/> : ""}
            </div>
        )
    }
}


// 根据Fetch API 构造一个返回值
function responseDemo() {
    var headers = new Headers({
        'Content-Type': 'application/json',
        'Cache-Control': 'max-age=3600'
    });
    // 构造响应
    var response = new Response(JSON.stringify({photos: {photo: []}}), {'status': 200, headers: headers});
    response.json().then(function(json) {
        // dosomething(json);
    });
}

// 读取字节流 stream
// 一块一块地处理响应体，而不是一次性。
function streamingDemo() {
    var req = new Request(URL, {method: 'GET', cache: 'reload'});
    fetch(req).then(function(response) {
        var reader = response.body.getReader();
        return reader.read();
    }).then(function(result, done) {
        if (!done) {
            // do something with each chunk
        }
    });
}

export default {
    init(){
        console.log('rr')
        ReactDOM.render(<GirlView url="/api/bddata"/>, document.getElementById('test'))
    }
}