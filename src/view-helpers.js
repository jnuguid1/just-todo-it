const viewHelpers = (() => {
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

  /**
   * If insertPosition is 'before', argument[4] should be the
   * node to insert before.
   * If insertPosition is 'after' and there are classes to add,
   * argument[4] should be filled with any value.
   */
  function createText(container, insertPosition, element, text) {
    const textElement = document.createElement(`${element}`);
    textElement.textContent = text;
    for (let i = 5; i < arguments.length; i++) {
      textElement.classList.add(`${arguments[i]}`);
    }
    if (insertPosition === 'before') {
      container.insertBefore(textElement, arguments[4]);
    } else {
      container.appendChild(textElement);
    }
    return textElement;
  }

  return {
    createDiv,
    createIdDiv,
    createInputForm,
    createTextAreaForm,
    createButtonForm,
    createText
  };
})();

export default viewHelpers;