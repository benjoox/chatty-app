import React from 'react';
import Historical from './components/messages/Historical'
import TextInputBox from './components/TextInputBox'
import './App.css';

function App() {
  return (
    <div style={{ maxWidth: '640px', display: 'inline-block' }}>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '24px'}}>

        { 
          messageList.map(el => <Historical 
              key={el._id} 
              message={el.message} 
              author={el.author} 
              timestamp={el.timestamp}
            />)
        }

      </div>

      <TextInputBox send={() => console.log('TODO: Implement send message functionality')} />

    </div>
  );
}

export default App;


const messageList = [
  {
    "message": "Hello world",
    "author": "Tommelee jones",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f65f0a37e3b5"
  },
  {
    "message": "A long message to test",
    "author": "Tom",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f65f001a37e5"
  },
  {
    "message": "Hello world",
    "author": "Tom",
    "timestamp": "1596458781788",
    "token": "PwyJ8JkqBqAZ",
    "_id": "5f28071d21f601a37e3b5"
  }
]