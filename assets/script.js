$(document).ready(function () {

    let todoList = [];

    //add date and time to header
    $("#currentDay").text(moment().format('dddd') + ", " + moment().format('MMMM Do YYYY, h:mm a'));

    //when user add input (textarea) and click save button:
    $("button").on("click", function () {

        //define todos: value of textarea- sibling element of the button that is clicked
        var todos = $(this).siblings("textarea").val();
        //define hours: text from div- sibling element of the button that is clicked
        var hours = $(this).siblings("div").text();
        //creat object 'list': key -hours with value 'hours'; key-todos with value 'todos'
        var list = { "hours": hours, "todos": todos };
        //add new object to 'todoList'
        todoList.push(list);

        //localstorage 'todoList'
        localStorage.setItem("todoList", JSON.stringify(todoList));
    })

    //retrieve todoList
    var savedList = JSON.parse(localStorage.getItem("todoList"));

    // test if there is values in savedList
    if (savedList) { //if savedList is truthy meaning there is something in the savedList
        todoList = savedList;
        console.log("todos saved")
        //paint retrieved 'todos' from todoList to textarea HTML
        for (var i = 0; i < todoList.length; i++) {
          console.log(todoList[i]);
          $("#" + todoList[i].hours).text(todoList[i].todos); //
        }
      } else { //else if savedList falsy meaning savedList is empty
        console.log("no todos")
      }

})
