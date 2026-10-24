const userAiSet = document.querySelector("#userAiSet");
const aiFeedback = document.querySelector("#aiFeedback");
const aiFeedbackSub = document.querySelector("#aiFeedbackSub");
const aiSpeech = document.querySelector("#aiSpeech");
const aiLength = document.querySelector("#aiLength");
const selectAiSet = document.querySelector("#selectAiSet");
const selectAiSetItems = document.querySelectorAll("#selectAiSet > div > div");
const selectAiSetInputRadios = document.querySelectorAll('#selectAiSet input[type="radio"]');
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

// AI 피드백 스타일
const aiStyles = {
    "feedback": {
        "empathy": ["공감과 위로", "감정을 이해하고 따뜻한 말로 위로합니다.", "오늘 정말 힘들었겠어요. 안좋은 감정을 느끼는게 자연스러워요."],
        "analysis": ["감정 분석", "일기에서 드러나는 감정과 그 원인을 정리해줍니다.", "업무에서 느낀 부담감과 타인의 평가에 대한 걱정이 나타나요."],
        "resolution": ["해결 방법 제안", "상황을 개선하거나 기분을 전환할 방법을 제안합니다.", "오늘은 잠깐 휴식을 취하고, 내일 해야 할 일을 하나씩 정리해 보는 건 어떨까요?"]
    },
    "speech": {
        "kind": "따뜻하고 다정하게",
        "calm": "차분하고 담백하게",
        "friendly": "친근한 친구처럼",
        "polite": "차분하고 정중하게"
    },
    "length": {
        "min": "짧게 - 핵심만 간결하게",
        "middle": "보통 - 적당한 설명",
        "max": "길게 - 자세한 분석과 설명"
    }
}


// AI 피드백 스타일 설정 보이기
function showAiSetting() {
    userAiSet.classList.add("d-none");
    selectAiSet.classList.remove("d-none");
    showAiSetItems(0);
}

// 유저가 설정한 AI 피드백 스타일 보이기(= AI 피드백 스타일 설정 완료)
function hideAiSetting() {
    selectAiSet.classList.add("d-none");
    userAiSet.classList.remove("d-none");

    // 선택 항목 초기화
    selectAiSetInputRadios.forEach(radio => {
        radio.checked = false;
    });
}

// AI 피드백 새로운 스타일로 저장 & 변경
function saveAiSet() {
    const checkedFeedback = document.querySelector('input[name="feedback"]:checked').value;
    const checkedSpeech = document.querySelector('input[name="speech"]:checked').value;
    const checkedLength = document.querySelector('input[name="length"]:checked').value;

    aiFeedback.textContent = aiStyles["feedback"][checkedFeedback][0];
    aiFeedbackSub.textContent = aiStyles["feedback"][checkedFeedback][1];
    aiSpeech.textContent = aiStyles["speech"][checkedSpeech];
    aiLength.textContent = aiStyles["length"][checkedLength];

    hideAiSetting();
    alert("변경되었습니다.");
}

// AI 피드백 설정 페이지 이동
function showAiSetItems(index) {
    const thisSetValue = selectAiSetItems[index].querySelector('input[type="radio"]:checked');
    selectAiSetItems.forEach((item, idx) => {
        index === idx ? item.classList.remove("d-none") : item.classList.add("d-none");
    })

    // 해당 페이지에 선택된 값 있으면 다음 버튼 클릭 가능
    // 없으면 disabled = true
    nextBtn.disabled = thisSetValue ? false : true;

    // 위치별 버튼 변경
    switch (index) {
        case 0:
            prevBtn.textContent = "변경 취소";
            prevBtn.onclick = hideAiSetting;
            nextBtn.textContent = "말투 선택";
            break;
        case 1:
            prevBtn.textContent = "피드백 선택";
            nextBtn.textContent = "길이 선택";
            break;
        case 2:
            prevBtn.textContent = "말투 선택";
            nextBtn.textContent = "저장하기";
            nextBtn.onclick = saveAiSet;
            break;
    }

    // 첫번째 선택 부분이 아닌 경우 뒤로가기 이동
    if (index != 0) {
        prevBtn.onclick = () => showAiSetItems(index - 1);
    }
    // 마지막 선택이 아닌 경우 다음으로 이동
    if (index != selectAiSetItems.length - 1) {
        nextBtn.onclick = () => showAiSetItems(index + 1);
    }
}

// input:radio 클릭 시 버튼 disabled 해제
selectAiSetInputRadios.forEach(radio =>
    radio.addEventListener("click", (e) => {
        nextBtn.disabled = false;
    })
)
