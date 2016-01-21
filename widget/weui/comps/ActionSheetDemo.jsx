import React from 'react';
import ReactDOM from 'react-dom';
import WeUI from 'react-weui';
import Page from 'reactdemo:widget/weui/comps/page.jsx';

const { Button,
        ActionSheet,
        } = WeUI;

export default class ActionSheetDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            menus: [{
                label: '拍照',
                onClick: ()=> {

                }
            }, {
                label: '从手机相册选择',
                onClick: ()=> {

                }
            }],
            actions: [
                {
                    label: '取消',
                    onClick: this.hide.bind(this)
                }
            ]
        };
    }


    render() {
        return (
            <Page className="actionsheet" title="ActionSheet" spacing>
                <Button onClick={this.show.bind(this)}>ActionSheet</Button>
                <ActionSheet menus={this.state.menus} actions={this.state.actions} show={this.state.show} onRequestClose={this.hide.bind(this)} />
            </Page>
        );
    }

    show() {
        this.setState({show: true});
    }

    hide() {
        this.setState({show: false});
    }
};