import React, { PureComponent } from 'react'
import { string } from 'prop-types'
import moment from 'moment'

export default class Historical extends PureComponent {
    render() {
        const { message, author, timestamp } = this.props

        const date = moment.unix(timestamp / 1000).format('DD MMM YYYY h:mm')

        const currentUser = author === 'currentUser'
        
        const rootStyle = currentUser ? currentUserRoot : root
        const contentStyle = currentUser ? currentUserContent : content
        const dateStyle = currentUser ? currentUserLightText : lightText 

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
                            {date}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

Historical.propTypes = {
    message: string.isRequired,
    author: string.isRequired,
    timestamp: string.isRequired
}

const minContentForIE = { 
    display: '-ms-grid', 
    msGridColumns: 'min-content' 
}
const maxContentForIE = { 
    display: '-ms-grid', 
    msGridColumns: 'max-content' 
}

const content = {  
    padding: '16px', 
    border: 'solid lightgrey 1px',
    borderRadius: '5px',
    width: 'min-content',  
    backgroundColor: 'white'
}

const messageStyle = {
    lineHeight: '1.5rem',
    width: 'max-content',
    maxWidth: '384px'
}

const title ={
    color: 'grey',
    fontSize: '0.78rem'
}

const lightText = {
    width: 'max-content',
    color: 'grey',
    fontSize: '0.88rem'
}

const root = {
    marginBottom: '16px',
}

const currentUserRoot = {
    ...root,
    alignSelf: 'flex-end', 
    backgroundColor: '#fcf7c6' 
}

const currentUserLightText = {
    ...lightText,
    width: '100%', 
    textAlign: 'right'
}

const currentUserContent = {
    ...content,
    backgroundColor: '#fcf7c6'
}