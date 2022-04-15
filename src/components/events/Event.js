import { Link } from "react-router-dom"

export const EventCard = ({
  singleEvent,
  handleDeleteEvent,
  handleChangeEvent,
}) => {
  return (
    <>
      <div className="card">
        <div className="cardContent">
          <h3>{singleEvent.eventName}</h3>
          <br />
          <p>Date: {singleEvent.eventDate}</p>
          <p>{singleEvent.location}</p>
          <Link to={`/events/${singleEvent.id}/edit`}>
            <button>Edit</button>
          </Link>
          {/* <button
            type="button"
            onClick={() => handleChangeEvent(singleEvent.id)}
          >
            Edit
          </button> */}
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
