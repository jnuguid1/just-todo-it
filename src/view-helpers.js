const viewHelpers = (() => {

  // Used function instead of arrow function because 
  // variable arguments is buggy with arrow functions.

  function createDiv() {
    const div = document.createElement('div');
    for (let i = 0; i < arguments.length; i++) {
      div.classList.add(`${arguments[i]}`);
    }
    return div;
  };

  function createIdDiv(id) {
    const div = document.createElement('div');
    div.id = id;
    for (let i = 1; i < arguments.length; i++) {
      div.classList.add(`${arguments[i]}`);
    }
    return div;
  };

  function createList(container) {
    const list = document.createElement('ul');
    container.appendChild(list);
    for (let i = 1; i < arguments.length; i++) {
      list.classList.add(`${arguments[i]}`);
    }
    return list;
  };

  function createListItem(list, text) {
    const listItem = document.createElement('li');
    if (text) {
      listItem.textContent = text;
    }
    list.appendChild(listItem);
    return listItem;
  }

  function createInputForm(id, placeholder, container) {
    const input = document.createElement('input');
    if (id !== 'none') {
      input.id = id;
    }
    input.placeholder = placeholder;
    for (let i = 3; i < arguments.length; i++) {
      input.classList.add(`${arguments[i]}`);
    }
    container.appendChild(input);
    return input;
  };

  function createFormLabel(id, text, container) {
    const label = document.createElement('label');
    label.id = id;
    label.textContent = text;
    container.appendChild(label);
    return label;
  };

  function createTextAreaForm(id, placeholder, container) {
    const input = document.createElement('textarea');
    input.id = id;
    input.placeholder = placeholder;
    for (let i = 3; i < arguments.length; i++) {
      input.classList.add(`${arguments[i]}`);
    }
    container.appendChild(input);
    return input;
  };

  function createDateTimeInput(id, container) {
    const input = document.createElement('input');
    input.type = 'datetime-local';
    input.id = id;
    container.appendChild(input);
  };

  function createButtonForm(element, id, text, container) {
    let btn;
    if (element === 'div') {
      btn = document.createElement('div');
    } else if (element === 'button') {
      btn = document.createElement('button');
    }
    btn.id = id;
    btn.textContent = text;
    for (let i = 4; i < arguments.length; i++) {
      btn.classList.add(`${arguments[i]}`);
    }
    container.appendChild(btn);
    return btn;
  };

  function createSelectForm(id, container, text) {
    const select = document.createElement('select');
    select.id = id;
    const option = document.createElement('option');
    option.value = '';
    option.textContent = text;
    select.appendChild(option);
    for (let i = 3; i < arguments.length; i++) {
      const options = document.createElement('option');
      options.value = arguments[i];
      options.textContent = arguments[i];
      select.appendChild(options);
    }
    container.appendChild(select);
  };

  function createText(container, element, text) {
    const textElement = document.createElement(`${element}`);
    textElement.textContent = text;
    for (let i = 3; i < arguments.length; i++) {
      textElement.classList.add(`${arguments[i]}`);
    }
    container.appendChild(textElement);
    return textElement;
  };
  
  function createIcon(container) {
    const icon = document.createElement('i');
    for (let i = 1; i < arguments.length; i++) {
      icon.classList.add(`${arguments[i]}`);
    }
    container.appendChild(icon);
    return icon;
  };

  return {
    createDiv,
    createIdDiv,
    createList,
    createListItem,
    createInputForm,
    createDateTimeInput,
    createFormLabel,
    createTextAreaForm,
    createButtonForm,
    createSelectForm,
    createText,
    createIcon
  };
})();

export default viewHelpers;