import user from "./user";
import projectFactory from './project'
import todoFactory from "./todo";
import taskFactory from "./task";
import view from './view';
import moment from "moment";

const controller = (() => {
  let currentProjectId = user.getProjectIdCounter();
  const projectNameDefault = 'Your Project';
  const projectDescDefault = 'This is your project. Add your todos here. This text blurb is your project description, put anything here.';
  const todoTitleDefault = 'Todo';
  const todoDescDefault = 'This is a todo. This text blurb is the editable todo description.';
  const todoDateDefault = `${moment().format('YYYY-MM-DD h:mm')}`;
  const todoPriorityDefault = 'Urgent';
  const todoNotesDefault = 'Add notes and any additional thoughts here';
  const taskNameDefault = 'Make your first task';

  const addNewProject = (name, desc, id) => {
    const project = projectFactory(name, desc, id);
    project.bindOnTodoListChanged(onTodoListChanged);
    project.bindOnNameChanged(onProjectNameChanged);
    project.bindOnDescChanged(onProjectDescChanged);
    user.addProject(project);
    return project;
  };

  const addNewTodo = (project, id, title, desc, dueDate, priority, notes) => {
    const todo = todoFactory(id, title, desc, dueDate, priority, notes);
    todo.bindTodoCallback('taskListChanged', onTaskListChanged);
    todo.bindTodoCallback('todoTitleChanged', onTodoTitleChanged);
    project.addTodo(todo);
    return todo;
  }

  const addNewTask = (todo, name, id) => {
    const task = taskFactory(name, id);
    todo.addTask(task);
    return task;
  }

  const getCurrentProjectId = () => {
    return currentProjectId;
  };

  const initializeTodoList = () => {
    view.setTodoList();
    view.setAddTodoButton();
    const firstProject = addNewProject(projectNameDefault, projectDescDefault, currentProjectId);
    const firstTodo = addNewTodo(
      firstProject, 
      firstProject.getTodoIdCounter(), 
      todoTitleDefault, 
      todoDescDefault, 
      todoDateDefault, 
      todoPriorityDefault, 
      todoNotesDefault
    );
    addNewTask(firstTodo, taskNameDefault, firstTodo.getTaskIdCounter());
  }

  const initializeSidebarView = () => {
    view.setProjectListItem(projectNameDefault, currentProjectId);
  };

  const loadProjectInfo = (name, desc) => {
    view.setProjectName(name);
    view.setProjectDescription(desc);
  }

  const loadProject = (project) => {
    loadProjectInfo(project.getName(), project.getDescription())
    view.setTodoList();
    view.setAddTodoButton();
    addTodos(project);
  }

  const initializeProjectView = () => {
    loadProjectInfo(projectNameDefault, projectDescDefault);
    initializeTodoList();
  };

  const loadNewProject = (id) => {
    view.resetProjectView();
    const projectTarget = user.getProjectById(id);
    currentProjectId = id;
    loadProject(projectTarget);
  }

  const initializeView = () => {
    view.initializeView();
    initializeSidebarView();
    initializeProjectView();
  };

  const addTodos = (project) => {
    const list = project.getTodoList();
    list.forEach(todo => {
      const todoObj = {
        projectId: project.getId(),
        todoId: todo.getId(),
        title: todo.getTitle(),
        due: todo.getDueDate(),
        priority: todo.getPriority(),
        desc: todo.getDescription(),
        isMinimized: todo.checkIsMinimized(),
        tasks: todo.getCheckList().map(task => ({
          name: task.getName(),
          id: task.getId(),
          isCompleted: task.checkCompleted()
        })),
        notes: todo.getNotes()
      };
      view.addTodoCard(todoObj);
    });
  };

  const refreshTodoList = () => {
    const currentProject = user.getProjectById(currentProjectId);
    view.resetTodos();
    addTodos(currentProject);
  };

  // Temporary implementation. In future reset only the task list of a
  // todo card instead of all the todo cards in a project.
  const onTaskListChanged = () => {
    refreshTodoList();
  };

  const onTodoListChanged = () => {
    refreshTodoList();
  };

  const onProjectListChanged = () => {
    view.resetProjectList();
    user.getProjects().forEach(project => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const onProjectSwitch = (id) => {
    loadNewProject(id);
  };

  const onTodoTitleChanged = (todoId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    view.updateText(`#todo-${todo.getId()} h2`, todo.getTitle());
  }

  // Call onProjectListChanged too to update the changed project name in 
  // the sidebar.
  const onProjectNameChanged = () => {
    view.updateText('#project-title', user.getProjectById(currentProjectId).getName());
    onProjectListChanged();
  };

  const onProjectDescChanged = () => {
    view.updateText('#project-description', user.getProjectById(currentProjectId).getDescription());
  }

  const handleAddTask = (projectId, todoId, taskName) => {
    const projectTarget = user.getProjectById(projectId);
    const todoTarget = projectTarget.getTodoById(todoId);
    addNewTask(todoTarget, taskName, todoTarget.getTaskIdCounter());
  }

  const handleAddTodo = (todo) => {
    const currentProject = user.getProjectById(todo.projectId);
    const todoId = currentProject.getTodoIdCounter();
    addNewTodo(currentProject, 
      todoId, 
      todo.title, 
      todo.desc, 
      todo.due, 
      todo.priority, 
      todo.notes
    );
  }

  const handleAddProject = (name) => {
    const desc = 'This is your project. This text blurb is your project description, put anything here.';
    addNewProject(name, desc, user.getProjectIdCounter());
  };

  const handleTaskToggle = (todoId, taskId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    const task = todo.getTaskById(taskId);
    task.toggleComplete();
  };

  const handleDeleteProject = (projectId) => {
    const project = user.getProjectById(projectId);
    user.removeProject(project);
  };

  const handleDeleteTodo = (todoId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    project.removeTodo(todo);
  };

  const handleDeleteTask = (todoId, taskId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    const task = todo.getTaskById(taskId);
    todo.removeTask(task);
  };

  const handleMinimizeTodo = (todoId) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(todoId);
    todo.toggleMinimize();
  };

  const handleEditProjectName = (newName) => {
    const project = user.getProjectById(currentProjectId);
    project.editName(newName);
  };

  const handleEditProjectDesc = (newDesc) => {
    const project = user.getProjectById(currentProjectId);
    project.editDescription(newDesc);
  }

  const handleEditTodoTitle = (newTitle, id) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(id);
    todo.editTitle(newTitle);
  };

  const handleEditTodoDesc = (newDesc, id) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(id);
    todo.editDescription(newDesc);
  };

  const handleEditTodoDue = (newDate, id) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(id);
    todo.editDueDate(newDate);
  };

  const handleEditTodoPriority = (newPriority, id) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(id);
    todo.editPriority(newPriority);
  };

  const handleEditTodoNotes = (newNotes, id) => {
    const project = user.getProjectById(currentProjectId);
    const todo = project.getTodoById(id);
    todo.editNotes(newNotes);
  };
 
  user.bindProjectListChanged(onProjectListChanged);
  view.bindCallback('getCurrentId', getCurrentProjectId);
  view.bindCallback('changeProject', onProjectSwitch);
  view.bindCallback('addProject', handleAddProject);
  view.bindCallback('addTodo', handleAddTodo);
  view.bindCallback('addTask', handleAddTask);
  view.bindCallback('deleteProject', handleDeleteProject);
  view.bindCallback('deleteTodo', handleDeleteTodo);
  view.bindCallback('deleteTask', handleDeleteTask);
  view.bindCallback('minimizeTodo', handleMinimizeTodo);
  view.bindCallback('toggleTask', handleTaskToggle);
  view.bindCallback('editProjectName', handleEditProjectName);
  view.bindCallback('editProjectDesc', handleEditProjectDesc);
  view.bindCallback('editTodoTitle', handleEditTodoTitle);
  view.bindCallback('editTodoDue', handleEditTodoDue);
  view.bindCallback('editTodoPriority', handleEditTodoPriority);
  view.bindCallback('editTodoDesc', handleEditTodoDesc);
  view.bindCallback('editTodoNotes', handleEditTodoNotes); 

  return { initializeView };
})();

export default controller;