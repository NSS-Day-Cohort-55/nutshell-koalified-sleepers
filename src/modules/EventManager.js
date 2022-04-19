export const getAllEvents = () => {
  return fetch(
    `http://localhost:8088/events?_sort=eventDate&_order=desc`
  ).then((res) => res.json())
}

export const deleteEvent = (eventId) => {
  return fetch(`http://localhost:8088/events/${eventId}`, {
    method: "DELETE",
  }).then((result) => result.json())
}

export const addEvent=(newEvent)=>{
    return fetch ('http://localhost:8088/events',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    }).then(response => response.json())
  }

  export const getEventById = (eventId) => {
    return fetch(`http://localhost:8088/events/${eventId}`).then((res) =>
      res.json()
    )
  }

  export const updateEvent = (singleEvent) => {
    return fetch(`http://localhost:8088/events/${singleEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(singleEvent),
    }).then((data) => data.json())
  }