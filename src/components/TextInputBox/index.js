import React, { useState } from 'react'
import { func } from 'prop-types'
import useWindowDimensions from '../../hooks/useWindowDimension.js'
import {
    root,
    mContent,
    sContent,
    button,
    textBox
} from './styles'

export default function TextInputBox(props) {
    const [message, setMessage] = useState('')
    const isMedium = useWindowDimensions()

    function send() {
        props.send(message)
        setMessage('')
    }

    const content = isMedium ? mContent : sContent

    return <div style={root}>
        <div style={content}>
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
                onClick={send}
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