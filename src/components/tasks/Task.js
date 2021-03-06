import { Link } from "react-router-dom"


export const TaskCard = ({singleTask, handleDeleteTask, handleChangeTask}) => {
   

   

    return (
        <>
        <div className="card">
            <div className="cardContent">
               <h3>{singleTask.objective}</h3><br/>
               <p>Due date: {singleTask.dueDate}</p><br/>
               <p>Did you finish this? {singleTask.isDone ? "Yes": "No"} </p>
               {singleTask.isDone?
                <button type="button" onClick={() => handleDeleteTask(singleTask.id)}>Archive</button> :
                <label><input type="checkbox" onClick={() => handleChangeTask(singleTask.id)}></input>
                Mark as finished</label>}<br/>
                {singleTask.isDone? "":<Link to={`/tasks/${singleTask.id}/edit`}>
    <button>Edit</button>
  </Link>}
            </div>
        </div>
        </>
    )
}


