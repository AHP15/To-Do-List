import More from '../media/more.png';
import Trash from '../media/trash.png';

const ListItem = (item) => {
  const container = document.createElement('div');
  container.classList.add('item');

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.style.display = 'none';

  const square = document.createElement('div');
  square.classList.add('square');

  const input = document.createElement('input');
  input.value = item.description;

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

  input.addEventListener('focusin', () => actions.replaceChild(trashImage, moreImage));
  input.addEventListener('focusout', () => {
    setTimeout(() => actions.replaceChild(moreImage, trashImage), 500);
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