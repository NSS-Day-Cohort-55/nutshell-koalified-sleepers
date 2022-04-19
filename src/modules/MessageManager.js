export const getAllMessages = () => {
    return fetch(`http://localhost:8088/messages?_expand=user`)
    .then(res => res.json())
}

export const addMessage = (newMessage) => {
    return fetch(`http://localhost:8088/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(res => res.json())
}
