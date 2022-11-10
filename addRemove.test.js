import { addTask, removeTask } from './src/components/addRemove';

// Test the addTask()
describe('Test the addTask() function', () => {
  test('adding an item to [] empty list of tasks should result on one element array', () => {
    // Arrange
    const emptyList = [];
    const description = 'this the first task';

    // Act
    const tasks = addTask(emptyList, description);
    // Assert
    expect(tasks).toEqual([{
      description,
      index: 1,
      completed: false,
    }]);
  });

  test('Should set the index property accordingly', () => {
    // Arrange
    const list = [
      { description: 'dummy text', index: 1, completed: false },
      { description: 'dummy text', index: 2, completed: false },
      { description: 'dummy text', index: 3, completed: false },
    ];
    const description = 'this the first task';

    // Act
    const tasks = addTask(list, description);
    // Assert
    expect(tasks).toEqual([...list, { description, index: 4, completed: false }]);
  });
});

// Test the removetask()
describe('Test the removeTask() function', () => {
  let myList;
  beforeEach(() => {
    myList = [
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text2', index: 2, completed: false },
      { description: 'dummy text3', index: 3, completed: false },
    ];
  });

  test('remove an item from an empty list should return emty list', () => {
    // Arrange
    const list = [];
    const index = 10;

    // Act
    const tasks = removeTask(list, index);

    // Assert
    expect(tasks).toEqual([]);
  });

  test('remove item from a list should return a new one without the item and change the index property accordinly', () => {
    // Arrange
    const list = myList;
    const index = 2;

    // Act
    const tasks = removeTask(list, index);

    // Assert
    expect(tasks).toEqual([
      { description: 'dummy text1', index: 1, completed: false },
      { description: 'dummy text3', index: 2, completed: false },
    ]);
  });

  test('tying to remove an index that does not exist should return the same list', () => {
    // Arrange
    const list = myList;
    const index = 5;

    // Act
    const tasks = removeTask(list, index);

    // Assert
    expect(tasks).toEqual([...list]);
  });
});
