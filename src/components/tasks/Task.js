

export const TaskCard = ({singleTask}) => {

    return (
        <>
        <div className="card">
            <div className="cardContent">
               <h3>{singleTask.objective}</h3><br/>
               <p>Due date: {singleTask.dueDate}</p><br/>
               <p>Did you finish this? {singleTask.isDone ? "Yes": "No"} </p>
               {singleTask.isDone? <button>Archive</button> :<button>Mark as Finished</button>}
            </div>
        </div>
        </>
    )
}