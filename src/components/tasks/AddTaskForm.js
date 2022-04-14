import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../../modules/TaskManager";



export const TaskForm = () => {

    const [tasks, setTasks] = useState({
		objective: "",
		dueDate: "",
        isDone: false
	});

    const navigate = useNavigate();

    const handleControlledInputChange = (event) => {
		
		const newTask = { ...tasks }
		let selectedVal = event.target.value

        newTask[event.target.id] = selectedVal
		
		setTasks(newTask)
	}

    const handleClickSaveTask = (event) => {
		event.preventDefault()

			addTask(tasks)
				.then(() => navigate("/tasks"))
		
	}


    return (
		<form className="taskForm">
			<h2 className="taskForm__title">New Task</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="objective">What task do you need to get done?</label>
					<input type="text" id="objective" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Objective" value={tasks.objective} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="dueDate">When do you want this done?</label>
					<input type="date" id="dueDate" onChange={handleControlledInputChange} required autoFocus className="form-control" value={tasks.dueDate} />
				</div>
			</fieldset>
			<button type="button" className="btn btn-primary"
				onClick={handleClickSaveTask}>
				Save Task
          </button>
		</form>
	)

}