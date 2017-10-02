const { observable, action, extendObservable } = require('mobx');

class Task {
  constructor(name) {
    extendObservable(this, {
      name: name,
      completed: false,
    })
  }
}

class Store {
  constructor() {
    extendObservable(this, {
      counter: 7,
      tasks: [],
    })

    this.markAsDone = action('markAsDone', index => {
      let task = this.tasks[index];
      task.completed = !task.completed; 
    })

    this.increment = action(function() {
      this.counter++;
    })
  }
}

let store = new Store();
store.tasks.push(new Task('Task 1111'));

module.exports = store;
