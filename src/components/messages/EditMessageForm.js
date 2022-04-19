import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getMessageById, updateMessage } from "../../modules/MessageManager"
import "./MessageList.css"

export const EditMessageForm = () => {
    const [message, setMessage] = useState({
        title: "",
        body: "",
        timestamp: "",
        userId: 0
    })
    const [isLoading, setIsLoading] = useState(false)

    const { messageId } = useParams()
    const navigate = useNavigate()

    const handleFieldChange = (evt) => {
        const stateToChange = { ...message }
        stateToChange[evt.target.id] = evt.target.value
        setMessage(stateToChange)
    }

    const updateExistingMessage = (evt) => {
        evt.preventDefault()
        setIsLoading(true)

        const editedMessage = {
            id: message.id,
            title: message.title,
            body: message.body,
            timestamp: message.timestamp,
            userId: message.userId
        }

        updateMessage(editedMessage).then(() => navigate("/messages"))
    }

    useEffect(() => {
        getMessageById(messageId).then((message) => {
            setMessage(message)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="name">Title:</label><br />
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={message.title}
                        />
                    </div>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="name">Body:</label><br />
                        <textarea
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="body"
                            value={message.body}
                        ></textarea>
                    </fieldset>
                    <div className="alignRight">
                        <button
                            type="button"
                            disabled={isLoading}
                            onClick={updateExistingMessage}
                            className="btn btn-primary"
                        >
                            Submit
                        </button>
                    </div>
            </form>
        </>
    )
}
