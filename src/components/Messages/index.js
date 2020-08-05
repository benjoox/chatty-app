import React, { useEffect, useRef } from 'react';
import MessageBox from './MessageBox'

function Messages(props) {
    
  const endOfListRef = useRef(null)
  const scrollToBottom = () => endOfListRef.current.scrollIntoView()
  useEffect(scrollToBottom, [props.messageList])

  return (
    <div style={container}>
        <div style={historicals}>
            {   
                props.messageList.length > 0 
                ?
                props.messageList.map(el => <MessageBox 
                    key={el._id} 
                    message={el.message} 
                    author={el.author} 
                    timestamp={el.timestamp}
                />)
                :
                ''
            }
            <div ref={endOfListRef} />
        </div>
    </div>
  )
}

export default Messages

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








