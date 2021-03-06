import { useEffect, useState } from "react"
import { getAllEvents, deleteEvent, updateEvent } from "../../modules/EventManager"
import { useNavigate } from "react-router-dom"
import { EventCard } from "./Event"

export const EventList = () => {
    const [events, setEvents] = useState([])

    const navigate = useNavigate();

    const getEvents = () => {
        getAllEvents().then((eventsFromApi) => {
          setEvents(eventsFromApi)
        })
    }

    const handleDeleteEvent = (id) => {
      deleteEvent(id).then(() => getAllEvents().then(setEvents))
    }

    const handleChangeEvent = (id) => {
      const editEvent = {
        id: id,
        eventName: id.eventName,
        eventDate: id.eventDate,
        location: id.location,
        userId: JSON.parse(sessionStorage.getItem("nutshell_user")).id,
      }
      updateEvent(editEvent).then(() => getAllEvents().then(setEvents))
    }

    useEffect(() => {
      getEvents()
    }, [])

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              navigate("/events/create")
            }}
          >
            Create Event
          </button>
        </section>
        <div className="container-cards">
          {events.map((event) => (
            <EventCard
              key={event.id}
              singleEvent={event}
              handleChangeEvent={handleChangeEvent}
              handleDeleteEvent={handleDeleteEvent}
            />
          ))}
        </div>
      </>
    )

}