import React from "react"
import { Routes, Route, Outlet, Navigate } from "react-router-dom"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { TaskList } from "./tasks/TaskList"
import { TaskForm } from "./tasks/AddTaskForm"
import { ArticleList } from "./articles/ArticleList"
import { ArticleForm } from "./articles/AddArticleForm"
import { MessageList } from "./messages/MessageList"
import { EditTaskForm } from "./tasks/EditTaskForm"
import { EditArticleForm } from "./articles/EditArticleForm"

export const ApplicationViews = ({isAuthenticated, setIsAuthenticated}) => {
  const PrivateOutlet = () => {
		return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
	}
  
  const setAuthUser = (user) => {
		sessionStorage.setItem("nutshell_user", JSON.stringify(user))
		setIsAuthenticated(sessionStorage.getItem("nutshell_user") !== null)
	}
  
  return (
    <>
      <Routes>
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="friends" element={""} />

          <Route path="messages" element={<MessageList/>} />

          <Route exact path="articles" element={<ArticleList />} />
          <Route path="articles/:articleId/edit" element={<EditArticleForm/>}/>
          <Route path="articles/create" element={<ArticleForm isAuthenticated={isAuthenticated}/>} />

        <Route exact path="tasks" element={<TaskList/>} />
        <Route path="tasks/create" element={<TaskForm/>}/>
        <Route path="tasks/:taskId/edit" element={<EditTaskForm/>}/>

        <Route path="events" element={""} />
      </Route>

        <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />

        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}
