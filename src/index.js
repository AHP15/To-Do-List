import './style.css';
import HeadLine from './components/HeadLine';
import Form from './components/Form';
import ListItem from './components/ListItem';
import { addTask, removeTask, editTask } from './components/addRemove';

const container = document.querySelector('.container');
container.insertBefore(HeadLine(), container.firstChild);
container.insertBefore(Form(), container.firstChild.nextSibling);

let tasks = [];
const tasksConatiner = container.querySelector('.list-container');
const renderItems = () => {
  tasksConatiner.replaceChildren('');
  tasks.forEach((task) => tasksConatiner.appendChild(ListItem(task)));
};
const setStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
const getStorage = () => {
  const data = JSON.parse(localStorage.getItem('tasks'));
  if (data) tasks = data;
};

getStorage();
renderItems();

tasksConatiner.addEventListener('addtask', (event) => {
  tasks = addTask(tasks, event.detail.description);
  renderItems();
  setStorage();
});

tasksConatiner.addEventListener('removetask', (e) => {
  tasks = removeTask(tasks, e.detail.index);
  renderItems();
  setStorage();
});

tasksConatiner.addEventListener('edittask', (e) => {
  const { index, newTask } = e.detail.info;
  tasks = editTask(tasks, index, newTask);
  setStorage();
});
