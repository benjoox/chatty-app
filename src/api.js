const API_ENDPOINT = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0'
const API_TOKEN = process.env.REACT_APP_DOODLE_API_TOKEN

async function getAllMessages() {
    try {
        const response = await fetch(`${API_ENDPOINT}/?token=${API_TOKEN}`)
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

async function sendMessage(content) {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'token': API_TOKEN
            },
            body: JSON.stringify(content)
        })
        const data = await response.json()
        
        return data
    } catch(err) {
        console.log(err)
    }
}

async function getLastTenMessages() {
    const url = `${API_ENDPOINT}/?since=${Date.now() / 1000}&limit=10&token=${API_TOKEN}`
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(err) {
        console.log(err)
    }
}

export default {
    sendMessage,
    getAllMessages,
    getLastTenMessages
}