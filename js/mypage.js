// 일기 샘플
const diaries = {
    "2026-10-16": {
        emotion: "sad",
        title: "아픈 하루",
        content: "아침부터 몸이 좋지 않았지만 일단 출근했다. 조금 쉬면 괜찮아질 줄 알았는데 시간이 지날수록 몸이 더 안 좋아졌다. 어떻게든 버텨보려고 했지만 도저히 일을 계속할 수 없을 것 같아서 결국 조퇴하고 병원에 다녀왔다. 진작 쉬었어야 했나 싶기도 하고, 아픈 몸으로 출근했다가 결국 일찍 돌아오게 되니 괜히 속상했다. 해야 할 일도 남아 있었는데 제대로 마무리하지 못한 것 같아 마음이 무거웠다. 그래도 지금은 건강부터 챙기는 게 맞겠지. 약도 잘 챙겨 먹고 푹 쉬어야겠다. 내일은 오늘보다 몸이 조금이라도 나아졌으면 좋겠다."
    },
    "2026-10-17": {
        emotion: "bad",
        title: "하루 종일 휴식",
        content: "어제 병원에서 받아온 약을 먹고 하루 종일 집에서 쉬었다. 잠깐 일어나서 밥을 먹는 것 말고는 거의 누워서 시간을 보냈다. 평소 같으면 하루를 이렇게 보내는 게 아깝다고 생각했을 텐데, 몸이 안 좋으니 아무것도 하지 않는 것도 쉽지 않다는 생각이 들었다. 아직 몸이 무겁고 피곤하지만 푹 자고 나니 조금은 괜찮아진 것 같다. 마침 주말이라 출근하지 않아도 된다는 게 얼마나 다행인지 모르겠다. 평일에 아팠으면 더 힘들었을 것 같다. 오늘은 밀린 일이나 해야 할 일을 생각하지 않고 푹 쉬기로 했다. 얼른 회복해서 다시 평소처럼 생활하고 싶다."
    },
    "2026-10-20": {
        emotion: "happy",
        title: "이벤트 당첨!",
        content: "회사에서 진행한 이벤트에 당첨됐다! 사실 별 기대 없이 참여했던 거라 당첨 소식을 듣고 처음에는 잘못 본 줄 알았다. 확인해 보니 정말 내 이름이 있어서 신기하고 기분이 좋았다. 선물은 가습기라고 하는데, 요즘 날씨가 건조해져서 하나 살까 고민하고 있었던 터라 더 반가웠다. 필요했던 물건을 이렇게 선물로 받게 되니 돈을 아낀 것 같아서 좋기도 하고, 생각지도 못한 행운이 찾아온 것 같아 기분이 들떴다. 빨리 받아서 방에 두고 사용해 보고 싶다. 별일 없는 평범한 하루라고 생각했는데 이런 소소한 기쁨이 생기니 하루가 다르게 느껴진다. 앞으로도 좋은 일이 종종 생겼으면 좋겠다."
    },
    "2026-10-21": {
        emotion: "good",
        title: "취향 저격 신메뉴",
        content: "오늘은 자주 가는 카페에 신메뉴가 나왔다는 소식을 듣고 들러 봤다. 평소에도 그 카페의 음료를 좋아해서 이번 메뉴도 궁금했다. 어떤 맛일지 기대하면서 주문했는데, 한 모금 마시자마자 생각보다 더 맛있어서 놀랐다. 너무 달지도 않고 내가 좋아하는 맛이라 정말 마음에 들었다. 괜히 새로운 메뉴에 도전했다가 입맛에 안 맞으면 아쉬울 때도 있는데, 이번에는 성공한 것 같다. 다음에 카페에 가도 또 주문할 것 같다. 별것 아닌 일처럼 보일 수 있지만, 좋아하는 장소에서 마음에 드는 메뉴를 발견하면 괜히 기분이 좋아진다. 다음에는 다른 신메뉴도 한번 먹어 봐야겠다. 오늘은 작은 즐거움 덕분에 기분 좋은 하루였다."
    },
    "2026-10-23": {
        emotion: "happy",
        title: "오랜만에 만난 친구",
        content: "오늘은 오랜만에 친구를 만나 함께 시간을 보냈다. 서로 바쁘게 지내다 보니 자주 만나지는 못했는데, 막상 만나니 오랜만이라는 느낌이 들지 않을 정도로 편하고 좋았다. 그동안 있었던 일들을 이야기하고 별것 아닌 농담에도 한참 웃었다. 오래 알고 지낸 친구라 그런지 굳이 말을 꾸미거나 눈치를 보지 않아도 되고, 서로 무슨 생각을 하는지 자연스럽게 알 수 있어서 편하다. 같이 맛있는 것도 먹고 여기저기 구경하다 보니 시간이 정말 빠르게 지나갔다. 헤어질 때는 조금 아쉬웠지만 다음에 또 만나기로 약속해서 기분 좋게 돌아왔다. 역시 오래된 친구와 보내는 시간은 특별한 것 같다. 바쁘다는 이유로 자꾸 약속을 미루지 말고 앞으로는 조금 더 자주 만나야겠다. 오늘처럼 편하게 웃을 수 있는 시간이 자주 있었으면 좋겠다."
    }
};


// 작성한 일기
const diaryList = document.querySelector("#diaryList");
const diaryContent = document.querySelector("#diaryContent");
// 설정
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

// 일기 샘플 list 출력
const diaryContents = document.querySelector("#diaryContents");
document.addEventListener("DOMContentLoaded", () => {
    diaryContents.innerHTML = Object.entries(diaries).map(([date, diary]) => `
        <tr>
            <td>${date.replaceAll("-", ".")}</td>
            <td><p onclick="showDiaryContent('${date}')">${diary.title}</p></td>
            <td><img src="assets/images/emoji/face_${diary.emotion}.png" alt="${diary.emotion} 표정"></td>
        </tr>
    `).join("");
});


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

// 일기 상세 내용 열기
function showDiaryContent(date) {
    const getDiary = diaries[date];
    diaryContent.querySelector(".diary-date").textContent = date.replaceAll("-", ".");
    diaryContent.querySelector(".diary-face").src = `assets/images/emoji/face_${getDiary.emotion}.png`;
    diaryContent.querySelector(".diary-title").textContent = getDiary.title;
    diaryContent.querySelector(".diary-content").textContent = getDiary.content;

    diaryList.classList.add("d-none");
    diaryContent.classList.remove("d-none");
}
// 일기 상세 내용 닫기
function hideDiaryContent() {
    diaryList.classList.remove("d-none");
    diaryContent.classList.add("d-none");
}