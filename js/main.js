$(() => {
    console.log("정상작동 중");

    let num = $(".num");
    let firstPW = "0000";
    let inpw = "";
    let impw = "";
    let pw = "아무도 입력할 수 없는 내용";
    let changePW = "*253*"



    // 클릭했을 때 숫자인식
    num.on('click', 'li', function () {
        const text = $(this).text();
        // console.log(text);
        inpw += text;
        console.log(inpw);
    });

    // # 누를 시 
    $(".num a").click(function (e) {
        // # 눌러도 새로고침 X
        e.preventDefault();

        let result = $(".result")




        // 4개 이하의 비밀번호로 입력할 경우
        if (inpw.length < 4) {
            inpw = "";
            result.html("최소 4개 이상의 숫자를 입력하세요");
        }
        // 4개 이상의 비밀번호를 입력할 경우
        else {

            // 비밀번호가 초기번호와 맞을 경우
            if (inpw === firstPW) {
                result.html("잠금해제");
                inpw = "";
                setTimeout(() => {
                    firstPW = "*165*";
                    impw = firstPW;
                    firstPW = "";
                    result.html("*165*를 눌러서 비밀번호를 변경하세요");
                }, 1000);
            } 
            // 비밀번호가 맞은 상태에서 *165*를 눌렀을 때 기존 정보 초기화
            else if (inpw === impw) {
                result.html("변경할 비밀번호를 입력하세요")
                inpw = "";
                pw = "";
                impw = "";
            } 
            // 기존 정보 초기화 후 새로운 비밀번호를 입력했을 때 비밀번호 기억
            else if (pw === "") {
                pw = inpw;
                result.html("비밀번호가 저장됐습니다.");
                inpw = "";
            } 
            // (변경한)비밀번호가 일치할 경우 잠금해제 하면서 비밀번호 변경 가능 코드 재생성
            else if (inpw === pw) {
                result.html("잠금해제");
                inpw = "";
                impw = "*165*";
            }

            // 비밀번호 일치안할 경우 정보 초기화
            else {
                // 입력 초기화
                inpw = "";
                impw = "";
                result.html("비밀번호가 일치하지 않습니다.");
            }
        } // else 


    }); // click



}); // JQB