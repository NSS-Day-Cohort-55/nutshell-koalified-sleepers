import { MessageCard } from "./Message";
import { useState, useEffect } from "react";
import { getAllMessages, addMessage } from "../../modules/MessageManager";
import "./MessageList.css"



export const MessageList = ()=> {
    const [messages, setMessages] = useState([])
    const [isActive, setActive] = useState(false)
    
    const [oneMessage, setOneMessage] = useState({
        title: "",
        body: "",
        timestamp: new Date().toISOString(),
        userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id
    })

    const getMessages=()=>{
        return getAllMessages().then(messagesFromApi=>{
            setMessages(messagesFromApi)
        })
    }

    const handleControlledInputChange = (event) => {
        const newMessage = {...oneMessage}
        let selectedVal = event.target.value
        newMessage[event.target.id] = selectedVal
        setOneMessage(newMessage)
    }

    const handleClickMessageSave = () => {
        addMessage(oneMessage).then(()=>getAllMessages().then(setMessages))
    }

    

    useEffect(() => {
        getMessages();
    }, [])



    return (
        <>
     
            <section className="sectionContent">
                <form className="messageForm">
                    <h2 className="messageForm__title">New Message</h2>
                    <fieldset> 
                        <div className="form-group">
                            <label htmlFor="title"></label>
                            <input type="text" id="title" onChange={handleControlledInputChange} placeholder="Subject" value={messages.title}></input>
                        </div><br/>
                    </fieldset>
                    <fieldset> 
                        <div className="form-group">
                            <label htmlFor="body"></label>
                            <textarea id="body" onChange={handleControlledInputChange} placeholder="Body" value={messages.body}></textarea>
                        </div>
                    </fieldset>
                    <button type="submit" className="btn-primary" onClick={handleClickMessageSave}>Post Message</button>
                </form>        
            </section>

           
            
            <div className="container-cards">
                {messages.map(message =>
                    <MessageCard
                        key={message.id}
                        singleMessage={message}
                    />)}
            </div>
        </>
    )

}