import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { addEvent, getAllEvents } from "../../modules/EventManager"

export const EventForm = () => {

     const [event, setEvent] = useState({
       eventName: "",
       location: "",
       eventDate: "",
       userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id,
     })

  const navigate = useNavigate()

  const handleControlledInputChange = (event) => {
    const newEvent = { ...event }
    let selectedVal = event.target.value

    newEvent[event.target.id] = selectedVal

    setEvent(newEvent)
  }

   useEffect(() => {
     getAllEvents().then((events) => {
       setEvent(events)
     })
   }, [])

  const handleClickSaveEvent = (event) => {
    event.preventDefault()

    addEvent(event).then(() => navigate("/events"))
  }

  return (
    <form className="eventForm">
      <h2 className="eventForm__title">New Event</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="objective">Event name:</label>
          <input
            type="text"
            id="eventName"
            onChange={handleControlledInputChange}
            required
            autoFocus
            className="form-control"
            placeholder="Event name"
            value={event.eventName}
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
            className="form-control"
            placeholder="Location"
            value={event.location}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="eventDate">Event date:</label>
          <input
            type="date"
            id="eventDate"
            onChange={handleControlledInputChange}
            required
            className="form-control"
            placeholder="Event date"
            value={event.eventDate}
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
