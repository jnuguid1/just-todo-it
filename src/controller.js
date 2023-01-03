import user from "./user";
import projectFactory from './project'
import view from './view';

const controller = (() => {

  const initializeSidebarView = () => {
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName());
    });
  };

  const addTodos = (list) => {
    list.forEach(todo => {
      const todoObj = {
        title: todo.getTitle(),
        due: todo.getDueDate(),
        priority: todo.getPriority(),
        desc: todo.getDescription(),
        tasks: todo.getCheckList().map(task => task.getName()),
        notes: todo.getNotes()
      };
      view.addTodoCard(todoObj);
    });
  };

  const initializeProjectView = () => {
    if (user.getProjects().length !== 0) {
      const project = user.getProjects()[0];
      view.setProjectTitle(project.getName());
      view.setProjectDescription(project.getDescription());
      addTodos(project.getTodoList());
      view.setAddTodoButton();
    }
  };

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
  };

  const addSubmitProjectEvent = () => {
    view.bindSubmitProject(handleSubmitProject);
  };

  const onProjectListChange = () => {
    const projects = user.getProjects();
    const projectName = projects[projects.length-1].getName();
    view.setProjectListItem(projectName);
  }

  const handleSubmitProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    user.addProject(projectFactory(name, desc));
    
  };  
  
  view.bindAddProject(addSubmitProjectEvent);
  user.bindProjectListChanged(onProjectListChange);

  return { initializeView };
})();

export default controller;