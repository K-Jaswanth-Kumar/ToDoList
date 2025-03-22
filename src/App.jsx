import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectState(preState => {
      const projectId = Math.random()
      const newTask = {
        text: text,
        projectId: preState.selectedProjectId,
        id: projectId
      }
      return {
        ...preState,
        tasks: [newTask, ...preState.tasks]
      }
    })
  }
  function handleDeleteTask(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(tasks => tasks.id !== id)
      }
    })
  }

  function handleStartAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,

      }
    })
  }
  function selectedProjectId(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,

      }
    })
  }
  function handleCancelAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  function handleAddProject(projectData) {
    setProjectState(preState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...preState,
        selectedProjectId: undefined,
        projects: [...preState.projects, newProject]
      }
    })
  }
  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== projectState.selectedProjectId)
      }
    })
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)
  let Content = <SelectedProject
    project={selectedProject}
    onDelete={handleDeleteProject}
    tasks={projectState.tasks}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask} />
  if (projectState.selectedProjectId === null) {
    Content = <NewProject onAddProject={handleAddProject} onCancelAddProject={handleCancelAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    Content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  console.log(projectState.projects)
  return (
    <main className="h-screen  flex gap-8">
      <ProjectSidebar
        onSelectProject={selectedProjectId}
        onStartAddProject={handleStartAddProject}
        selectedProjectId={projectState.selectedProjectId}
        projects={projectState.projects} />
      {Content}
    </main>
  );
}

export default App;
