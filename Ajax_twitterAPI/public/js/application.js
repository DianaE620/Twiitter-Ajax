$(document).ready(function() {
	// Este código corre después de que `document` fue cargado(loaded) 
	// completamente. 
	// Esto garantiza que si amarramos(bind) una función a un elemento 
	// de HTML este exista ya en la página. 

  $(".loader").hide();
  $("#tweets").on("submit", function(){
    event.preventDefault();
    //alert("lala");
    var info = $(this).serialize();
    $("#insert").hide();

    $(".loader").slideDown(2000, function(){
      $.post("/ajax/twitter", info, function(data){
        //console.log(data);
       
        $(".loader").fadeOut(2000, function(){
          $("#insert").html(data);
          $("#insert").show();
        });
      });
    });
    

  });

});

