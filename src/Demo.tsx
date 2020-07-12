import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
export default class Demo extends React.Component<{},any> {

    constructor(props:any) {
      super(props);
      this.state = {
        messageList: []
      };
    }
  
    _onMessageWasSent(message:string) {
      this.setState({
        messageList: [...this.state.messageList, message]
      })
    }
  
    _sendMessage(text:string) {
      if (text.length > 0) {
        this.setState({
          messageList: [...this.state.messageList, {
            author: 'them',
            type: 'text',
            data: { text }
          }]
        })
      }
    }
  
    render() {
      return (<div>
        <Launcher
          agentProfile={{
            teamName: 'react-chat-window',
            imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
          }}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>)
    }
  }