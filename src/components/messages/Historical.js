import React, { PureComponent } from 'react'
import { string, number } from 'prop-types'
import moment from 'moment'

export default class Historical extends PureComponent {
    render() {
        const { message, author, timestamp } = this.props

        const date = moment.unix(timestamp / 1000).format('DD MMM YYYY h:mm')

        return <div style={minContentForIE}>
            <div style={container}>
                <div style={maxContentForIE}>
                    <div style={lightText}>
                        {author}
                    </div>
                </div>
                <div style={maxContentForIE}>
                    <div style={messageStyle}>
                        {message}
                    </div>
                </div>
                <div style={maxContentForIE}>
                    <div style={lightText}>
                        {date}
                    </div>
                </div>
            </div>
        </div>
    }
}

Historical.propTypes = {
    message: string.isRequired,
    author: string.isRequired,
    timestamp: number.isRequired
}

const minContentForIE = { 
    display: '-ms-grid', 
    '-ms-grid-columns': 'min-content' 
}
const maxContentForIE = { 
    display: '-ms-grid', 
    '-ms-grid-columns': 'max-content' 
}

const container = { 
    margin: '16px', 
    padding: '16px', 
    border: 'solid lightgrey 1px', 
    borderRadius: '5px',
    width: 'min-content',  
}

const messageStyle = {
    lineHeight: '2rem',
    width: 'max-content',
}

const lightText = {
    width: 'max-content',
    color: 'grey'
}