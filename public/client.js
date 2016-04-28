$(function(){
  $.get('/cities', appendToList);

  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      city = cities[i];
      content = '<a href="/cities/'+city+'"</a>';
      list.push($('<li>', { text: cities[i] }));
    }
    $('.cities-list').append(list);
  }
});


$(function(){
  $('form').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    var cityData = form.serialize();

    $.ajax({
      type: 'POST', url: '/cities', data: cityData
    }).done(function(cities){
      appendToList([cities]);
      form.trigger('reset');
    });
  });

});
