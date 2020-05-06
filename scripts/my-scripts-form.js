// A $( document ).ready() block.
$( document ).ready(function() {
  
  //Begin Volunteer Form
  $(document).on('change', '#t-size', chkSize);
  
  function chkSize() {
    //alert('chkSize test');
    
    var t_size = $('#t-size').val();
    
    if(t_size == 'other'){
      //alert(t_size);
      
      $('#other').removeAttr('disabled');
    }//end if
    else{
      $('#other').attr('disabled', true);
      $('#other').val('');
    }//end else
      
  }//end function
  //End Volunteer Form
  
});

