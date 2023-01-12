import user from "./user";
import projectFactory from "./project";
import todoFactory from "./todo";
import taskFactory from "./task";
import view from "./view";
import moment from "moment";

const controller = (() => {
  let currentProjectId = user.getProjectIdCounter();
  const projectNameDefault = "Your Project";
  const projectDescDefault =
    "This is your project. Add your todos here. This text blurb is your project description, put anything here.";
  const todoTitleDefault = "Todo";
  const todoDescDefault =
    "This is a todo. This text blurb is the editable todo description.";
  const todoDateDefault = `${moment().format("YYYY-MM-DD h:mm")}`;
  const todoPriorityDefault = "Urgent";
  const todoNotesDefault = "Add notes and any additional thoughts here";
  const taskNameDefault = "Make your first task";

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
    todo.bindTodoCallback("taskListChanged", onTaskListChanged);
    todo.bindTodoCallback("todoTitleChanged", onTodoTitleChanged);
    todo.bindTodoCallback("todoDescChanged", onTodoDescChanged);
    todo.bindTodoCallback("todoNotesChanged", onTodoNotesChanged);
    todo.bindTodoCallback("todoDueDateChanged", onTodoDueDateChanged);
    todo.bindTodoCallback("todoPriorityChanged", onTodoPriorityChanged);
    project.addTodo(todo);
    return todo;
  };

  const addNewTask = (todo, name, id) => {
    const task = taskFactory(name, id);
    todo.addTask(task);
    task.bindOnTaskNameChanged(onTaskNameChanged);
    return task;
  };

  const getCurrentProjectId = () => {
    return currentProjectId;
  };

  const initializeTodoList = () => {
    view.setTodoList();
    view.setAddTodoButton();
    const firstProject = addNewProject(
      projectNameDefault,
      projectDescDefault,
      currentProjectId
    );
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
  };

  const initializeSidebarView = () => {
    view.setProjectListItem(projectNameDefault, currentProjectId);
  };

  const loadProjectInfo = (name, desc) => {
    view.setProjectName(name);
    view.setProjectDescription(desc);
  };

  const loadProject = (project) => {
    loadProjectInfo(project.getName(), project.getDescription());
    view.setTodoList();
    view.setAddTodoButton();
    addTodos(project);
  };

  const initializeProjectView = () => {
    loadProjectInfo(projectNameDefault, projectDescDefault);
    initializeTodoList();
  };

  const loadNewProject = (id) => {
    view.resetProjectView();
    const projectTarget = user.getProjectById(id);
    currentProjectId = id;
    loadProject(projectTarget);
  };

  const initializeView = () => {
    view.initializeView();
    initializeSidebarView();
    initializeProjectView();
  };

  const addTodos = (project) => {
    const list = project.getTodoList();
    list.forEach((todo) => {
      const todoObj = {
        projectId: project.getId(),
        todoId: todo.getId(),
        title: todo.getTitle(),
        due: todo.getDueDate(),
        priority: todo.getPriority(),
        desc: todo.getDescription(),
        isMinimized: todo.checkIsMinimized(),
        tasks: todo.getCheckList().map((task) => ({
          name: task.getName(),
          id: task.getId(),
          isCompleted: task.checkCompleted(),
        })),
        notes: todo.getNotes(),
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
    user.getProjects().forEach((project) => {
      view.setProjectListItem(project.getName(), project.getId());
    });
  };

  const onProjectSwitch = (id) => {
    loadNewProject(id);
  };

  const getTodo = (todoId) => {
    const project = user.getProjectById(currentProjectId);
    return project.getTodoById(todoId);
  };

  const getTask = (todoId, taskId) => {
    const todo = getTodo(todoId);
    return todo.getTaskById(taskId);
  };

  const onTodoTitleChanged = (todoId) => {
    const todo = getTodo(todoId);
    view.updateText(`#todo-${todo.getId()} .todo-title`, todo.getTitle());
  };

  const onTodoDescChanged = (todoId) => {
    const todo = getTodo(todoId);
    view.updateText(
      `#todo-${todo.getId()} .todo-description`,
      todo.getDescription()
    );
  };

  const onTodoNotesChanged = (todoId) => {
    const todo = getTodo(todoId);
    view.updateText(
      `#todo-${todo.getId()} .todo-notes`,
      todo.getNotes()
    );
  };

  const onTodoDueDateChanged = (todoId) => {
    const todo = getTodo(todoId);
    view.updateText(
      `#todo-${todo.getId()} .todo-due-date`,
      `Due: ${todo.getDueDate().replace("T", " ")}`
    )
  }

  const onTodoPriorityChanged = (todoId) => {
    const todo = getTodo(todoId);
    view.updatePriority(
      `#todo-${todo.getId()} .todo-priority`,
      todo.getPriority()
    );
  }

  // Temporary implementation. Need implementation that does not
  // involve resetting whole todolist
  const onTaskNameChanged = (todoId, taskId) => {
    refreshTodoList();
  };

  // Call onProjectListChanged too to update the changed project name in
  // the sidebar.
  const onProjectNameChanged = () => {
    view.updateText(
      "#project-title",
      user.getProjectById(currentProjectId).getName()
    );
    onProjectListChanged();
  };

  const onProjectDescChanged = () => {
    view.updateText(
      "#project-description",
      user.getProjectById(currentProjectId).getDescription()
    );
  };


  const handleAddTask = (projectId, todoId, taskName) => {
    const projectTarget = user.getProjectById(projectId);
    const todoTarget = projectTarget.getTodoById(todoId);
    addNewTask(todoTarget, taskName, todoTarget.getTaskIdCounter());
  };

  const handleAddTodo = (todo) => {
    const currentProject = user.getProjectById(todo.projectId);
    const todoId = currentProject.getTodoIdCounter();
    addNewTodo(
      currentProject,
      todoId,
      todo.title,
      todo.desc,
      todo.due,
      todo.priority,
      todo.notes
    );
  };

  const handleAddProject = (name) => {
    const desc =
      "This is your project. This text blurb is your project description, put anything here.";
    addNewProject(name, desc, user.getProjectIdCounter());
  };

  const handleTaskToggle = (todoId, taskId) => {
    getTask(todoId, taskId).toggleComplete();
  };

  const handleDeleteProject = (projectId) => {
    const project = user.getProjectById(projectId);
    user.removeProject(project);
  };

  const handleDeleteTodo = (todoId) => {
    const todo = getTodo(todoId);
    user.getProjectById(currentProjectId).removeTodo(todo);
  };

  const handleDeleteTask = (todoId, taskId) => {
    const task = todo.getTaskById(todoId, taskId);
    todo.removeTask(task);
  };

  const handleMinimizeTodo = (todoId) => {
    getTodo(todoId).toggleMinimize();
  };

  const handleEditProjectName = (newName) => {
    const project = user.getProjectById(currentProjectId);
    project.editName(newName);
  };

  const handleEditProjectDesc = (newDesc) => {
    const project = user.getProjectById(currentProjectId);
    project.editDescription(newDesc);
  };

  const handleEditTodoTitle = (newTitle, id) => {
    getTodo(id).editTitle(newTitle);
  };

  const handleEditTodoDesc = (newDesc, id) => {
    getTodo(id).editDescription(newDesc);
  };

  const handleEditTodoDue = (newDate, id) => {
    getTodo(id).editDueDate(newDate);
  };

  const handleEditTodoPriority = (newPriority, id) => {
    getTodo(id).editPriority(newPriority);
  };

  const handleEditTodoNotes = (newNotes, id) => {
    getTodo(id).editNotes(newNotes);
  };

  const handleEditTaskName = (newName, todoId, taskId) => {
    getTask(todoId, taskId).editName(newName);
  };

  user.bindProjectListChanged(onProjectListChanged);
  view.bindCallback("getCurrentId", getCurrentProjectId);
  view.bindCallback("changeProject", onProjectSwitch);
  view.bindCallback("addProject", handleAddProject);
  view.bindCallback("addTodo", handleAddTodo);
  view.bindCallback("addTask", handleAddTask);
  view.bindCallback("deleteProject", handleDeleteProject);
  view.bindCallback("deleteTodo", handleDeleteTodo);
  view.bindCallback("deleteTask", handleDeleteTask);
  view.bindCallback("minimizeTodo", handleMinimizeTodo);
  view.bindCallback("toggleTask", handleTaskToggle);
  view.bindCallback("editProjectName", handleEditProjectName);
  view.bindCallback("editProjectDesc", handleEditProjectDesc);
  view.bindCallback("editTodoTitle", handleEditTodoTitle);
  view.bindCallback("editTodoDue", handleEditTodoDue);
  view.bindCallback("editTodoPriority", handleEditTodoPriority);
  view.bindCallback("editTodoDesc", handleEditTodoDesc);
  view.bindCallback("editTodoNotes", handleEditTodoNotes);
  view.bindCallback("editTaskName", handleEditTaskName);

  return { initializeView };
})();

export default controller;
