export const EventCard = ({singleEvent, handleDeleteEvent}) => {

    return (
      <>
        <div className="card">
          <div className="cardContent">
            <h3>{singleEvent.eventName}</h3>
            <br />
            <p>Date: {singleEvent.eventDate}</p>
            <p>{singleEvent.location}</p>
            <button
              type="button"
              onClick={() => handleDeleteEvent(singleEvent.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </>
    )

}