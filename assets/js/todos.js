  $('li').click(function() {
    if ($(this).css('color') === 'rgb(128, 128, 128)') {
      $(this).css({
        color: 'black',
        textDecoration: 'none'
      });
    } else {
      $(this).css({
        color: 'gray',
        textDecoration: 'line-through'
      });
    }
  });

  $('#semangat').append(
    "<audio controls autoplay hidden> <source src='../css/semangat.mp3' type='audio/mpeg' /></audio>"
  );

  // lengkapi jquery untuk menlist hasil dari todolist yang di inputkan
  $('ul').on('click', 'li', function() {
      $(this).css({
        color: 'gray',
        textDecoration: 'line-through'
      });
  });

  // buatlah jquery untuk menekan tombol akan menjadikan data sebagai list
    $('#plus').on('click', function(){
      var inp = $('input').val();
      var tambah = ` <li> <span><i class="fa fa-trash"></i></span> ${inp} </li>`;
		
      $('#todos').append(tambah);
      $('input').val('');
  })