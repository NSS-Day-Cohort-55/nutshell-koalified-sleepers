import { Link } from "react-router-dom"


export const EventCard = ({ singleEvent, handleDeleteEvent, handleChangeEvent }) => {

const eventActualDate = Date.parse(singleEvent.eventDate)
const todaysDate = Date.now()

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
                      onClick={console.log("I don't do anything yet")}
                  >
                      Show Weather
                  </button>

                  {/* begin work in progress */}
                  {(eventActualDate < todaysDate  /* is the date before today? */) ? (
                      <button
                          type="button"
                          onClick={() => handleDeleteEvent(singleEvent.id)}
                      >
                          Archive
                      </button>
                  ) : (
                      <Link to={`/events/${singleEvent.id}/edit`}>
                          <button>Edit</button>
                      </Link>
                  )}
                  <br />

                  {/* end work in progress (once the section above works, the commented out section below can be deleted) */}

                  {/* <Link to={`/events/${singleEvent.id}/edit`}>
                      <button>Edit</button>
                  </Link> */}
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
