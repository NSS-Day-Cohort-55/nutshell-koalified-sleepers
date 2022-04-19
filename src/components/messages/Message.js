
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import "./Popup.css"

export const MessageCard = ({singleMessage, handleClickSaveFriend, handleDeleteMessage}) => {
    const [isActive, setActive] = useState(false)
    // const [ messageUserId, setMessageUserId] = useState({})

       
    //  const getMessageByUserId = (singleMessage) => {
    //      getUserById(singleMessage.userId).then((userId) => {
    //          setMessageUserId(userId)
    //      })
        
    // }

    // useEffect(() => )

    const handleClassToggle = () => {
    setActive(!isActive);
    };

    return (
        <>
            <div className="card">
                <div className="cardContent">
                    <h3>{singleMessage.title}</h3>
                    <p>{singleMessage.timestamp.slice(0, 10)}</p>
                    <p>{singleMessage.body}</p>
                    <div className="messageAuthor">
                        <p>
                            Author:{" "}
                            <button
                                type="button"
                                className="authorButton"
                                onClick={handleClassToggle}
                            >
                                {singleMessage.user.name}
                            </button>
                        </p>
                        <div className={isActive ? "popup.active" : "popup"}>
                            <div className="overlay">
                                <div className="content"></div>
                                <button
                                    type="button"
                                    className="addFriendButton"
                                    onClick={() => {
                                        handleClickSaveFriend(
                                            singleMessage.userId
                                        )
                                    }}
                                >
                                    Add Friend
                                </button>
                            </div>
                        </div>
                    </div>
                    {singleMessage.userId ===
                    JSON.parse(sessionStorage.getItem("nutshell_user")).id ? (
                        <button
                            type="button"
                            onClick={() =>
                                handleDeleteMessage(singleMessage.id)
                            }
                        >
                            Delete
                        </button>
                    ) : (
                        ""
                    )}

                    {singleMessage.userId ===
                    JSON.parse(sessionStorage.getItem("nutshell_user")).id ? (
                        <Link to={`/messages/${singleMessage.id}/edit`}>
                            <button>Edit</button>
                        </Link>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    )
}
