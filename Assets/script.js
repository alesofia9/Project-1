document.addEventListener('DOMContentLoaded', function() {
   
    var form = document.getElementById('symptom-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      
      var checkboxes = form.querySelectorAll('input[name="symptoms"]:checked');
  
      
      checkboxes.forEach(function(checkbox) {
        console.log(checkbox.value);
      });
    });
  });