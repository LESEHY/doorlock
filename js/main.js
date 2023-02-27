$(() => {
    console.log("정상작동 중");

    let num = $(".num");
    let firstPW = "0000";
    let inpw = "";
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

        if (inpw === firstPW) {
            result.html("비밀번호를 변경하세요.")
            // 입력 초기화
            inpw = "";
            num.find("li").removeClass("active");

        } else {
            result.html("비밀번호가 일치하지 않습니다.")
            // 입력 초기화
            inpw = "";
            num.find("li").removeClass("active");
        }

        /* 위 코드에서 num.find("li").removeClass("active")는 입력 필드에서 선택한 숫자들의 활성화
        클래스를 제거하여 초기화합니다. 또한 inpw = "";를 사용하여 비밀번호 입력 변수 inpw를
        초기화합니다. 따라서, 비밀번호가 일치하지 않았을 때 이미 클릭한 숫자들이 초기화됩니다. */
    });



}); // JQB