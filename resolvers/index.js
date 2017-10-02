const tasks = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: true },
  { id: 3, name: 'Task 3', completed: false },
  { id: 4, name: 'Task 4', completed: false },
]

const resolvers = {
  Query: {
    widgets: () => tasks,
    widgetByName: (_, { name }) => tasks.find(task => task.name === name),
  },
  Mutation: {
    toggle: (_, { taskId }) => {
      const task = tasks.find(task => task.id === taskId);
      task.completed = !task.completed;

      return task;
    }
},
};

module.exports = resolvers;
