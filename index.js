
//  Click Button Animation
function openNav() {
    document.getElementById("myNav").style.height = "80%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
  //Text Drop Animation
  $(document).ready(function(){
    $('#text-drop').mouseleave(function(){
      $(this).removeClass('clicked');
    }).click(function(){
      $(this).addClass('clicked').html($(this).html());
    });
  });