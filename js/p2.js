
$(function(){

    $('#select li').click(function(){

        $(this).toggleClass('active');

    });
});

$(document).ready(function() {
    // article에서 li 클릭 시 해당 li를 popup-modal에 추가하고 표시
    $('#select article li').on('click', function() {
        const selectedText = $(this).find('p').text();
        const $popupUl = $('#popup-modal ul');
        const $newLi = $('<li><p>' + selectedText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
        $popupUl.append($newLi);
        $newLi.show();
    });

    // popup-modal에서 li의 이미지 클릭 시 해당 li를 삭제
    $('#popup-modal ul').on('click', 'li', function() {
        $(this).remove();
    });
});



