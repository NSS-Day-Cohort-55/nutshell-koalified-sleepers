import { Link } from "react-router-dom"


export const EventCard = ({ singleEvent, handleDeleteEvent }) => {

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

                  {/* begin work in progress */}
                  {/* If the event already happened  */}
                  {eventActualDate < todaysDate ? (
                      <>
                          This event has already happened.<br />
                          <button
                              type="button"
                              onClick={() => handleDeleteEvent(singleEvent.id)}
                          >
                              Delete
                          </button>
                      </>
                  ) : (
                      <>
                          <button
                              type="button"
                              onClick={console.log("I don't do anything yet")}
                          >
                              Show Weather
                          </button>
                          <Link to={`/events/${singleEvent.id}/edit`}>
                              <button>Edit</button>
                          </Link>
                          <button
                              type="button"
                              onClick={() => handleDeleteEvent(singleEvent.id)}
                          >
                              Delete
                          </button>
                      </>
                  )}
              </div>
          </div>
      </>
  )
}
