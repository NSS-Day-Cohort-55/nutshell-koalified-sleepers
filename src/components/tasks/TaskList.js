import { useEffect, useState } from "react";
import { getAllTasks } from "../../modules/TaskManager";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./Task";


export const TaskList=()=>{
    const [tasks, setTasks] = useState([])

    const navigate=useNavigate()

    const getTasks=()=>{
        getAllTasks().then(tasksFromApi=>{
            setTasks(tasksFromApi)
        })
    }

    useEffect(()=> {
        getTasks()
    }, [])


    return (
        <>
        <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {navigate("/tasks/create")}}>
      Create Task
  </button>
</section>
    <div className="container-cards">
      {tasks.map(task =>
        <TaskCard
          key={task.id}
          singleTask={task}
         />)}
    </div>
        </>
    )





}