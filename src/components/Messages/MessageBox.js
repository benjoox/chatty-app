import React, { PureComponent } from 'react'
import { string, number } from 'prop-types'
import moment from 'moment'
import {
    root,
    currentUserRoot,
    content,
    currentUserContent,
    minContentForIE,
    maxContentForIE,
    title,
    date,
    currentUserDate,
    mMessage,
    sMessage
} from './MessageBoxStyles'

export default class MessageBox extends PureComponent {
    render() {
        const { message, author, timestamp, isMedium } = this.props

        const formattedDate = moment.unix(timestamp / 1000).format('DD MMM YYYY H:mm')

        const currentUser = author === 'currentUser'
        const rootStyle = currentUser ? currentUserRoot : root
        const contentStyle = currentUser ? currentUserContent : content
        const dateStyle = currentUser ? currentUserDate : date 

        const messageStyle = isMedium ? mMessage : sMessage

        return <div style={rootStyle}>
            <div style={minContentForIE}>
                <div style={contentStyle} >
                    <div style={maxContentForIE}>
                        { 
                            !currentUser 
                            ?
                            <div style={title}>
                                {author}
                            </div>
                            :
                            ''
                        }
                    </div>
                    <div style={maxContentForIE}>
                        <div style={messageStyle}>
                            {message}
                        </div>
                    </div>
                    <div style={maxContentForIE}>
                        <div style={dateStyle} >
                            {formattedDate}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

MessageBox.propTypes = {
    message: string.isRequired,
    author: string.isRequired,
    timestamp: number.isRequired
}