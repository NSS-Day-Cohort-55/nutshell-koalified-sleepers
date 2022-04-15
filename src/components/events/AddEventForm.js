import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addEvent } from "../../modules/EventManager"

export const EventForm = () => {
  const [events, setEvents] = useState({
    eventName: "",
    dueDate: "",
    location: "",
    userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id,
  })

  const navigate = useNavigate()

  const handleControlledInputChange = (event) => {
    const newEvent = { ...events }
    let selectedVal = event.target.value

    newEvent[event.target.id] = selectedVal

    setEvents(newEvent)
  }

  const handleClickSaveEvent = (event) => {
    event.preventDefault()

    addEvent(events).then(() => navigate("/events"))
  }

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventName">Event:</label>
          <input
            type="text"
            id="eventName"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Event name or description"
            value={events.eventName}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventDate">Date</label>
          <input
            type="date"
            id="eventDate"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            value={events.eventDate}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Location"
            value={events.location}
          />
        </div>
      </fieldset>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleClickSaveEvent}
      >
        Save Event
      </button>
    </form>
  )
}
