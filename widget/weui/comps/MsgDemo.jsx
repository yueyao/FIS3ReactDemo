import request from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import Page from 'reactdemo:widget/weui/comps/page.jsx';

const {Msg} = WeUI;
class MsgDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttons: [{
                type: 'primary',
                label: '确定',
                onClick: ()=>{

                }
            }, {
                type: 'default',
                label: '取消',
                onClick: ()=>{

                }
            }]
        };
    }
    render() {
        return (
            <Page className="msg" title="Msg" spacing>
                <Msg type="success"
                    title="提交成功"
                    description="你的反馈我们已经收到"
                    buttons={this.state.buttons} />
            </Page>
        );
    }
};
export default MsgDemo