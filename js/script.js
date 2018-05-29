(function() {
  'use strict';

  //For click Add event
  var getbutton = document.getElementById("button")

  //Click Add Event
  getbutton.addEventListener("click", toDoList, false)

  //Adds item to list
  function toDoList() {
    //Vars for adding item
    var item = document.getElementById("toDoInput").value;
    var text = document.createTextNode(item)
    var newItem = document.createElement('li')
    // This grabs what is in the input field
    newItem.appendChild(text)
    document.getElementById("toDoList").appendChild(newItem)
  }

  function closeTag() {

    var myNodelist = document.getElementByTagName("li")
    var i
    //adds close tags to items
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }
  }

}());
