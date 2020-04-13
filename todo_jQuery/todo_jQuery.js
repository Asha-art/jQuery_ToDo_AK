
 

$(document).ready(function() {
    $('button').on("click",function addList() {
        var text = $("#addTodo").val();   //getting value of text input element
        var li = $('<li/>')               //adding list value to var li 
          .text(text)                      //The text() method sets or returns the text content of the selected elements.      
        
    //    .on("click",function addList() { 
    //     $('#list').css("text-decoration", "line-through"); //strikethrough
    //    });
   
      $('ul').on("click",function addList() { 
        
            $('#list').remove()
        });       // remove the item when clicked
         
       

            $("#list").append(li);  //inserts the specified content as the last child or in the end of the list       
        
            $("input:text").val("");  //clear the input field
 });  
});

