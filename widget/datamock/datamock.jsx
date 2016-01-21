import request from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';

const api = '/api/bddata'

let getData = (fn) => {
    request
        .get(api)
        .end((err, res)=>{
            fn(res.body)
        })
}

class App extends React.Component {
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
        let {d} = this.props;
        console.log(d)
        return (
            <div>
                <h4>请求返回数据：</h4>
                <pre dangerouslySetInnerHTML={{__html: this._pretty(d)}}>
                </pre>
            </div>
        )
    }
}
export default {
    init(){
        getData(function(rs){
            let props = {
                d: rs
            }
            ReactDOM.render(<App {...props}/>,document.getElementById('test'))
        });
    }
}