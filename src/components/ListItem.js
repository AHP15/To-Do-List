import More from '../media/more.png';
import Trash from '../media/trash.png';
import Done from '../media/done.png';

const ListItem = (item) => {
  const container = document.createElement('div');
  container.classList.add('item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.style.display = 'none';

  const square = document.createElement('div');
  square.classList.add('square');
  const doneImage = document.createElement('img');
  doneImage.src = Done;
  doneImage.addEventListener('click', (e) => {
    e.stopPropagation();
    const incompleted = new CustomEvent('itemincomplete', {
      detail: {
        index: item.index,
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(incompleted);
  });
  if (item.completed) {
    square.classList.add('square_checked');
    square.appendChild(doneImage);
  }
  square.addEventListener('click', () => {
    const completed = new CustomEvent('itemcompleted', {
      detail: {
        index: item.index,
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(completed);
  });

  const input = document.createElement('input');
  input.value = item.description;
  if (item.completed) {
    input.classList.add('input-completed');
  }

  const actions = document.createElement('div');
  actions.classList.add('actions');
  const moreImage = document.createElement('img');
  moreImage.src = More;
  const trashImage = document.createElement('img');
  trashImage.src = Trash;
  trashImage.addEventListener('click', () => {
    const removeTask = new CustomEvent('removetask', {
      detail: {
        index: item.index,
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(removeTask);
  });
  actions.appendChild(moreImage);

  container.appendChild(checkbox);
  container.appendChild(square);
  container.appendChild(input);
  container.appendChild(actions);

  input.addEventListener('focusin', () => {
    actions.replaceChild(trashImage, moreImage);
    input.classList.remove('input-completed');
  });
  input.addEventListener('focusout', () => {
    setTimeout(() => actions.replaceChild(moreImage, trashImage), 500);
    input.classList.add('input-completed');
  });
  input.addEventListener('input', () => {
    const editTask = new CustomEvent('edittask', {
      detail: {
        info: {
          newTask: { ...item, description: input.value },
          index: item.index,
        },
      },
    });
    const tasksConatiner = document.querySelector('.list-container');
    tasksConatiner.dispatchEvent(editTask);
  });

  return container;
};

export default ListItem;