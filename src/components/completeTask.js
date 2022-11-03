const completeTask = (taskArr, index) => taskArr.map((task) => {
  if (task.index === index) {
    return {
      ...task,
      completed: true,
    };
  }

  return task;
});

const incompleteTask = (taskArr, index) => taskArr.map((task) => {
  if (task.index === index) {
    return {
      ...task,
      completed: false,
    };
  }

  return task;
});

const clearCompletedTasks = (taskArr) => {
  const result = taskArr.filter((task) => !task.completed);
  return result;
};

export { completeTask, incompleteTask, clearCompletedTasks };