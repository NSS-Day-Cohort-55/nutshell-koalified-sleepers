export const getAllTasks=()=>{
    return fetch('http://localhost:8088/tasks')
    .then(res => res.json())
}

export const addTask=(newTask)=>{
    return fetch ('http://localhost:8088/tasks',{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
    }).then(response => response.json())
}

export const deleteTask=(taskId)=>{
    return fetch(`http://localhost:8088/tasks/${taskId}`, {
        method: "DELETE"
      }).then(result => result.json())
}

export const changeObjective=(singleTask)=>{
    return fetch(`http://localhost:8088/tasks/${singleTask.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(singleTask)
	}).then(data => data.json());

}

export const getTaskById=(taskId)=>{
    return fetch(`http://localhost:8088/tasks/${taskId}`)
  .then(res => res.json())
}

export const updateTask=(singleTask)=>{
    return fetch(`http://localhost:8088/tasks/${singleTask.id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(singleTask)
	}).then(data => data.json());

}