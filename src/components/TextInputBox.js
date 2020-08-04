import React, { useState } from 'react'
import { func } from 'prop-types'

export default function TextInputBox(props) {
    const [message, setMessage] = useState('')
    
    return <div style={container}>
        <label htmlFor='txt' />
        <input 
            id='txt'
            type='text' 
            placeholder='Message' 
            value={message}
            style={textBox}
            onChange={ev => { ev.preventDefault(); setMessage(ev.target.value)}}
        />
        <button 
            onClick={props.send}
            style={button} 
        >
            Send
        </button>
    </div>
}

TextInputBox.protoType = {
    send: func.isRequired
}

const container = {
    display: 'flex',
    backgroundColor: 'blue',
    padding: '4px'
}

const textBox = {
    margin: '4px',
    width: '80%',
    outline: 'none',
    overflow: 'auto',
    padding: '4px',
    borderWidth: '0',
    borderRadius: '2px'
}

const button = {
    margin: '4px',
    backgroundColor: 'red',
    color: 'white',
    border: 'solid 1px darkblue',
    borderRadius: '2px',
    width: '20%',
    cursor: 'pointer',
    boxSizing: 'content-box'
}