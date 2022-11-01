import './style.css';
import HeadLine from './components/HeadLine';
import Form from './components/Form';
import ListItem from './components/ListItem';

const tasks = [
  {
    description: 'Learn about webpack and ES module',
    completed: false,
    index: 1,
  },
  {
    description: 'Learn about webpack and ES module',
    completed: false,
    index: 2,
  },
  {
    description: 'Learn about webpack and ES module',
    completed: false,
    index: 3,
  },
  {
    description: 'Learn about webpack and ES module',
    completed: false,
    index: 4,
  },
];

const container = document.querySelector('.container');
const tasksConatiner = container.querySelector('.list-container');

container.insertBefore(HeadLine(), container.firstChild);
container.insertBefore(Form(), container.firstChild.nextSibling);

tasks.forEach((task) => tasksConatiner.appendChild(ListItem(task)));