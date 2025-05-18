let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
displayList();

function addItem(){
  let inputTask = document.querySelector(".js-task-input");
  let task = inputTask.value;

  let inputDate = document.querySelector(".js-date-input");
  let date = inputDate.value;

  if (task == "" || date == "")
    document.querySelector(".js-error").innerHTML = "Missing Values";

  else{
    document.querySelector(".js-error").innerHTML = "";
    todoList.push([task, date]);
    localStorage.setItem("todoList", JSON.stringify(todoList));

    inputTask.value = "";
    inputDate.value = "";
  }
  displayList();
}


function deleteItem(item){
  todoList.splice(item, 1);
  localStorage.setItem("todoList", JSON.stringify(todoList));
  displayList();
  console.log("DELETED", item)
}


function displayList(){
  let html = "";
  

  for(let i = 0; i<todoList.length; i++){
    html += `
            <div class = displayed-task>${todoList[i][0]} </div>
            <div>${todoList[i][1]} </div>
            <button class = delete-button onclick = "
              deleteItem(${i});
            "> Delete </button>
            `;
  }
  document.querySelector(".js-todo-list").innerHTML = html;
}