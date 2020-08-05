import React, { useState, useEffect } from 'react';
import API from './api'
import Messages from './components/Messages'
import TextInputBox from './components/TextInputBox'
import useWindowDimensions from './hooks/useWindowDimension'

import bgImage from './bg-image.png'
import './App.css';

function App() {
    const [messageList, setMessages] = useState([])
    const [user] = useState('currentUser')
    const isMedium = useWindowDimensions()

    useEffect(initialiseMessages, []);

    function initialiseMessages () {
      async function getAllMessage() {
        const messages = await API.getLastTenMessages()
        setMessages(messages)
      }
      getAllMessage()
    }

    async function send(message) {
        await API.sendMessage({ 
          message,
          author: user
        }) 
        const messages = await API.getLastTenMessages()
        setMessages(messages)
    }

    const content = isMedium ? mContent : sContent

    return <div style={root}>
            <div style={content}>
              <Messages messageList={messageList} />
              <TextInputBox send={send} />
            </div>
          </div>
}

export default App;

const root = {
  display: 'flex',
  justifyContent: 'center'
}

const mContent = { 
    backgroundImage: `url(${bgImage})`,
    width: '768px'
}

const sContent = {
    backgroundImage: `url(${bgImage})`, 
    width: '100%'
}
  