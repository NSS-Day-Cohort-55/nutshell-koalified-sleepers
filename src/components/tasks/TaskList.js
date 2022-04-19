import { useEffect, useState } from "react";
import { getTaskById, deleteTask, changeObjective } from "../../modules/TaskManager";
import { useNavigate } from "react-router-dom";
import { TaskCard } from "./Task";



export const TaskList=()=>{
    const [tasks, setTasks] = useState([])

    const navigate=useNavigate()

    const getTasks=()=>{
        getTaskById(JSON.parse(sessionStorage.getItem("nutshell_user")).id).then(tasksFromApi=>{
            setTasks(tasksFromApi)
        })
    }
    
    const handleDeleteTask = id => {
        deleteTask(id)
        .then(() => getTasks().then(setTasks));
    };

    const handleChangeTask=(id)=>{ 
        const editTask={
        id: id,    
        isDone: true
        }
        changeObjective(editTask).then(()=>getTasks().then(setTasks))
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
          handleDeleteTask={handleDeleteTask}
          handleChangeTask={handleChangeTask}
         />)}
    </div>
        </>
    )





}