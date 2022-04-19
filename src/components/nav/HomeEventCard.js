import "./Home.css"

export const HomeEventCard = ({ singleEvent }) => {

      return (
          <>
              <div className="card">
                  <div className="cardContent">
                      <h3>{singleEvent.eventName}</h3>
                 
                      <p>Date: {singleEvent.eventDate}</p>
                      <p>{singleEvent.location}</p>
    
                  </div>
              </div>
          </>
      )
    }
    