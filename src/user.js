import todoFactory from "./todo";
import taskFactory from "./task";
import projectFactory from "./project";

const user = (() => {
  const projects = [];
  let projectIdCounter = 0;
  let onProjectsListChanged = () => {};

  const incrementProjectIdCounter = () => {
    projectIdCounter += 1;
  };

  const getProjectIdCounter = () => {
    return projectIdCounter;
  };

  const getProjects = () => {
    return projects;
  }
  const getProjectById = (id) => {
    return projects.find(project => project.getId() === id);
  };
  const addProject = (project) => {
    projects.push(project);

    onProjectsListChanged();
  };
  const removeProject = (project) => {
    const index = projects.indexOf(project);
    if (index > -1) {
      projects.splice(index, 1);
    }
    onProjectsListChanged();
  };

  const bindProjectListChanged = (callback) => {
    onProjectsListChanged = callback;
  }

  return { 
    getProjects, 
    addProject, 
    removeProject, 
    bindProjectListChanged,
    getProjectById,
    incrementProjectIdCounter,
    getProjectIdCounter };
})();

export default user;