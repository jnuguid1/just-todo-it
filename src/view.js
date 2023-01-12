import { doc } from "prettier";
import viewHelpers from "./view-helpers";
import helper from "./view-helpers";

const view = (() => {
  let projectsList;
  let addProjectButton;
  let sidebar;
  let projectContainer;
  let todoList;
  let setProjectSwitchEvent = () => {};
  let addProjectEvent = () => {};
  let addTodoEvent = () => {};
  let addTaskEvent = () => {};
  let toggleTaskEvent = () => {};
  let deleteProjectEvent = () => {};
  let deleteTodoEvent = () => {};
  let deleteTaskEvent = () => {};
  let minimizeTodoEvent = () => {};
  let getCurrentProjectId = () => {};
  let editProjectNameEvent = () => {};
  let editProjectDescEvent = () => {};
  let editTodoTitleEvent = () => {};
  let editTodoDueEvent = () => {};
  let editTodoPriorityEvent = () => {};
  let editTodoDescEvent = () => {};
  let editTodoNotesEvent = () => {};
  let editTaskNameEvent = () => {};

  const setTodoList = () => {
    todoList = helper.createIdDiv("todo-list");
    projectContainer.appendChild(todoList);
  };

  const resetProjectView = () => {
    viewHelpers.removeAllChildren(projectContainer);
  };

  // Skip the last two elements which are the add project button and
  // its corresponding form.
  const resetProjectList = () => {
    viewHelpers.removeChildrenSkipLast(projectsList, 2);
  };

  const setProjectDeleteIcon = (container, projectId) => {
    const deleteProjectIcon = helper.createIcon(
      container,
      "fa-solid",
      "fa-xmark",
      "fa-lg",
      "hidden"
    );
    deleteProjectIcon.addEventListener("click", () => {
      deleteProjectEvent(projectId);
    });
    return deleteProjectIcon;
  };

  const setProjectListItem = (project, projectId) => {
    const projectListContainer = helper.createDiv("project-list-container");
    const projectListItem = helper.createListItem(
      projectListContainer,
      project
    );
    projectListItem.setAttribute("project-id", projectId);
    const deleteProjectIcon = setProjectDeleteIcon(
      projectListContainer, 
      projectId
    );
    projectsList.insertBefore(projectListContainer, addProjectButton);
    projectListItem.addEventListener("click", () => {
      if (projectId !== getCurrentProjectId()) {
        setProjectSwitchEvent(projectId);
      }
    });
    projectListContainer.addEventListener("mouseenter", () => {
      viewHelpers.toggleVisibility(deleteProjectIcon);
    });
    projectListContainer.addEventListener("mouseleave", () => {
      viewHelpers.toggleVisibility(deleteProjectIcon);
    });
  };

  const addInputEditListeners = (text, input, handler, id1, id2) => {
    text.addEventListener("click", () => {
      input.value = text.textContent;
      helper.toggleVisibility(text, input);
      input.focus();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (input.value === "") {
          helper.toggleVisibility(text, input);
        } else {
          handler(input.value, id1, id2);
          helper.toggleVisibility(text, input);
          input.value = "";
        }
      } else if (event.key === "Escape") {
        helper.toggleVisibility(text, input);
        input.value = "";
      }
    });
  };

  const addDateEditListeners = (text, input, button, id, handler) => {
    text.addEventListener("click", () => {
      helper.toggleVisibility(input, button);
      input.focus();
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        if (input.value !== "") {
          handler(input.value, id);
          helper.toggleVisibility(input, button);
          input.value = "";
        }
      }
    })
    button.addEventListener("click", () => {
      if (input.value !== "") {
        handler(input.value, id);
        helper.toggleVisibility(input, button);
        input.value = "";
      }
    })
  };

  const addSelectionEditListeners = (text, input, id, handler) => {
    text.addEventListener("click", () => {
      helper.toggleVisibility(text, input);
    });
    input.addEventListener("change", () => {
      if (input.value === '') {
        helper.toggleVisibility(text, input);
      } else {
        handler(input.value, id);
        helper.toggleVisibility(text, input);
      }
    })
  };

  // Need to append a br element because title and description were made inline-block.
  // They are inline-block so that the element width doesn't inherit parent width.
  const setProjectName = (title) => {
    const projectName = helper.createText(
      projectContainer,
      "h2",
      title,
      "font-medium",
      "mb-16",
      "inline-block"
    );
    const projectTitleEditInput = helper.createInputForm(
      "project-title-edit-input",
      "Enter a new project title",
      projectContainer,
      "hidden",
      "mb-16"
    );
    projectName.id = "project-title";
    projectContainer.appendChild(document.createElement("br"));
    addInputEditListeners(
      projectName,
      projectTitleEditInput,
      editProjectNameEvent
    );
  };

  // Element query is a css selector e.g. "todo-card todo-title"
  const updateText = (elementQuery, text) => {
    const element = document.querySelector(elementQuery);
    element.textContent = text;
  };

  const setProjectDescription = (description) => {
    const projectDescription = helper.createText(
      projectContainer,
      "p",
      description,
      "font-regular",
      "mb-48",
      "inline-block"
    );
    const projectDescEditInput = helper.createInputForm(
      "project-desc-edit-input",
      "Enter a new project description",
      projectContainer,
      "hidden",
      "mb-48"
    );
    projectDescription.id = "project-description";
    projectDescEditInput.size = "90";
    addInputEditListeners(
      projectDescription,
      projectDescEditInput,
      editProjectDescEvent
    );
  };

  // Skip the last element which is the add todo button container
  const resetTodos = () => {
    viewHelpers.removeChildrenSkipLast(todoList, 1);
  };

  const setTodoTitle = (todoId, title, todoCard, cardSection) => {
    const titleContainer = helper.createDiv("title-container");
    const todoTitle = helper.createText(
      titleContainer,
      "h2",
      title,
      "font-medium",
      "todo-title"
    );
    const todoTitleEditInput = helper.createInputForm(
      "none",
      "Enter a new title",
      titleContainer,
      "hidden",
      "todo-title-edit-input"
    );
    todoTitleEditInput.size = "10";
    addInputEditListeners(
      todoTitle,
      todoTitleEditInput,
      editTodoTitleEvent,
      todoId
    );

    const ellipsis = helper.createIcon(
      titleContainer,
      "fa-solid",
      "fa-ellipsis-vertical",
      "fa-lg",
      "ellipsis-container"
    );
    const floatingSelection = createFloatingSelection(
      todoId,
      titleContainer,
      cardSection
    );
    viewHelpers.toggleVisibility(floatingSelection);
    todoCard.appendChild(titleContainer);

    ellipsis.addEventListener("click", () => {
      viewHelpers.toggleVisibility(floatingSelection);
    });
  };

  function createFloatingSelection(todoId, container, cardSection) {
    const selectionContainer = helper.createDiv("selection-container");
    const optionsList = helper.createList(selectionContainer, "options-list");
    const minimizeCardOption = helper.createListItem(
      optionsList,
      "Minimize Todo"
    );
    const deleteTodoOption = helper.createListItem(optionsList, "Delete Todo");
    container.appendChild(selectionContainer);
    cardSection.classList.contains("hidden")
      ? (minimizeCardOption.textContent = "Maximize Todo")
      : (minimizeCardOption.textContent = "Minimize Todo");
    minimizeCardOption.addEventListener("click", () => {
      minimizeTodoEvent(todoId);
    });
    deleteTodoOption.addEventListener("click", () => {
      deleteTodoEvent(todoId);
    });

    return selectionContainer;
  }

  function setPriorityClass(priorityTag, priority) {
    priorityTag.classList.remove("priority-label-urgent");
    priorityTag.classList.remove("priority-label-normal");
    priorityTag.classList.remove("priority-label-unimportant");
    if (priority.toLowerCase() === "urgent") {
      priorityTag.classList.add("priority-label-urgent");
    } else if (priority.toLowerCase() === "normal") {
      priorityTag.classList.add("priority-label-normal");
    } else if (priority.toLowerCase() === "unimportant") {
      priorityTag.classList.add("priority-label-unimportant");
    }
  }

  function updatePriority(elementQuery, text) {
    const priorityTag = document.querySelector(elementQuery);
    priorityTag.textContent = text;
    setPriorityClass(priorityTag, text);
  };

  const setPriorityTag = (container, priority, todoId) => {
    const priorityTag = helper.createText(
      container,
      "p",
      priority,
      "font-small",
      "todo-priority"
    );
    const prioritySelection = helper.createSelectForm(
      'none', container, "Priority", "Urgent", "Normal", "Unimportant"
    );
    prioritySelection.classList.add("hidden");
    setPriorityClass(priorityTag, priority);
    addSelectionEditListeners(
      priorityTag, 
      prioritySelection, 
      todoId, 
      editTodoPriorityEvent
    );
  };

  const setDueDateLabel = (container, formContainer, dueDate, todoId) => {
    const dueDateText = helper.createText(
      container, 
      "p", 
      `Due: ${dueDate}`,
      "font-small",
      "todo-due-date"
    );
    const dueDateEditInput = helper.createDateTimeInput(
      'none', 
      formContainer, 
      "todo-date-input",
      "hidden",
      "mr-8"
    );
    const dateSubmitBtn = helper.createButtonForm(
      'button',
      'none',
      "Submit",
      formContainer,
      'todo-date-submit-btn',
      "hidden"
    );
    addDateEditListeners(
      dueDateText, 
      dueDateEditInput, 
      dateSubmitBtn, 
      todoId, 
      editTodoDueEvent
    );
  };

  // Todo status consists of the todo due date and priority
  const setTodoStatus = (todoId, dueDate, priority, todoCard) => {
    const status = helper.createDiv("mb-16", "status-container");
    const statusFormContainer = helper.createDiv(
      "mb-16", 
      "status-form-container"
    );
    todoCard.appendChild(status);
    todoCard.appendChild(statusFormContainer);
    setDueDateLabel(status, statusFormContainer, dueDate, todoId);
    setPriorityTag(status, priority, todoId);
  };

  const setTodoDescription = (todoId, desc, todoCard) => {
    const todoDescription = helper.createText(
      todoCard,
      "p",
      desc,
      "mb-8",
      "todo-description"
    );
    const todoDescEditInput = helper.createTextAreaForm(
      "none",
      "Enter a new todo description",
      todoCard,
      "todo-desc-edit-input",
      "hidden"
    );
    todoDescEditInput.cols = "29";
    addInputEditListeners(
      todoDescription,
      todoDescEditInput,
      editTodoDescEvent,
      todoId
    );
  };

  const setTask = (todoId, taskId, taskName, container, isCompleted) => {
    const taskNameElement = helper.createText(container, "p", taskName);
    const taskEditNameInput = helper.createInputForm(
      "none",
      "Enter a new name",
      container,
      "task-name-edit-input",
      "hidden"
    );
    addInputEditListeners(
      taskNameElement, 
      taskEditNameInput,
      editTaskNameEvent,
      todoId,
      taskId
    );
    if (isCompleted) {
      taskNameElement.classList.add("task-done");
    } else {
      taskNameElement.classList.remove("task-done");
    }

    return taskNameElement;
  };

  const setTaskCheckCircle = (todoId, container, taskElement, taskObj) => {
    const checklistCircle = helper.createDiv("checklist-circle");
    if (taskObj.isCompleted) {
      checklistCircle.classList.add("circle-filled");
    } else {
      checklistCircle.classList.remove("circle-filled");
    }
    container.insertBefore(checklistCircle, taskElement);
    checklistCircle.addEventListener("click", () => {
      checklistCircle.classList.toggle("circle-filled");
      taskElement.classList.toggle("task-done");
      toggleTaskEvent(todoId, taskObj.id);
    });
  };

  const setTodoTasks = (todoId, tasks, todoCard) => {
    tasks.forEach((task) => {
      const taskContainer = helper.createDiv("task-container");
      todoCard.appendChild(taskContainer);
      const taskNameCircleContainer = helper.createDiv(
        "task-name-circle-container"
      );
      taskContainer.appendChild(taskNameCircleContainer);
      const taskElement = setTask(
        todoId,
        task.id,
        task.name, 
        taskNameCircleContainer,
        task.isCompleted
      );
      setTaskCheckCircle(todoId, taskNameCircleContainer, taskElement, task);
      const deleteProjectIcon = helper.createIcon(
        taskContainer,
        "fa-solid",
        "fa-xmark",
        "fa-lg",
        "hidden"
      );
      const divider = helper.createDiv("checklist-divide");
      const hr = document.createElement("hr");
      divider.appendChild(hr);
      todoCard.appendChild(divider);
      taskContainer.addEventListener("mouseenter", () => {
        deleteProjectIcon.classList.remove("hidden");
      });
      taskContainer.addEventListener("mouseleave", () => {
        deleteProjectIcon.classList.add("hidden");
      });
      deleteProjectIcon.addEventListener("click", () => {
        deleteTaskEvent(todoId, task.id);
      });
    });
  };

  const setAddTaskButton = (projectId, todoId, todoCard) => {
    const addTaskButton = helper.createButtonForm(
      "div",
      "none",
      "Add Task",
      todoCard,
      "p",
      "add-task-button"
    );
    const taskFormContainer = helper.createDiv("hidden");
    todoCard.appendChild(taskFormContainer);
    const taskForm = helper.createInputForm(
      "none",
      "Enter task name",
      taskFormContainer,
      "task-form"
    );
    const taskSubmitButton = helper.createButtonForm(
      "button",
      "none",
      "Submit",
      taskFormContainer,
      "submit-task-btn"
    );
    addTaskButton.addEventListener("click", () => {
      taskFormContainer.classList.toggle("hidden");
    });
    const formEvent = () => {
      const taskName = taskForm.value;
      addTaskEvent(projectId, todoId, taskName);
    };
    taskSubmitButton.addEventListener("click", formEvent);
    taskForm.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        formEvent();
      }
    });
  };

  const setNotes = (todoId, notes, todoCard) => {
    helper.createText(todoCard, "h3", "Notes", "notes-heading");
    const todoNotes = helper.createText(todoCard, "p", notes, "todo-notes");
    const todoNotesEditInput = helper.createTextAreaForm(
      "none",
      "Enter todo notes",
      todoCard,
      "todo-notes-edit-input",
      "hidden"
    );
    todoNotesEditInput.cols = "29";
    addInputEditListeners(
      todoNotes,
      todoNotesEditInput,
      editTodoNotesEvent,
      todoId
    );
  };

  const addTodoCard = (todo) => {
    const todoCardContainer = helper.createDiv();
    const todoCard = helper.createDiv("todo-card");
    const cardTopSection = helper.createDiv("card-top-section");
    const cardBottomSection = helper.createDiv("card-bottom-section");
    todoCard.appendChild(cardTopSection);
    todoCard.appendChild(cardBottomSection);
    todoCard.id = `todo-${todo.todoId}`;
    if (todo.isMinimized === true) {
      cardBottomSection.classList.add("hidden");
    }
    setTodoTitle(todo.todoId, todo.title, cardTopSection, cardBottomSection);
    setTodoStatus(todo.todoId, todo.due, todo.priority, cardTopSection);
    setTodoDescription(todo.todoId, todo.desc, cardTopSection);
    setTodoTasks(todo.todoId, todo.tasks, cardBottomSection);
    setAddTaskButton(todo.projectId, todo.todoId, cardBottomSection);
    setNotes(todo.todoId, todo.notes, cardBottomSection);

    const addTodoButton = document.querySelector("#todo-add-container");
    todoCardContainer.appendChild(todoCard);
    todoList.insertBefore(todoCardContainer, addTodoButton);
  };

  const setTodoForm = (container) => {
    const form = document.createElement("form");
    form.noValidate = true;

    helper.createFormLabel("datetime-label", "Due Date", form);
    helper.createDateTimeInput("due-date-input", form);
    const todoTitle = helper.createInputForm("todo-title", "Title", form);
    const titleError = document.createElement("span");
    titleError.classList.add("error");
    form.appendChild(titleError);
    helper.createSelectForm(
      "priority-select",
      form,
      "Priority",
      "Urgent",
      "Normal",
      "Unimportant"
    );
    const todoDescription = helper.createTextAreaForm(
      "description-textarea",
      "Description",
      form
    );
    const todoNotes = helper.createTextAreaForm("notes-input", "Notes", form);
    helper.createButtonForm("button", "todo-submit-btn", "SUBMIT", form);
    todoTitle.required = true;

    todoTitle.addEventListener("input", () => {
      if (todoTitle.validity.valid) {
        titleError.textContent = "";
        titleError.className = "error";
      }
    });
    const formEvent = () => {
      if (!todoTitle.validity.valid) {
        showError();
      } else {
        let desc;
        let notes;
        if (document.querySelector("#description-textarea").value === "") {
          desc =
            "This is a todo. Add checklist tasks, a due date, and priorities here";
        } else {
          desc = document.querySelector("#description-textarea").value;
        }
        if (document.querySelector("#notes-input").value === "") {
          notes = "Add notes and any additional thoughts here";
        } else {
          notes = document.querySelector("#notes-input").value;
        }
        const todo = {
          projectId: getCurrentProjectId(),
          title: document.querySelector("#todo-title").value,
          due: document
            .querySelector("#due-date-input")
            .value.replace("T", " "),
          priority: document.querySelector("#priority-select").value,
          desc: desc,
          notes: notes,
        };
        addTodoEvent(todo);
        resetTodoSubmitForm();
      }
    };

    form.addEventListener("submit", (event) => {
      formEvent();
      event.preventDefault();
    });
    todoTitle.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        formEvent();
      }
    });
    todoDescription.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        formEvent();
      }
    });
    todoNotes.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        formEvent();
      }
    });
    container.appendChild(form);

    function showError() {
      if (todoTitle.validity.valueMissing) {
        titleError.textContent = "You need to enter a title.";
      }
    }
  };

  const setAddTodoButton = () => {
    const addTodoContainer = helper.createIdDiv("todo-add-container");
    const todoFormContainer = helper.createIdDiv(
      "todo-form-container",
      "hidden"
    );
    const addTodoButton = helper.createButtonForm(
      "div",
      "add-todo-button",
      "Add Todo",
      addTodoContainer,
      "add-todo-button",
      "grey-font",
      "font-medium"
    );
    setTodoForm(todoFormContainer);
    addTodoContainer.appendChild(todoFormContainer);
    todoList.appendChild(addTodoContainer);

    addTodoButton.addEventListener("click", () => {
      todoFormContainer.style.display === "flex"
        ? (todoFormContainer.style.display = "none")
        : (todoFormContainer.style.display = "flex");
    });
  };

  const setProjectForm = () => {
    const projectFormContainer = helper.createIdDiv(
      "project-form-container",
      "hidden"
    );
    const nameForm = helper.createInputForm(
      "project-name-form",
      "Enter the project name",
      projectFormContainer
    );
    const formSubmit = helper.createButtonForm(
      "button",
      "submit-project-button",
      "ENTER",
      projectFormContainer
    );
    projectsList.appendChild(projectFormContainer);

    const formEvent = () => {
      const projectName = nameForm.value;
      addProjectEvent(projectName);
      resetProjectSubmitForm();
    };
    formSubmit.addEventListener("click", formEvent);
    nameForm.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        formEvent();
      }
    });

    return projectFormContainer;
  };

  const resetTodoSubmitForm = () => {
    document.querySelector("#todo-title").value = "";
    document.querySelector("#due-date-input").value = "";
    document.querySelector("#priority-select").value = "";
    document.querySelector("#description-textarea").value = "";
    document.querySelector("#notes-input").value = "";
    document.querySelector("#todo-form-container").style.display = "none";
  };

  const resetProjectSubmitForm = () => {
    const projectNameForm = document.querySelector("#project-name-form");
    projectNameForm.value = "";
    const projectFormContainer = document.querySelector(
      "#project-form-container"
    );
    projectFormContainer.classList.toggle("hidden");
    projectFormContainer.classList.toggle("flex");
  };

  const bindCallback = (event, callback) => {
    switch (event) {
      case "getCurrentId":
        getCurrentProjectId = callback;
        break;
      case "changeProject":
        setProjectSwitchEvent = callback;
        break;
      case "addProject":
        addProjectEvent = callback;
        break;
      case "addTodo":
        addTodoEvent = callback;
        break;
      case "addTask":
        addTaskEvent = callback;
        break;
      case "deleteProject":
        deleteProjectEvent = callback;
        break;
      case "deleteTodo":
        deleteTodoEvent = callback;
        break;
      case "deleteTask":
        deleteTaskEvent = callback;
        break;
      case "minimizeTodo":
        minimizeTodoEvent = callback;
        break;
      case "toggleTask":
        toggleTaskEvent = callback;
        break;
      case "editProjectName":
        editProjectNameEvent = callback;
        break;
      case "editProjectDesc":
        editProjectDescEvent = callback;
        break;
      case "editTodoTitle":
        editTodoTitleEvent = callback;
        break;
      case "editTodoDue":
        editTodoDueEvent = callback;
        break;
      case "editTodoPriority":
        editTodoPriorityEvent = callback;
        break;
      case "editTodoDesc":
        editTodoDescEvent = callback;
        break;
      case "editTodoNotes":
        editTodoNotesEvent = callback;
        break;
      case "editTaskName":
        editTaskNameEvent = callback;
        break;
      default:
        console.error("callback bind error");
    }
  };

  const initializeView = () => {
    const container = document.querySelector("#container");
    sidebar = helper.createIdDiv("sidebar", "primary-color", "p-24");
    projectContainer = helper.createIdDiv(
      "project-container",
      "secondary-color",
      "p-48"
    );
    helper.createText(sidebar, "h1", "Just Todo It", "font-large");
    helper.createText(sidebar, "h2", "Projects", "font-medium", "m-16");
    projectsList = helper.createList(sidebar, "nav-list");
    projectsList.id = "projects-list";
    addProjectButton = helper.createListItem(
      projectsList,
      "Add Project",
      "grey-font"
    );
    addProjectButton.id = "add-project-btn";
    const projectFormContainer = setProjectForm();
    container.appendChild(sidebar);
    container.appendChild(projectContainer);

    addProjectButton.addEventListener("click", () => {
      // The project form container starts with just the hidden class so
      // the event listener will turn off hidden and turn on flex and vice versa.
      projectFormContainer.classList.toggle("flex");
      projectFormContainer.classList.toggle("hidden");
    });
  };

  return {
    initializeView,
    resetProjectView,
    resetProjectList,
    resetTodos,
    setTodoList,
    setProjectName,
    updateText,
    setProjectDescription,
    addTodoCard,
    setProjectListItem,
    setAddTodoButton,
    bindCallback,
    updatePriority
  };
})();

export default view;
