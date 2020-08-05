import React, { useEffect, useRef } from 'react';
import MessageBox from './MessageBox'
import useWindowDimensions from '../../hooks/useWindowDimension'

function Messages(props) {
    const isMedium = useWindowDimensions()
    const endOfListRef = useRef(null)
    const scrollToBottom = () => endOfListRef.current.scrollIntoView()
    useEffect(scrollToBottom, [props.messageList])

    const messages = isMedium ? mMessages : sMessages

    return (
        <div style={root}>
            <div style={messages}>
                {   
                    props.messageList.length > 0 
                    ?
                    props.messageList.map(el => <MessageBox
                        isMedium={isMedium} 
                        key={el._id} 
                        message={el.message} 
                        author={el.author} 
                        timestamp={el.timestamp}
                    />)
                    :
                    ''
                }
                { 
                    !process.env.REACT_APP_DOODLE_API_TOKEN
                    ?
                    <div style={note}>
                        <h4>Have you added a valid token to the .env file? </h4>
                    </div>
                    :
                    ''
                }
                <div ref={endOfListRef} />
            </div>
        </div>
    )
}

export default Messages

const root = { 
  display: 'flex', 
  justifyContent: 'center',
  minHeight: '100px',
  maxHeight: '590px',
  overflowY: 'scroll'
}

const mMessages = { 
  display: 'flex', 
  flexDirection: 'column',  
  padding: '43px 24px 0 24px',
  width: '592px'
}

const sMessages = { 
    display: 'flex', 
    flexDirection: 'column',  
    padding: '43px 24px 0 24px',
    width: '100%'
}

const note = {
    textAlign: 'center'
}







