import React, { useState, useEffect } from 'react';
import API from './api'
import Messages from './components/Messages'
import TextInputBox from './components/TextInputBox'
import bgImage from './bg-image.png'
import './App.css';

function App() {
  const [messageList, setMessages] = useState([])

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
      author: "currentUser"
    }) 
    const messages = await API.getLastTenMessages()
    setMessages(messages)
  }

  return (
    <div style={appWrapper}>
      <div style={mainContainer}>
        <Messages messageList={messageList} />
        <TextInputBox send={send} />
      </div>
    </div>
  );
}

export default App;

const appWrapper = {
  display: 'flex',
  justifyContent: 'center'
}

const mainContainer = { 
  backgroundImage: `url(${bgImage})`,
  width: '768px'
}