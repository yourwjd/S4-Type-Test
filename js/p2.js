$(document).ready(function() {
    // 처음에 popup-modal의 li를 숨깁니다.
    $('#popup-modal ul li').hide();

    const $popupUl = $('#popup-modal ul');
    const $selectLi = $('#select li');
    let clickCount = 0;
    let loadMoreClicked = false;

    $selectLi.on('click', function() {
        if (!loadMoreClicked) {
            if (clickCount < 4) {
                const selectedText = $(this).find('p').text();
                const $newLi = $('<li><p>' + selectedText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
                $popupUl.append($newLi);
                $newLi.show();
                clickCount++;
                if (clickCount >= 4) {
                    addLoadMoreButton();
                }
            } else {
                // 4개 이상 선택된 경우, 추가 아이템만 생성하고 보여주지 않습니다.
                const selectedText = $(this).find('p').text();
                const $newLi = $('<li class="hidden"><p>' + selectedText + '</p><img src="../img/x.png" alt="선택 취소 아이콘"></li>');
                $popupUl.append($newLi);
                $newLi.hide();
            }
        }
    });

    // 각 이미지 클릭 시 해당되는 li 제거
    $popupUl.on('click', 'img', function() {
        const $parentLi = $(this).closest('li');
        const selectedText = $parentLi.find('p').text();
        $selectLi.each(function() {
            if ($(this).find('p').text() === selectedText) {
                $(this).removeClass('active'); // 관련 select li에서 'active' 클래스 제거
            }
        });
        $parentLi.remove();

        if (clickCount >= 4 && $popupUl.find('li').length <= 4) {
            // 4개 이상 선택되었고 현재 보이는 li가 4개 이하일 때 '더 보기' 버튼 제거
            $('#load-more-button').remove();
            loadMoreClicked = false;
        }
    });

    // article li를 클릭했을 때 .active 클래스 추가
    $('article li').on('click', function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    function addLoadMoreButton() {
        if ($('#load-more-button').length === 0) {
            const $loadMoreButton = $('<button id="load-more-button">더 보기</button>');
            $loadMoreButton.click(function() {
                loadMoreClicked = true;
                $popupUl.find('li.hidden').slice(0, 5).show().removeClass('hidden');
            });
            $popupUl.after($loadMoreButton);
        }
    }
});