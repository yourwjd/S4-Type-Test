// 이벤트 핸들러 함수 등록
document.addEventListener('DOMContentLoaded', function() {
    let queryParams = new URLSearchParams(window.location.search);
    let pValue = queryParams.get('p');
    let yValue = queryParams.get('y');
    let bValue = queryParams.get('b');
    let gValue = queryParams.get('g');

    var resultImg = document.getElementById('result-img');
    var resultP = document.getElementById('result-p');
    var resultH2 = document.getElementById('result-h2');

    if (pValue !== null && yValue !== null && bValue !== null && gValue !== null) {
        pValue = parseInt(pValue, 10);
        yValue = parseInt(yValue, 10);
        bValue = parseInt(bValue, 10);
        gValue = parseInt(gValue, 10);

        console.log(pValue);
        console.log(yValue);
        console.log(bValue);
        console.log(gValue);

        if (pValue > yValue && pValue > bValue && pValue > gValue) {
            // sssp
            console.log('sssp');
            resultImg.src = '../img/result/sssp.png';
            resultP.textContent = '단맛 ㅣ SSSP';
            document.getElementById('result-h1').textContent = 
            '달콤한게 좋아! 초딩입맛 쉐이커';
            resultH2.innerHTML = 
            '단맛을 너무나도 좋아하는 당신! <br><br>혹시 입맛 연령이 초딩인건 아니시죠? 달콤한 건 기분을 좋게 만들죠~ 하지만 너무 단것은 몸에 좋지 않으니 다크 초콜릿 처럼 씁쓸한 맛도 한번 시도해보세요!';

        } else if (yValue > pValue && yValue > bValue && yValue > gValue) {
            // sssy
            console.log('sssy');
            resultImg.src = '../img/result/sssy.png';
            resultP.textContent = '신맛 ㅣ SSSY';
            document.getElementById('result-h1').textContent = 
            '아이 셔! 침 고이는 상큼한 쉐이커';
            resultH2.innerHTML = 
            '신맛을 너무나도 좋아하는 당신! <br><br>저도 신맛을 좋아하는데요 신맛만 너무 많이, 자주 먹게되면 몸에 이상 신호가 올 수 있어요! 그렇게 되지 않도록 주의하세요!';

        } else if (bValue > pValue && bValue > yValue && bValue > gValue) {
            // sssb
            console.log('sssb');
            resultImg.src = '../img/result/sssb.png';
            resultP.textContent = '짠맛 ㅣ SSSB';
            document.getElementById('result-h1').textContent = 
            '물 벌컥벌컥 한사바리 쉐이커';
            resultH2.innerHTML = 
            '짠맛을 너무나도 좋아하는 당신! <br><br>오늘도 짭짤한 음식을 드실테죠 물과 함께 드시길 권장합니다 당신의 건강은 소중하니까요 :)';

        } else if (gValue > pValue && gValue > yValue && gValue > bValue) {
            // sssg
            console.log('sssg');
            resultImg.src = '../img/result/sssg.png';
            resultP.textContent = '매운맛 ㅣ SSSG';
            document.getElementById('result-h1').textContent = 
            '맵다 매워! 땀 맺히는 쉐이커';
            resultH2.innerHTML = 
            '매운맛을 너무나도 좋아하는 당신! <br><br>혹시 마초 피플이신가요? 위에 무리가 간 건 아닌지 괜찮은지 걱정이 되네요. 너무 매운 음식은 위염을 유발 할 수 있으니 조심하시기 바랍니다 :)';

        } else if (pValue === yValue && pValue > bValue && pValue > gValue) {
            // sspy
            console.log('sspy');
            resultImg.src = '../img/result/sspy.png';
            resultP.textContent = '단맛 ,신맛 ㅣ SSPY';
            resultP.style.width = '33.8541vw';
            document.getElementById('result-h1').textContent = 
            '구미가 확! 당기는 새콤달콤 쉐이커';
            resultH2.innerHTML = 
            '단맛과 신맛을 너무나도 좋아하는 당신! <br><br>새콤달콤한 맛을 좋아하는 것 뿐만 아니라 성격도 통통 튀시나요? 가끔은 차분한 맛도 맛보는 것은 어떤가요~?';

        } else if (pValue === bValue && pValue > yValue && pValue > gValue) {
            // sspb
            console.log('sspb');
            resultImg.src = '../img/result/sspb.png';
            resultP.textContent = '단맛, 짠맛 ㅣ SSPB';
            resultP.style.width = '33.8541vw';
            document.getElementById('result-h1').textContent = 
            '단짠단짠 자극이 최고야! 쉐이커';
            resultH2.innerHTML = 
            '단맛과 짠맛을 너무나도 좋아하는 당신! <br><br>단짠은 최고의 궁합이지만 많이 먹으면 너무 자극적일 것 같아요. 오늘은 간을 심심하게 먹어보면 어떨까요?';

        } else if (pValue === gValue && pValue > bValue && pValue > yValue) {
            // sspg
            console.log('sspg');
            resultImg.src = '../img/result/sspg.png';
            resultP.textContent = '단맛, 매운맛 ㅣ SSPG';
            resultP.style.width = '33.8541vw';
            document.getElementById('result-h1').textContent = 
            '좋다 좋아! 자극의 끝판왕! 쉐이커';
            resultH2.innerHTML = 
            '단맛과 매운맛을 너무나도 좋아하는 당신! <br><br>달고 매운 맛을 선호하시는 당신, 혹시 다른 맛을 도전해보시는 건 어떤가요? 달고 매운 음식들도 많지만 항상 같은 느낌만 먹는 건 식상하지 않나요..?';

        } else if (yValue === bValue && yValue > pValue && yValue > gValue) {
            // ssyb
            console.log('ssyb');
            resultImg.src = '../img/result/ssyb.png';
            resultP.textContent = '신맛, 짠맛 ㅣ SSYB';
            resultP.style.width = '33.8541vw';
            document.getElementById('result-h1').textContent = 
            '입에 톡! 쏘는 자극을 즐기는 쉐이커';
            resultH2.innerHTML = 
            '신맛과 짠맛을 너무나도 좋아하는 당신! <br><br> 짠맛과 신맛 모두 자극적인데 아직 혀가 살아 계신가요? 자극적일 수 있으니 자주보단 가끔씩 즐겨 드시는 건 어떨까요?';

        } else if (yValue === gValue && yValue > pValue && yValue > bValue) {
            // ssyg
            console.log('ssyg');
            resultImg.src = '../img/result/ssyg.png';
            resultP.textContent = '신맛, 매운맛 ㅣ SSYG';
            resultP.style.width = '33.8541vw';
            document.getElementById('result-h1').textContent = 
            '맵고도 상큼함을 추구하는 쉐이커';
            resultH2.innerHTML = 
            '신맛과 매운맛을 너무나도 좋아하는 당신! <br><br>매운 자극도 좋지만 리프레쉬 할 수 있는 상큼함을 좋아하시는군요! 혹시 두 가지 맛을 같이 드시는 건 아니시죠..? 건강을 위해 각각 드시는 걸 권장해요~';

        } else if (bValue === gValue && bValue > pValue && bValue > yValue) {
            // ssbg
            console.log('ssbg');
            resultImg.src = '../img/result/ssbg.png';
            resultP.textContent = '짠맛, 매운맛 ㅣ SSBG';
            resultP.style.width = '33.8541vw';
            document.getElementById('result-h1').textContent = 
            '짜도 매워도 좋아좋아 쉐이커';
            resultH2.innerHTML = 
            '짠맛과 매운맛을 너무나도 좋아하는 당신! <br><br>혹시.. 혀가 괜찮으신가요? 맛있어도 한 번쯤 쉬어가는게 좋아요! 물을 자주 마시고 심심한 음식과 함께 먹어보세요!';

        } else if (pValue === yValue && pValue === bValue && pValue > gValue) {
            // spyb
            console.log('spyb');
            resultImg.src = '../img/result/spyb.png';
            resultP.textContent = '단맛, 신맛, 짠맛 ㅣ SPYB';
            resultP.style.width = '42.9687vw';
            document.getElementById('result-h1').textContent = 
            '달지만 얼큰한 매운맛이 좋은 쉐이커';
            resultH2.innerHTML = 
            '단맛과 신맛, 짠맛을 너무나도 좋아하는 당신! <br><br>맵찔이신가요? 가끔은 매운 맛을 즐겨보도록 차근차근 단계를 높여가며 익숙해져 보세요! ';

        } else if (pValue === yValue && pValue === gValue && pValue > bValue) {
              // spbg
              console.log('spyg');
              resultImg.src = '../img/result/spbg.png';
              resultP.textContent = '단맛, 신맛, 매운맛 ㅣ SPYG';
              resultP.style.width = '42.9687vw';
              document.getElementById('result-h1').textContent = 
              '훠궈처럼 입맛에 맞춰 먹는 쉐이커';
              resultH2.innerHTML = 
              '단맛과 신맛, 매운맛을 너무나도 좋아하는 당신! <br><br>맵짠의 조화를 아직 못 느껴 보셨나봐요. 매운맛과 짠맛의 조화가 아주 일품이거든요. 한번 도전해보시는건 어떠신가요?';

        } else if (pValue === bValue && pValue === gValue && pValue > yValue) {
             // spyg
             console.log('spbg');
             resultImg.src = '../img/result/sssy.png';
             resultP.textContent = '단맛, 짠맛, 매운맛 ㅣ SPBG';
             resultP.style.width = '42.9687vw';
             document.getElementById('result-h1').textContent = 
             '혈관 스파이크 건강 챙기자 쉐이커';
             resultH2.innerHTML = 
             '단맛과 짠맛, 매운맛을 너무나도 좋아하는 당신! <br><br> 모든 맛을 많이 드시는 건 아니시죠? 항상 이렇게 먹으면 건강이 안 좋아질 거예요! 간을 적당히해서 먹어보세요~ 건강에도 좋고 맛도 좋을 거예요. <br> 아 혹시 신맛을 싫어하시나요..?';


        } else if (yValue === bValue && yValue === gValue && yValue > pValue) {
            // sybg
            console.log('sybg');
            resultImg.src = '../img/result/sybg.png';
            resultP.textContent = '신맛, 짠맛, 매운맛 ㅣ SYBG';
            resultP.style.width = '42.9687vw';
            document.getElementById('result-h1').textContent = 
            '다양한 자극을 즐기는 쉐이커';
            resultH2.innerHTML = 
            '신맛과 짠맛, 매운맛을 너무나도 좋아하는 당신! <br><br> 다양한 맛을 즐길줄 아시네요~ 피곤할 땐 역시 단게 들어가줘야 피로회복이 되는 것 같아요. 기회가 되시면 단맛도 노려보는건 어떨까요?';

        } else if (pValue === 100 && yValue === 100 && bValue === 100 && gValue === 100) {
            // pybg
            console.log('pybg');
            resultImg.src = '../img/result/pybg.png';
            resultP.textContent = '다 좋아 ㅣ PYBG';
            resultP.style.width = '31.6406vw';
            document.getElementById('result-h1').textContent = 
            '무엇이든 다 잘먹는 올라운더 쉐이커';
            resultH2.innerHTML = 
            '모든 맛을 너무나도 좋아하는 당신! <br><br> 뭐든지 잘 먹는 모습이 보기 좋습니다! 좋아하는 맛들을 골고루 드셔보세요! 더욱 맛있는 식사가 될 거에요  :)';

        } else if (pValue === 50 && yValue === 50 && bValue === 50 && gValue === 50) {
            // ssss
            console.log('ssss');
            resultImg.src = '../img/result/ssss.png';
            resultP.textContent = '그저그래 ㅣ SSSS';
            resultP.style.width = '31.6406vw';
            document.getElementById('result-h1').textContent = 
            '다 맞춰줄 수 있어! 스폰지 쉐이커';
            resultH2.innerHTML = 
            '모든 맛이 보통인 당신! <br><br> 다른 사람들과 모두 잘 어울리겠네요 하지만 가장 좋아하는 맛을 골라보는 건 어떤가요? 더욱 더 재밌는 식사가 될 거예요~';


        } 
        
    }       
});
