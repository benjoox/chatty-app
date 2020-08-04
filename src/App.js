import React, { useEffect, useRef } from 'react';
import Historical from './components/messages/Historical'
import TextInputBox from './components/TextInputBox'
import bgImage from './bg-image.png'
import './App.css';

function App() {
  const endOfListRef = useRef(null)
  const scrollToBottom = () => endOfListRef.current.scrollIntoView()
  useEffect(scrollToBottom, [messageList]);

  return (
    <div style={appWrapper}>
      <div style={mainContainer}>
        <div style={container}>
            <div style={historicals}>

              { 
                messageList.map(el => <Historical 
                    key={el._id} 
                    message={el.message} 
                    author={el.author} 
                    timestamp={el.timestamp}
                  />)
              }
              <div ref={endOfListRef} />
            </div>
        </div>
        <TextInputBox send={() => console.log('TODO: Implement send message functionality')} />
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
  maxWidth: '700px'
}

const container = { 
  display: 'flex', 
  justifyContent: 'center',
  minHeight: '400px',
  maxHeight: '500px',
  overflowY: 'scroll'
}

const historicals = { 
  display: 'flex', 
  flexDirection: 'column',  
  padding: '24px', 
  width: '640px'
}

const messageList = [
  {
    "message": "1. hello world",
    "author": "Tommelee jones",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f65f0a37e3b5"
  },
  {
    "message": "2. A long message to test",
    "author": "Tom", 
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f65f001a37e5"
  },
  {
    "message": "3. Hello world",
    "author": "Tom",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f601a37e3b5"
  },
  {
    "message": "4. Hello world",
    "author": "Tom",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21jjjf601a37e3b5"
  },
  {
    "message": "5. Hello world",
    "author": "Tom",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21kkkf601a37e3b5"
  }
]