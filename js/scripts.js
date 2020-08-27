
$(document).ready(function() {
  $("#blanks form").submit(function() {
      $(".person1").append("blah blah");
      $(".person2").append("blah blah");
      $(".animal").append("blah blah");
      $(".exclamation").append("blah blah");
      $(".verb").append("blah blah");
      $(".noun").append("blah blah");

      $("#story").show();

      /*event.preventDefault(); 
      without this,by default, forms try to send the information somewhere, 
      and since we haven't told it where to submit to, the page just refreshes and erases our hard work */
  
  });
});