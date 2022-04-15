import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTaskById, updateTask } from "../../modules/TaskManager"

export const EditTaskForm = () => {
    const [task, setTask] = useState({ objective: "", dueDate: "" })
    const [isLoading, setIsLoading] = useState(false);

    const { taskId } = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = { ...task };
        stateToChange[evt.target.id] = evt.target.value;
        setTask(stateToChange);
    };

    const updateExistingTask = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedTask = {
            id: taskId,
            objective: task.objective,
            dueDate: task.dueDate
        };

        updateTask(editedTask)
            .then(() => navigate("/tasks")
            )
    }

    useEffect(() => {
        getTaskById(taskId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
            });
    }, []);


    return (
        <>
          <form>
            <fieldset>
              <div className="formgrid">
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="objective"
                  value={task.objective}
                />
                <label htmlFor="name">What do you need to get done?</label>
    
                <input
                  type="date"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="dueDate"
                  value={task.dueDate}
                />
                <label htmlFor="dueDate">Due Date:</label>
              </div>
              {/* Be sure to include location and customer */}
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingTask}
                  className="btn btn-primary"
                >Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );

}