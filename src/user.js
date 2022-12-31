const user = (() => {
  const projects = [];

  const getProjects = () => {
    return projects;
  }

  const addProject = (project) => {
    projects.push(project);
  };
  const removeProject = (project) => {
    const index = projects.indexOf(project);
    if (index > -1) {
      projects.splice(index, 1);
    }
  };

  return { getProjects, addProject, removeProject };
})();

export default user;