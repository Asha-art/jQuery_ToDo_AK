/* Lab
Let's create a simple todo application
• Show an unordered list of todo's
• Show an input to enter a new todo
• Show a button to add a todo. When the button is clicked:
• The text from the input box is used to add a list item to the
bottom of the list
• The text from the input box is cleared out.
• When the user clicks on a list item, it is removed
• Extra Credit: - When a list item is clicked, cross it out,
then remove it after 1 second.
• Complete the CodeSchool jQuery course */

//var newTodo=document.getElementById('addNewTodo');
//var list =document.createElement('newTodo');

//var list= document.getElementById('#list');
function addList(){
  
    var inputItem =document.getElementById('addTodo').value;  //getting value of text input
    var ul=document.getElementById('list');
    var li =document.createElement('li');  //creating li element to add
    var nxtTodo=document.createTextNode(inputItem);

    li.appendChild(nxtTodo);
    ul.appendChild(li);
    //inputItem =" ";
   document.getElementById("addTodo").value = " "; 
   
   //remove item 
   li.onclick = function (){
          
      this.remove();   //this.parentNode.removeChild(this); 
   }
   
  }

  //strike through
 /* li.onclick = function() {
    var text = this.children[0].innerText.strike();
    this.children[0].innerHTML = text;
    
         //let el = document.querySelector('list');
        //el.style.setProperty('text-decoration', 'line-through');
   }*/




let button = document.getElementById('changeBackgorund');
button.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'grey';
});


function myBorder() {
    document.getElementsByTagName("div").style.border = "thick solid #0000FF";
  }



/*
function removeListItem(){
              //remove item 
    var inputItem =document.getElementById('addTodo').value;
    var ul=document.getElementById('list');
   
    var rmvItem =document.getElementById(inputItem);
    ul.removeChild(rmvItem);
}*/
