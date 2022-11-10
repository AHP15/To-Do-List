import {
  completeTask,
  incompleteTask,
  clearCompletedTasks,
  editTask,
} from '../src/components/completeTask';

describe('Test editTask() for editing the task description', () => {
  test('test for editing description', () => {
    // Arrange
    const list = [
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: false },
      { description: 'dummy text3', index: 3, completed: false },
    ];
    const newTask = { description: 'dummy test2 edited', index: 2, completed: false };
    const index = 2;

    // Act
    const tasks = editTask(list, index, newTask);

    // Assertion
    expect(tasks).toEqual([
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy test2 edited', index: 2, completed: false },
      { description: 'dummy text3', index: 3, completed: false },
    ]);
  });
});

describe('Test function for updating an item`s "completed" status', () => {
  test('test the completeTask() function', () => {
    // Arrange
    const list = [
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: false }, // to be changed
      { description: 'dummy text3', index: 3, completed: false },
    ];
    const index = 2;

    // Act
    const tasks = completeTask(list, index);

    // Assertion
    expect(tasks).toEqual([
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: true }, // changed
      { description: 'dummy text3', index: 3, completed: false },
    ]);
  });

  test('test the incompleteTask() function', () => {
    // Arrange
    const list = [
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: true }, // to be changed
      { description: 'dummy text3', index: 3, completed: false },
    ];
    const index = 2;

    // Act
    const tasks = incompleteTask(list, index);

    // Assertion
    expect(tasks).toEqual([
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: false }, // changed
      { description: 'dummy text3', index: 3, completed: false },
    ]);
  });

  test('test clearCompletedTasks() it should remove the completed tasks', () => {
    // Arrange
    const list = [
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: true }, // to be removed
      { description: 'dummy text3', index: 3, completed: false },
      { description: 'dummy text3', index: 4, completed: true }, // to be removed
    ];
    // Act
    const tasks = clearCompletedTasks(list);

    // Assertion
    expect(tasks.length).toBe(2);
  });

  test('test clearCompletedTasks() it should change the indeces accordingly', () => {
    // Arrange
    const list = [
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: true }, // to be removed
      { description: 'dummy text3', index: 3, completed: false },
      { description: 'dummy text3', index: 4, completed: true }, // to be removed
    ];

    // Act
    const tasks = clearCompletedTasks(list);
    const task3 = tasks[1];

    // Assertion
    expect(task3.index).toBe(2);
  });
});