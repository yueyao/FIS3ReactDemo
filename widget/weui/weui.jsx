import request from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
// 自有小组件
import Page from 'reactdemo:widget/weui/comps/page.jsx';
import IconDemo from 'reactdemo:widget/weui/comps/IconDemo.jsx';
import CellDemo from 'reactdemo:widget/weui/comps/CellDemo.jsx';
import MsgDemo from 'reactdemo:widget/weui/comps/MsgDemo.jsx';
import ActionSheetDemo from 'reactdemo:widget/weui/comps/ActionSheetDemo.jsx';
import ArticleDemo from 'reactdemo:widget/weui/comps/ArticleDemo.jsx';
import DialogDemo from 'reactdemo:widget/weui/comps/DialogDemo.jsx';

const { Button } = WeUI;

class App extends React.Component {

    render () {
        return(
            <div>
                <h3>weui-Banff</h3>
                <hr/>

                <Page className="button" title="Button" spacing>
                    <Button>按钮</Button>
                    <Button disabled>按钮</Button>

                    <Button type="warn">按钮</Button>
                    <Button type="warn" disabled>按钮</Button>

                    <Button type="default">按钮</Button>
                    <Button type="default" disabled>按钮</Button>

                    <div className="button_sp_area">
                        <Button type="primary" plain>按钮</Button>
                        <Button type="default" plain>按钮</Button>

                        <Button size="small">按钮</Button>
                        <Button type="default" size="small">按钮</Button>
                    </div>
                </Page>

                <DialogDemo/>
                <CellDemo/>
                <IconDemo/>
                <MsgDemo/>
                <ActionSheetDemo/>
                <ArticleDemo/>
            </div>
        )
    }
}
export default {
    init (){
        ReactDOM.render((
            <App/>
        ), document.getElementById('test'));
    }
}