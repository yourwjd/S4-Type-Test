$(function() {

  const buttonInitialPosition = $('#popup-modal2 button').position();
  
  $('#open-modal-button').click(function() {
    $('#modal').addClass('active');
    $('#popup-modal2').appendTo('#modal'); // #popup-modal2를 #modal 안에 추가합니다.
    adjustPopupModalHeight();
  });

  $('.listInner').click(function() {
    $(this).toggleClass('active');
    if ($('.listInner.active').length > 0) {
      $('#popup-modal2').css('height', '210px');
    } else {
      $('#popup-modal2').css('height', '170px');
    }
  });
  
  $('#close-button').click(function() {
    $('#modal').removeClass('active');
    $('#popup-modal2').css('height', '170px');
    $('#popup-modal2 button').css('position', 'static');
  });


  $('.listInner input[type="checkbox"]').click(function() {
    const foodname = $(this).siblings('.foodname');
    const checked = $(this).prop('checked');
    foodname.css('color', checked ? '#00DB4A' : 'white');
    const $listInner = $(this).closest('.listInner');
    if (checked) {
      $listInner.addClass('active');
      const foodnameText = foodname.text();
      const $newPM2Li = $('<li class="p-m2-li"><p>' + foodnameText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
      $newPM2Li.on('click', function() {
        const selectedText = $(this).find('p').text();
        const $listInner = $('.listInner').filter(function() {
          return $(this).find('.foodname').text() === selectedText;
        });
        $listInner.find('input[type="checkbox"]').prop('checked', false);
        $listInner.find('.foodname').css('color', 'white');
        $listInner.removeClass('active');
        $(this).remove();
        if ($('.listInner.active').length === 0) {
          $('#popup-modal2').css('height', '170px');
        } else {
          const activeListInnerHeight = $('.listInner.active').length * $('.listInner').outerHeight();
          $('#popup-modal2').css('height', activeListInnerHeight);
        }
      });
      $('#popup-modal2 ul').append($newPM2Li);
    } else {
      $listInner.removeClass('active');
      const foodnameText = foodname.text();
      const $selectedPM2Li = $('#popup-modal2 ul').find('li').filter(function() {
        return $(this).find('p').text() === foodnameText;
      });
      $selectedPM2Li.remove();
      if ($('.listInner.active').length === 0) {
        $('#popup-modal2').css('height', '170px');
      } else {
        const activeListInnerHeight = $('.listInner.active').length * $('.listInner').outerHeight();
        $('#popup-modal2').css('height', activeListInnerHeight);
      }
    }
  });

  $('.listInner .foodname').click(function() {
    const $listInner = $(this).closest('.listInner');
    const checkbox = $listInner.find('input[type="checkbox"]');
    const checked = checkbox.prop('checked');
    checkbox.prop('checked', !checked);
    const foodname = $(this);
    const isChecked = checkbox.prop('checked');
    foodname.css('color', isChecked ? '#00DB4A' : 'white');
    if (isChecked) {
      $listInner.addClass('active');
      const foodnameText = foodname.text();
      const $newPM2Li = $('<li class="p-m2-li"><p>' + foodnameText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
      $newPM2Li.on('click', function() {
        const selectedText = $(this).find('p').text();
        const $listInner = $('.listInner').filter(function() {
          return $(this).find('.foodname').text() === selectedText;
        });
        $listInner.find('input[type="checkbox"]').prop('checked', false);
        $listInner.find('.foodname').css('color', 'white');
        $listInner.removeClass('active');
        $(this).remove();
        if ($('.listInner.active').length === 0) {
          $('#popup-modal2').css('height', '170px');
        } else {
          const activeListInnerHeight = $('.listInner.active').length * $('.listInner').outerHeight();
          $('#popup-modal2').css('height', activeListInnerHeight);
        }
      });
      $('#popup-modal2 ul').append($newPM2Li);
    } else {
      $listInner.removeClass('active');
      const foodnameText = foodname.text();
      const $selectedPM2Li = $('#popup-modal2 ul').find('li').filter(function() {
        return $(this).find('p').text() === foodnameText;
      });
      $selectedPM2Li.remove();
      if ($('.listInner.active').length === 0) {
        $('#popup-modal2').css('height', '210px');
      } else {
        const activeListInnerHeight = $('.listInner.active').length * $('.listInner').outerHeight();
        $('#popup-modal2').css('height', activeListInnerHeight);
      }
    }
  });

  $('#popup-modal2').on('click', 'li img', function() {
    const $li = $(this).closest('li');
    const selectedText = $li.find('p').text();
    const $listInner = $('.listInner').filter(function() {
      return $(this).find('.foodname').text() === selectedText;
    });
    $listInner.find('input[type="checkbox"]').prop('checked', false);
    $listInner.find('.foodname').css('color', 'white');
    $listInner.removeClass('active');
    $li.remove();
    if ($('.listInner.active').length === 0) {
      $('#popup-modal2').css('height', '170px');
    } else {
      const activeListInnerHeight = $('.listInner.active').length * $('.listInner').outerHeight();
      $('#popup-modal2').css('height', activeListInnerHeight);
    }
  });

  $('#close-button').click(function() {
    $('#modal').removeClass('active');
    $('#popup-modal2').css('height', '170px');
  });
});



function filter() {
  let search = document.getElementById("search").value.toLowerCase();
  let listInner = document.getElementsByClassName("listInner");

  for (let i = 0; i < listInner.length; i++) {
    foodname= listInner[i].getElementsByClassName("foodname");
    if (foodname[0].innerHTML.toLowerCase().indexOf(search) != -1
    ) {
      listInner[i].style.display = "flex"
    } else {
      listInner[i].style.display = "none"
    }
  }
}