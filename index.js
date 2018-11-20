// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,
    markCompleted() {
      this.complete = true;
    },
    logState() {
      console.log(
        `${this.title} has${this.complete ? ' ' : ' not '}been completed`
      );
    },
  };
  return task;
}

// DRIVER CODE BELOW

const task1 = newTask(
  'Clean Cat Litter',
  'Take all the poop out the litter box'
); // task 0
const task2 = ('Do Laundry', 'laundry'); // task 1
const tasks = [task1, task2];
task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed

console.log(tasks);
