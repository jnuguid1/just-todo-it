import user from "./user";
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

  const addTodoButton = () => {
    view.setAddTodoButton();
  }

  const initializeProjectView = () => {
    if (user.getProjects().length !== 0) {
      const project = user.getProjects()[0];
      view.setProjectTitle(project.getName());
      view.setProjectDescription(project.getDescription());
      addTodos(project.getTodoList());
      addTodoButton();
    }
  };

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
  };

  initializeView();
})();

export default controller;