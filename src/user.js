import todoFactory from "./todo";
import taskFactory from "./task";
import projectFactory from "./project";

const user = (() => {
  const projects = [];
  let onProjectsListChanged = () => {};

  const getProjects = () => {
    return projects;
  }
  const addProject = (project) => {
    projects.push(project);

    onProjectsListChanged();
  };
  const removeProject = (project) => {
    const index = projects.indexOf(project);
    if (index > -1) {
      projects.splice(index, 1);
    }
  };

  const initializeUser = () => {
    const projectName = 'Your Project';
    const projectDesc = 'This is your project. This text blurb is your project description, put anything here.';
    const firstProject = projectFactory(projectName, projectDesc);
    const todoTitle = 'To do';
    const todoDesc = 'This is a todo. Add checklist tasks, due dates, and priorities here.';
    const dueDate = 'Tues, 10: 30 am';
    const priority = 'Urgent';
    const notes = 'Add notes and any additional thoughts here';
    const firstTodo = todoFactory(todoTitle, todoDesc, dueDate, priority, notes);
    const taskName = 'Make your first task';
    const firstTask = taskFactory(taskName);
    firstTodo.addTask(firstTask);
    firstProject.addTodo(firstTodo);
    addProject(firstProject);
  };

  const bindProjectListChanged = (callback) => {
    onProjectsListChanged = callback;
  }

  initializeUser();

  return { getProjects, addProject, removeProject, bindProjectListChanged };
})();

export default user;