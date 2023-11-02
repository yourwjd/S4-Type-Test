$(function(){

    $("[id^='slider']").on("input", function () {
        
        const x = $(this).val();
        const color = 'linear-gradient(90deg, #00DB4A ' + x + '%, #fff ' + x + '%)';
    
        $(this).css("background", color);
    });

});


// 이벤트 핸들러 함수 등록
document.addEventListener('DOMContentLoaded', function() {
    const slider1 = document.getElementById('slider1'); // 단맛 슬라이더
    const slider2 = document.getElementById('slider2'); // 신맛 슬라이더
    const slider3 = document.getElementById('slider3'); // 짠맛 슬라이더
    const slider4 = document.getElementById('slider4'); // 매운맛 슬라이더
    const resultButton = document.querySelector('#submit-button');

    // 결과 버튼 클릭 이벤트 핸들러
    resultButton.addEventListener('click', function() {
        const pValue = parseInt(slider1.value, 10);
        const yValue = parseInt(slider2.value, 10);
        const bValue = parseInt(slider3.value, 10);
        const gValue = parseInt(slider4.value, 10);
        
        // 모든 슬라이더 값이 0인 경우
        if(pValue === 0 && yValue === 0 && bValue === 0 && gValue === 0) {
            // 경고 창 띄우기
            alert("모든 값이 0입니다. 설정을 다시 해주세요.");
            window.location.href = './p6.html';
        } else {
            // 결과 페이지로 이동하면서 선택한 값들을 쿼리 매개변수로 전달
            window.location.href = `./result.html?p=${pValue}&y=${yValue}&b=${bValue}&g=${gValue}`;
        }    
    });
});
