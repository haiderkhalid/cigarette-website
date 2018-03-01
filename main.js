$(document).ready(function() {
    console.log('test');
    var currentIndex = 0;
    
    function setPage(index) {
      $('.navigation li').removeClass('selected');
      $('.navigation li').eq(index).addClass('selected');
      $('.panel').css('z-index', 0);
      $('.panel').eq(index).css('z-index', 2);
    }
    $('.navigation li').click(function() {
      var index = $('.navigation li').index($(this));
      currentIndex = index;
      setPage(currentIndex);
      
    });
    
    $('.right').click(function() {
      if(currentIndex < 3) {
          currentIndex = currentIndex + 1;
        setPage(currentIndex);
      } 
    });

    $('.left').click(function() {
      if(currentIndex > 0) {
          currentIndex = currentIndex - 1;
        setPage(currentIndex);
       }
    });
})