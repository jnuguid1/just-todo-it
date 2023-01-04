import user from "./user";
import projectFactory from './project'
import todoFactory from "./todo";
import taskFactory from "./task";
import view from './view';

const controller = (() => {
  let currentProjectId;
  let projectIdCounter = 0;

  const incrementProjectIdCounter = () => {
    projectIdCounter += 1;
  }

  const initializeUser = () =>{
    const projectName = 'Your Project';
    const projectDesc = 'This is your project. This text blurb is your project description, put anything here.';
    const projectId = projectIdCounter;
    currentProjectId = projectId;
    incrementProjectIdCounter();
    const firstProject = projectFactory(projectName, projectDesc, projectId);
    firstProject.bindOnTodoListChanged(onTodoListChanged);
    const todoTitle = 'To do';
    const todoDesc = 'This is a todo. Add checklist tasks, due dates, and priorities here.';
    const dueDate = 'Tues, 10: 30 am';
    const priority = 'Urgent';
    const notes = 'Add notes and any additional thoughts here';
    const firstTodo = todoFactory(todoTitle, todoDesc, dueDate, priority, notes);
    const taskName = 'Make your first task';
    const firstTask = taskFactory(taskName);
    firstTodo.addTask(firstTask);
    firstProject.initialAddTodo(firstTodo);
    user.addProject(firstProject);
  }

  const initializeSidebarView = () => {
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const initializeProjectView = () => {
    if (user.getProjects().length !== 0) {
      const project = user.getProjects()[0];
      view.setCurrentProjectId(project.getId());
      view.setProjectTitle(project.getName());
      view.setProjectDescription(project.getDescription());
      view.setAddTodoButton();
      addTodos(project.getTodoList());
    }
  };

  const loadProject = (id) => {
    view.resetProjectView();
    const projects = user.getProjects();
    const projectTarget = projects.find(project => project.getId() === id);
    currentProjectId = id;
    view.setCurrentProjectId(projectTarget.getId());
    view.setProjectTitle(projectTarget.getName());
    view.setProjectDescription(projectTarget.getDescription());
    view.setAddTodoButton();
    //view.bindAddTodo(addSubmitTodoEvent);
    addTodos(projectTarget.getTodoList());
  }

  const initializeView = () => {
    initializeSidebarView();
    initializeProjectView();
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

  const addSubmitProjectEvent = () => {
    view.bindSubmitProject(handleSubmitProject);
  };

  const addSubmitTodoEvent = () => {
    view.bindSubmitTodo(handleSubmitTodo);
  }

  const onTodoListChanged = () => {
    const currentProject = user.getProjectById(currentProjectId);
    const todoList = currentProject.getTodoList();
    const addedTodo = todoList[todoList.length-1];
    const todoObj = {
      title: addedTodo.getTitle(),
      due: addedTodo.getDueDate(),
      priority: addedTodo.getPriority(),
      desc: addedTodo.getDescription(),
      tasks: addedTodo.getCheckList().map(task => task.getName()),
      notes: addedTodo.getNotes()
    }
    view.addTodoCard(todoObj);
  }

  const onProjectListChange = () => {
    const projects = user.getProjects();
    const projectTarget = projects[projects.length-1];
    const projectName = projectTarget.getName();
    const projectId = projectTarget.getId();
    view.setProjectListItem(projectName, projectId);
  }

  const onProjectSwitch = (id) => {
    loadProject(id);
  };

  const handleSubmitTodo = (todo) => {
    const currentProject = user.getProjectById(todo.projectId);
    const newTodo = todoFactory(
      todo.title,
      todo.desc,
      todo.due,
      todo.priority,
      todo.notes
    );
    currentProject.addTodo(newTodo);
  }

  const handleSubmitProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    const newProject = projectFactory(name, desc, projectIdCounter);
    newProject.bindOnTodoListChanged(onTodoListChanged);
    user.addProject(newProject);
    incrementProjectIdCounter();
  };  
  
  initializeUser();
  view.bindAddTodo(addSubmitTodoEvent);
  view.bindAddProject(addSubmitProjectEvent);
  user.bindProjectListChanged(onProjectListChange);
  view.bindChangeProject(onProjectSwitch);

  return { initializeView };
})();

export default controller;