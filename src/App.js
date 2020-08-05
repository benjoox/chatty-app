import React, { useState, useEffect, useRef } from 'react';
import API from './api'
import Historical from './components/messages/Historical'
import TextInputBox from './components/TextInputBox'
import bgImage from './bg-image.png'
import './App.css';

function App() {
  const [messageList, setMessages] = useState([])
  useEffect(() => {
    async function getAllMessage() {
      const messages = await API.getLastTenMessages()
      setMessages(messages)
    }

    getAllMessage()
    
  }, []);

  const endOfListRef = useRef(null)
  const scrollToBottom = () => endOfListRef.current.scrollIntoView()
  useEffect(scrollToBottom, [messageList])

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
        <div style={container}>
            <div style={historicals}>

              { 
                messageList.length > 0 
                ?
                messageList.map(el => <Historical 
                    key={el._id} 
                    message={el.message} 
                    author={el.author} 
                    timestamp={el.timestamp}
                  />
                )
                :
                ''
              }
              <div ref={endOfListRef} />
            </div>
        </div>
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

const container = { 
  display: 'flex', 
  justifyContent: 'center',
  minHeight: '150px',
  maxHeight: '590px',
  overflowY: 'scroll'
}

const historicals = { 
  display: 'flex', 
  flexDirection: 'column',  
  padding: '43px 24px 0 24px',
  width: '592px'
}