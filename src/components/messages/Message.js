
import { useState } from "react"
import "./Popup.css"

export const MessageCard = ({singleMessage}) => {
    const [isActive, setActive] = useState(false)
    

    const handleClassToggle = () => {
    setActive(!isActive);
    };

    return (
        <>
            
            <div className="card">
                <div className="cardContent">
                    <h3>{singleMessage.title}</h3>
                    <p>{singleMessage.timestamp}</p>
                    <p>{singleMessage.body}</p>
                    <div className="messageAuthor">
                    <p>Author: <button type="button" className="authorButton" onClick={handleClassToggle}>{singleMessage.user.name}</button></p>
                        <div className={isActive ? "popup.active" : "popup"}>
                            <div className="overlay">
                                <div className="content"></div>
                                <button type="button" className="addFriendButton" onClick={handleClassToggle}>Add Friend</button>
                                </div>
                            </div>
                        </div> 
                    </div>
            </div>
            
        </>
    )
}
