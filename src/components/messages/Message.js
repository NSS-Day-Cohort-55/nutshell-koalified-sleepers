
export const MessageCard = ({singleMessage}) => {
    return (
        <>
            <div className="card">
                <div className="cardContent">
                    <h3>{singleMessage.title}</h3>
                    <p>{singleMessage.timestamp}</p>
                    <p>{singleMessage.body}</p>
                </div>
            </div>
        </>
    )
}