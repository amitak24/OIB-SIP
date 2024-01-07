// Task data structure
function Task(title, description) {
    this.title = title;
    this.description = description;
    this.dateAdded = new Date();
    this.completed = false;
  }
  
  // Array to store tasks
  let tasks = [];
  
  // Function to add a new task
  function addNewTask() {
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
  
    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();
  
    if (title === "" || description === "") {
      alert("Please enter both title and description.");
      return;
    }
  
    const newTask = new Task(title, description);
    tasks.push(newTask);
  
    updateLists();
    clearAllForm();
  }
  
  // Function to update the task lists
  function updateLists() {
    const pendingList = document.getElementById("pendingList");
    const completedList = document.getElementById("completedList");
  
    // Clear existing lists
    pendingList.innerHTML = "";
    completedList.innerHTML = "";
  
    // Update Pending and Completed Lists
    tasks.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${task.title}</strong> - ${task.description} (Added: ${task.dateAdded.toLocaleString()})`;
  
      if (task.completed) {
        li.classList.add("completed");
        completedList.appendChild(li);
      } else {
        
        const completeButton = document.createElement("button");
        completeButton.innerText = "Done";
        completeButton.onclick = () => done(task);
        li.appendChild(completeButton);
  
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleted(task);
        li.appendChild(deleteButton);
  
        pendingList.appendChild(li);
      }
    });
  }
  
  // Function to mark a task as complete
  function done(task) {
    task.completed = true;
    updateLists();
  }
  
  // Function to delete a task
  function deleted(task) {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      updateLists();
    }
  }
  
  // Function to clear the add task form
  function clearAllForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }
  
  // Initial update
  updateLists();
  