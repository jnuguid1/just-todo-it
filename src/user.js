const user = (() => {
  const projects = [];
  let projectIdCounter = 0;

  let onProjectsListChanged = () => {};

  const getProjectIdCounter = () => {
    return projectIdCounter;
  };

  const getProjects = () => {
    return projects;
  };
  const getProjectById = (id) => {
    return projects.find((project) => project.getId() === id);
  };
  const addProject = (project) => {
    projects.push(project);
    
    projectIdCounter += 1;
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
  };

  return {
    getProjects,
    addProject,
    removeProject,
    bindProjectListChanged,
    getProjectById,
    getProjectIdCounter,
  };
})();

export default user;
