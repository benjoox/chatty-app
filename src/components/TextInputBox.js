import React, { useState } from 'react'
import { func } from 'prop-types'

export default function TextInputBox(props) {
    const [message, setMessage] = useState('')
    
    return <div style={container}>
        <div style={innerContainer}>
            <label htmlFor='txt' />
            <input 
                id='txt'
                type='text' 
                placeholder='Message' 
                value={message}
                style={textBox}
                onChange={ev => setMessage(ev.target.value)}
            />
            <button 
                onClick={props.send}
                style={button} 
            >
                Send
            </button>
        </div>
    </div>
}

TextInputBox.protoType = {
    send: func.isRequired
}

const container = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#3798d4',
    padding: '4px'
}

const innerContainer = {
    display: 'flex',
    backgroundColor: '#3798d4',
    padding: '4px',
    width: '592px'
}

const textBox = {
    margin: '4px',
    width: '88%',
    outline: 'none',
    overflow: 'auto',
    padding: '4px',
    borderWidth: '0',
    borderRadius: '2px'
}

const button = {
    margin: '4px',
    backgroundColor: '#ff876c',
    color: 'white',
    border: 'solid 1px darkblue',
    borderRadius: '2px',
    width: '12%',
    cursor: 'pointer',
    boxSizing: 'content-box'
}