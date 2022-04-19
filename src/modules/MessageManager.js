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

export const deleteMessage = (messageId) => {
    return fetch(`http://localhost:8088/messages/${messageId}`, {
        method: "DELETE",
    }).then((result) => result.json())
}

  export const getMessageById = (messageId) => {
      return fetch(`http://localhost:8088/messages/${messageId}`).then((res) =>
          res.json()
      )
  }

export const updateMessage = (singleMessage) => {
    return fetch(`http://localhost:8088/messages/${singleMessage.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(singleMessage),
    }).then((data) => data.json())
}