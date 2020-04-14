
 

$(document).ready(function() {
    $('button').on("click",function addList() {
        var text = $("#addTodo").val();   //getting value of text input element
        if(text === ''){
        alert("add something to the list");
        }else{
         var li = $('<li/>')               //adding list value to var li 
          .text(text)                      //The text() method sets or returns the text content of the selected elements.      
          $("#list").append(li); 
        }
     
        $('#list').on("click",'li',function removeList(){  // when clicked strike through and delete
        $(this).wrap("<strike>")
        //$(this).css({"text-decoration": "overline"}); 
        });    

        $('#list').on("click",'li',function removeList(){ 
        $(this).remove()  // remove the item when clicked
        });

        $('#addTodo').on('keypress',function(event){  //ENTER BUTTON
          if(event.keyCode === 13){
            $('#addBtn').click();
          }
        });
            $("input:text").val("");  //clear the input field
 });  
});

