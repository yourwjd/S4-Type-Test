
$(function(){

    $('#select li').click(function(){

        $(this).toggleClass('active');
        $('#popup-modal').css('height','41.5364vw')

        if ($('#select li.active').length === 0) {
            $('#popup-modal').css('height', '28.6458vw');
        }
    });

    $('input').click(function(){
        if($('input').is(":checked") == true){
            $('#select li').addClass('active');
            $('#popup-modal ul li').remove();
            const $newLi = $('<li class="active"><p>전체</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
            $('#popup-modal ul').append($newLi);
        }else{
            $('#select li').removeClass('active');
            $('#popup-modal ul li').remove();
        }
    });

    $(document).ready(function() {
        // article에서 li 클릭 시 해당 li를 popup-modal에 추가하거나 삭제
        $('#select li').click(function() {
            const selectedText = $(this).find('p').text();
            const $popupUl = $('#popup-modal ul');

            // 이벤트 핸들러 내에서 클릭한 li 요소를 $(this)로 참조할 수 있도록 저장
            const $clickedLi = $(this);

            const $existingLi = $popupUl.find('li:contains(' + selectedText + ')');

            if ($existingLi.length) {
                // 이미 존재하는 경우, 삭제
                $existingLi.remove();

                // 해당 li를 대상으로 'active' 클래스 제거
                $clickedLi.removeClass('active');
            } else {
                // 존재하지 않는 경우, 추가        
                const $newLi = $('<li class="active"><p>' + selectedText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
                $popupUl.append($newLi);

                // 추가한 li에 대한 이벤트 핸들러 설정
                $newLi.on('click', 'img', function() {
                    // 클릭한 'li'의 텍스트 가져오기
                    const selectedText = $(this).prev('p').text();

                    // 해당 텍스트와 일치하는 '#select li' 대상으로 'active' 클래스 제거
                    $('#select li:contains(' + selectedText + ')').removeClass('active');

                    // 클릭한 'li'를 삭제
                    $(this).parent().remove();

                    if ($('#popup-modal ul li').length === 0) {
                        $('#popup-modal').css('height', '28.6458vw');
                    }
                });
            }
        });

        $('#popup-modal ul').on('click', 'li img', function() {
            // 클릭한 'li'의 텍스트 가져오기
            const selectedText = $(this).prev('p').text();

            // 해당 텍스트와 일치하는 '#select li' 대상으로 'active' 클래스 제거
            $('#select li:contains(' + selectedText + ')').removeClass('active');

            // 클릭한 'li'를 삭제
            $(this).parent().remove();
        });

        if ($('#popup-modal ul li').length === 0) {
            $('#popup-modal').css('height', '28.6458vw');
        }
    });

});































$(function() {
  const $popupModal2 = $('#popup-modal2');
  const $listInner = $('.listInner');

  function adjustModalHeight() {
    const $listItems = $popupModal2.find('ul li');
    $popupModal2.css('height', $listItems.length > 0 ? '41.5364vw' : '28.6458vw');
  }

  function handleListItemAddition($listInnerItem) {
    const foodnameText = $listInnerItem.find('.foodname').text();
    const $newPM2Li = $('<li class="p-m2-li"><p>' + foodnameText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
    $newPM2Li.click(function() {
      handleListItemRemoval($(this));
    });
    $popupModal2.find('ul').append($newPM2Li);
  }

  function handleListItemRemoval($li) {
    const selectedText = $li.find('p').text();
    const $relatedListInner = $listInner.filter(function() {
      return $(this).find('.foodname').text() === selectedText;
    });

    $relatedListInner.find('input[type="checkbox"]').prop('checked', false);
    $relatedListInner.find('.foodname').css('color', 'white');
    $relatedListInner.removeClass('active');
    $li.remove();

    adjustModalHeight();
  }

  $('#open-modal-button').click(function() {
    $('#modal').addClass('active');
    $popupModal2.appendTo('#modal').css('height', '28.6458vw');
  });

  $listInner.find('input[type="checkbox"]').click(function(event) {
    event.stopPropagation();

    const $listInnerItem = $(this).closest('.listInner');
    const checkbox = $(this);
    const currentChecked = checkbox.prop('checked');
    checkbox.prop('checked', !currentChecked);
    $listInnerItem.find('.foodname').css('color', !currentChecked ? '#00DB4A' : 'white');

    const foodnameText = $listInnerItem.find('.foodname').text();
    const $selectedPM2Li = $popupModal2.find('ul').find('li').filter(function() {
        return $(this).find('p').text() === foodnameText;
    });

    if (!currentChecked) {
      if ($selectedPM2Li.length === 0) {
        // 'li'가 존재하지 않을 때만 추가
        $listInnerItem.addClass('active');
        handleListItemAddition($listInnerItem);
      }
    } else {
      $listInnerItem.removeClass('active');
      handleListItemRemoval($selectedPM2Li);
    }
    adjustModalHeight();
  });


  $listInner.find('input[type="checkbox"], .foodname').click(function(event) {
    event.stopPropagation();

    const $listInnerItem = $(this).closest('.listInner');
    const checkbox = $listInnerItem.find('input[type="checkbox"]');
    const currentChecked = checkbox.prop('checked');
    checkbox.prop('checked', !currentChecked);
    $listInnerItem.find('.foodname').css('color', !currentChecked ? '#00DB4A' : 'white');

    if (!currentChecked) {
      $listInnerItem.addClass('active');
      handleListItemAddition($listInnerItem);
    } else {
      $listInnerItem.removeClass('active');
      const foodnameText = $listInnerItem.find('.foodname').text();
      const $selectedPM2Li = $popupModal2.find('ul').find('li').filter(function() {
        return $(this).find('p').text() === foodnameText;
      });
      handleListItemRemoval($selectedPM2Li);
    }
    adjustModalHeight();
  });

  $popupModal2.on('click', 'li img', function() {
    handleListItemRemoval($(this).closest('li'));
    adjustModalHeight();
  });

  $('#close-button').click(function() {
    $('#modal').removeClass('active');
    $('#select li').removeClass('active'); // 여기서 전체 선택을 해제합니다.
    $('#popup-modal ul li').remove(); // 추가된 리스트 아이템들도 모두 삭제합니다.

    // 이 부분은 모달 높이를 조절하는 로직입니다.
    const $popupModal = $('#popup-modal');
    if ($popupModal.find('ul li').length === 0) {
        $popupModal.css('height', '28.6458vw');
    } else {
        $popupModal.css('height', '41.5364vw');
    }
});
});

function filter() {
  let search = document.getElementById("search").value.toLowerCase();
  let listInner = document.getElementsByClassName("listInner");

  let hiddenCount = 0;
  for (let i = 0; i < listInner.length; i++) {
    foodname = listInner[i].getElementsByClassName("foodname");
    if (foodname[0].innerHTML.toLowerCase().indexOf(search) != -1) {
      listInner[i].style.display = "flex";
    } else {
      listInner[i].style.display = "none";
      hiddenCount++;
    }
  }

  const $popupModal2 = $('#popup-modal2');
  const $listItems = $popupModal2.find('ul li');
  const $listInnerItems = $listInner.filter('.active');
  
  if ($listItems.length === 0 && $listInnerItems.length === 0) {
    $popupModal2.css('height', '28.6458vw');
  } else {
    $popupModal2.css('height', '41.5364vw');
  }
}