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

const messageList = [
  {
    "message": "Great resource, thanks",
    "author": "NINJA",
    "timestamp": "1520677140000",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f65f0a37e3b5"
  },
  {
    "message": "THANKSSS!!!!",
    "author": "I am mister brilliant", 
    "timestamp": "1520676600000",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f65f001a37e5"
  },
  {
    "message": "Thanks Peter",
    "author": "martin57",
    "timestamp": "1520676600000",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f601a37e3b5"
  },
  {
    "message": "Hey folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute",
    "author": "currentUser",
    "timestamp": "1521383880",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21jjjf601a37e3b5"
  }
]