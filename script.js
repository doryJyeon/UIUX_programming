const signupForm = document.querySelector("#signup");
const formMessage = document.querySelector("#formMessage");
// 비밀번호 유효성 정규식
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

// 회원 가입
function handleSignup(event) {
    event.preventDefault();
    const email = signupForm.querySelector("#email");
    const password = signupForm.querySelector("#password");
    const signupButton = signupForm.querySelector("#signupButton");

    // 빈 값 확인
    if (!email.value) return changeMessage("이메일을 입력해주세요.", "c-danger", email);
    if (!password.value) return changeMessage("비밀번호를 입력해주세요.", "c-danger", password);

    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password.value)) {
        return changeMessage("비밀번호는 영어+숫자+특수문자(! @ # $ % ^ & *) 조합으로 8자 이상 입력해주세요.", "c-danger", password);
    }

    signupButton.textContent = "가입완료";
    signupButton.disabled = true;
    changeMessage("회원 가입이 완료되었습니다!", "c-success");
}

// 회원가입 메시지 변경
function changeMessage(message, type, moveFocus = false) {
    formMessage.textContent = message;
    formMessage.className = type;
    if (moveFocus) moveFocus.focus();
}

// 이벤트 감지
signupForm.addEventListener("submit", handleSignup);