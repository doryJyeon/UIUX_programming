const signupForm = document.querySelector("#signup");
const formMessage = document.querySelector("#formMessage");
const featureTabs = document.querySelectorAll("#featureTabs > button");
const featureCards = document.querySelectorAll("#featureCards > div");
const signUpWriteDiary = document.querySelector("#signUpWriteDiary");
// 일기 작성 팝업 속 Elements =====================
const popupEl = document.querySelector("#popup");
const loginContainer = document.querySelector("#loginContainer");
const writeDiaryPopup = document.querySelector("#writeDiaryPopup");
// 로그인 때 사용
const loginEmail = document.querySelector("#loginEmail");
const testEmail = "test_mail@google.com";
const testPassword = "abc123!!";
const loginPassword = document.querySelector("#loginPassword");
const loginButton = document.querySelector("#loginButton");
// 일기 작성 시 사용
const writeDiaryDate = document.querySelector("#writeDiaryDate");
const selectDate = document.querySelector("#selectDate");
const writeDiaryFeel = document.querySelector("#writeDiaryFeel");
const feelList = document.querySelector("#feelList");
const selectFeel = document.querySelector("#selectFeel");
const writeDiaryTitle = document.querySelector("#writeDiaryTitle");
const writeTitle = document.querySelector("#writeTitle");
const writeTitleMent = document.querySelector("#writeTitleMent");
const writeDiaryDetail = document.querySelector("#writeDiaryDetail");
const writeDiaryTextarea = document.querySelector("#writeDiaryTextarea");
const writeTextareaMent = document.querySelector("#writeTextareaMent");
const writeTextareaLength = document.querySelector("#writeTextareaLength");
// 작성한 일기 확인용
const checkWriteDiary = document.querySelector("#checkWriteDiary");
const checkDate = document.querySelector("#checkDate");
const checkFeel = document.querySelector("#checkFeel");
const checkTitle = document.querySelector("#checkTitle");
const checkDiary = document.querySelector("#checkDiary");
// 일기 작성 시 이전, 다음 버튼
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
// 비밀번호 유효성 정규식
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

// 회원 가입 시 서비스 수신 동의
let subscribed = false;
// 로그인 후 이동할 페이지 구분
let moveLoginAfter = false;

// 날짜 생성
function getDate(day = 0) {
    const date = new Date();
    date.setDate(date.getDate() + day);

    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    return `${yyyy}-${mm}-${dd}`;
}

document.addEventListener("DOMContentLoaded", () => {
    // 일기 작성 팝업 오늘 이후 날짜 막기
    selectDate.max = getDate();
});

// 로그인 확인
function checkLoginCookie() {
    return document.cookie.split("; ").some(cookie => cookie.startsWith("login="));
}

// 회원 가입
function handleSignup(event) {
    event.preventDefault();
    const email = signupForm.querySelector("#email");
    const password = signupForm.querySelector("#password");
    const signupButton = signupForm.querySelector("#signupButton");
    const hasSubscribed = subscribed ? "(서비스 수신 동의)" : "(서비스 수신 미동의)";

    // 빈 값 확인
    if (!email.value) return changeMessage("이메일을 입력해주세요.", "c-danger", email);
    if (!password.value) return changeMessage("비밀번호를 입력해주세요.", "c-danger", password);

    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password.value)) {
        return changeMessage("비밀번호는 영어+숫자+특수문자(! @ # $ % ^ & *) 조합으로 8자 이상 입력해주세요.", "c-danger", password);
    }

    signupButton.textContent = "가입완료";
    signupButton.disabled = true;

    changeMessage("회원 가입이 완료되었습니다!" + hasSubscribed, "c-success");
    signUpWriteDiary.classList.remove("d-none");
}

// 회원가입 메시지 변경
function changeMessage(message, type, moveFocus = false) {
    formMessage.textContent = message;
    formMessage.className = type;
    if (moveFocus) moveFocus.focus();
}

// 이벤트 감지
signupForm.addEventListener("submit", handleSignup);

signupForm.addEventListener("change", (e) => {
    // 구독 상태 변경
    if (e.target.id === "subscribe") {
        subscribed = e.target.checked;
    }
});

// input 입력 감지
signupForm.addEventListener("input", (e) => {
    // 이메일(50자 제한)
    if (e.target.id === "email") {
        if (e.target.value.length > 50) {
            changeMessage("50자 미만의 이메일을 사용해주세요.", "c-danger");
        } else {
            changeMessage("", "");
        }
    }
    // password
    if (e.target.id === "password") {
        // 비밀번호 유효성 검사
        if (!passwordRegex.test(password.value)) {
            return changeMessage("비밀번호는 영어+숫자+특수문자(! @ # $ % ^ & *) 조합으로 8자 이상 입력해주세요.", "c-danger");
        } else {
            return changeMessage("", "");
        }
    }
});

// 기능 안내 show
function showFeature(target, el) {
    const showTab = document.querySelector(`#feature${target}`);
    // 새로운 tab 선택 시 작동
    if (!showTab.classList.contains("active")) {
        featureTabs.forEach((item, idx) => {
            item.classList.remove("active");
            featureCards[idx].classList.remove("active");
        });
        // 해당 item만 active 추가
        showTab.classList.add("active");
        el.classList.add("active");
    }
}

// 일기 작성 popup =====================
// 팝업 열기(일기 작성 클릭 시)
function openPopup(localtion = false) {
    // 일기 작성 시 로그인 후 이동 X
    moveLoginAfter = localtion;
    popupEl.classList.remove("d-none");
    document.body.style.overflow = "hidden";
    // 로그인 확인 후 이동
    const isLogin = checkLoginCookie();
    if (isLogin) {
        // 일기 작성 팝업
        showWriteDiarys(0);
    } else {
        // 로그인 팝업
        alert("회원가입 기능은 아직 구현되지 않았습니다.\n상단 계정 정보를 이용해 로그인해주세요.")
        showLoginPopup();
    }
}

// 팝업 닫기
function closePopup() {
    showWriteDiarys(0);
    document.body.style.overflow = "";
    popupEl.classList.add("d-none");

    // 일기 작성 속 값 초기화 진행
    loginEmail.value = "";
    loginPassword.value = "";
    selectDate.value = "";
    // 감정 해제
    selectFeel.value = "";
    changeFeels("reset");
    writeTitle.value = "";
    writeDiaryTextarea.value = "";
    writeTextareaLength.textContent = "0/1000";
}

// 로그인 팝업 초기화해서 보여주기
function showLoginPopup() {
    loginEmail.value = "";
    loginPassword.value = "";

    writeDiaryPopup.classList.add("d-none");
    loginContainer.classList.remove("d-none");
}
// 테스트용 임시 이메일/비밀번호 자동 값 입력
function loginCopy(type) {
    if (type === "email") {
        loginEmail.value = testEmail;
    } else if (type === "password") {
        loginPassword.value = testPassword;
    }
    loginBtnDisabled();
}

// 로그인
function checkLogin() {
    if (loginEmail.value === testEmail && loginPassword.value === testPassword) {
        // 7일동안 유지되는 로그인 쿠키 발행
        document.cookie = "login=true; max-age=604800; path=/; SameSite=Lax;";
        if (moveLoginAfter === false) {
            // 일기 작성 팝업 show
            loginContainer.classList.add("d-none");
            writeDiaryPopup.classList.remove("d-none");
            alert("로그인 성공\n날짜 선택화면으로 넘어갑니다.");
            return showWriteDiarys(0);
        } else {
            // 마이페이지 이동
            return location.href = moveLoginAfter;
        }
    } else {
        return alert("아이디 또는 비밀번호가 올바르지 않습니다.");
    }
}

// 로그인 버튼 클릭 제한(이메일 기본 6자 초과 & 비밀번호 8자 이상)
function loginBtnDisabled() {
    loginButton.disabled = loginEmail.value.length > 6 && loginPassword.value.length >= 8 ? false : true;
}

// 로그인 이메일 입력 감지
loginEmail.addEventListener("input", () => {
    loginBtnDisabled();
})

// 로그인 비밀번호 입력 감지
loginPassword.addEventListener("input", () => {
    loginBtnDisabled();
})

// 일기 저장
function saveDiary() {
    alert("일기가 저장되었습니다.");
    closePopup();
}

// 일기 작성 화면(=다음 클릭 이동)
function showWriteDiarys(index) {
    const writeDiaryPopupItem = writeDiaryPopup.querySelectorAll(":scope > div");
    const lastItem = writeDiaryPopupItem.length - 1;

    writeDiaryPopupItem.forEach((item, idx) => {
        if (idx === lastItem) {
            // 마지막은 버튼으로 d-none 적용X
            return
        }
        index === idx ? item.classList.remove("d-none") : item.classList.add("d-none");
    });

    // 감정 선택1, 일기 내용3, 일기 확인4는 공책 전체 화면 사용
    if (index === 1 || index === 3 || index === 4) {
        writeDiaryPopup.classList.add("diary-container-full");
    } else {
        writeDiaryPopup.classList.remove("diary-container-full");
    }

    // nextBtn은 각 항목 event 감지 후 disabled 변경됨
    nextBtn.disabled = true;

    switch (index) {
        case 0:
            prevBtn.textContent = "작성 취소";
            prevBtn.onclick = closePopup;
            nextBtn.textContent = "감정 선택";
            nextBtn.onclick = () => showWriteDiarys(index + 1);
            break;
        case 1:
            prevBtn.textContent = "날짜 선택";
            nextBtn.textContent = "제목 작성";
            break;
        case 2:
            prevBtn.textContent = "감정 선택";
            nextBtn.textContent = "일기 내용";
            break;
        case 3:
            prevBtn.textContent = "제목 작성"
            nextBtn.textContent = "일기 작성";
            break;
        case 4:
            getWriteData()
            prevBtn.onclick = () => showWriteDiarys(index - 1);
            prevBtn.textContent = "일기 내용";
            nextBtn.textContent = "일기 저장";
            nextBtn.disabled = false;
            nextBtn.onclick = saveDiary;
            break;
        default:
            prevBtn.textContent = "이전";
            nextBtn.textContent = "다음";
            break;
    }

    // 시작, 마지막 제외 동일한 버튼 함수 변경,(lastItem은 btns index여서 - 1)
    if (index !== 0 && index !== (lastItem - 1)) {
        prevBtn.onclick = () => showWriteDiarys(index - 1);
        nextBtn.onclick = () => showWriteDiarys(index + 1);
    }
}

// 버튼으로 날짜 변경
function changeDate(day = 0) {
    selectDate.value = getDate(day);
    nextBtn.disabled = false;
}

// 날짜 변경 감지
selectDate.addEventListener("change", () => {
    selectDate.value ? nextBtn.disabled = false : nextBtn.disabled = true;
})

// 감정 선택 색상 & 값 변경
function changeFeels(li) {
    // 사진 이름에서 감정 가져오기
    const feeling = li === "reset" ? "" : li.querySelector("img").src.match(/_([^_.]+)\.png$/)[1];
    const feelListItems = feelList.querySelectorAll("li");
    // select-img
    // 선택한 감정에 색상 주기
    feelListItems.forEach((item) => {
        if (li !== "reset" && li == item) {
            item.querySelector("img").classList.add("select-img");
            item.querySelector("p").classList.remove("bg-transparent");
        } else {
            item.querySelector("img").classList.remove("select-img");
            item.querySelector("p").classList.add("bg-transparent");
        }
    });

    selectFeel.value = feeling;
    if (feeling !== "reset") nextBtn.disabled = false;
}

// 제목 입력
writeTitle.addEventListener("input", () => {
    if (writeTitle.value.length >= 3 && writeTitle.value.length <= 100) {
        writeTitleMent.classList.remove("c-danger");
        nextBtn.disabled = false;
    } else {
        writeTitleMent.classList.add("c-danger");
        nextBtn.disabled = true;
        writeTitle.focus;
    }
})

// 내용 입력
writeDiaryTextarea.addEventListener("input", () => {
    const textLength = writeDiaryTextarea.value.length;

    writeTextareaLength.textContent = textLength >= 1000 ? "1000/1000" : `${textLength}/1000`;
    if (textLength >= 5) {
        writeTextareaMent.querySelector("p").classList.remove("c-danger");
        nextBtn.disabled = false;
    } else {
        writeTextareaMent.querySelector("p").classList.add("c-danger");
        nextBtn.disabled = true;
    }
})

// 작성한 일기 확인화면
function getWriteData() {
    checkDate.textContent = selectDate.value;
    checkTitle.textContent = writeTitle.value;
    checkDiary.textContent = writeDiaryTextarea.value;
    checkFeel.src = `assets/images/emoji/face_${selectFeel.value}.png`;
    checkFeel.alt = `${selectFeel.value} face`;
}

// 일기 작성 popup ===================== end

// 마이페이지 이동 시 로그인 체크
function moveMyPage() {
    const login = checkLoginCookie();

    if (login) {
        location.href = "my_page.html";
    } else {
        alert("로그인 시 이용 가능합니다.");
        openPopup("my_page.html");
    }
}