$( document ).ready(function() {

  $( "a" ).click(function( event ) {

      alert( "Thanks for visiting!" );

  });


  $( "a" ).click(function( event ) {

     alert( "As you can see, the link no longer took you to jquery.com" );

     event.preventDefault();

 });

  $( "a" ).addClass( "test" );

});
