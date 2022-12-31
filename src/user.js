import todoFactory from "./todo";
import taskFactory from "./task";
import projectFactory from "./project";

const user = (() => {
  const projects = [];

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

  initializeUser();

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