
$(function(){

    $('#select li').click(function(){

        $(this).toggleClass('active');
        $('#popup-modal').css('height','210px')

        if ($('#select li.active').length === 0) {
            $('#popup-modal').css('height', '170px');
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
                        $('#popup-modal').css('height', '170px');
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
            $('#popup-modal').css('height', '170px');
        }
    });

});