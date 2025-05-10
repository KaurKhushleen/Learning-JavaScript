let todoList = [];

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

    inputTask.value = "";
    inputDate.value = "";
  }
  displayList();
}


function deleteItem(item){
  todoList.splice(item, 1);
  displayList();
  console.log("DELETED", item)
}

function displayList(){
  let html = "";
  

  for(let i = 0; i<todoList.length; i++){
    html += `
            <div>${todoList[i][0]} </div>
            <div>${todoList[i][1]} </div>
            <button class = delete-button onclick = "
              deleteItem(${i});
            "> Delete </button>
            `;
  }
  document.querySelector(".js-todo-list").innerHTML = html;
}