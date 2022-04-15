import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getEventById, updateEvent } from "../../modules/EventManager"

export const EditEventForm = () => {
  const [event, setEvent] = useState({ eventName: "", eventDate: "", location: "" })
  const [isLoading, setIsLoading] = useState(false)

  const { eventId } = useParams()
  const navigate = useNavigate()

  const handleFieldChange = (evt) => {
    const stateToChange = { ...event }
    stateToChange[evt.target.id] = evt.target.value
    setEvent(stateToChange)
  }

  const updateExistingEvent = (evt) => {
    evt.preventDefault()
    setIsLoading(true)

    const editedEvent = {
      id: eventId,
      eventName: event.eventName,
      eventDate: event.eventDate,
      location: event.location
    }

    updateEvent(editedEvent).then(() => navigate("/events"))
  }

  useEffect(() => {
    getEventById(eventId).then((event) => {
      setEvent(event)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="eventName"
              value={event.eventName}
            />
            <label htmlFor="name">Event:</label>

            <input
              type="date"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="eventDate"
              value={event.eventDate}
            />
            <label htmlFor="eventDate">Date:</label>
          </div>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="location"
              value={event.location}
            />
            <label htmlFor="name">Location:</label>

          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEvent}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  )
}