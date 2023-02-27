$(() => {
    console.log("정상작동 중");

    let num = $(".num");
    let pw;
    // 클릭했을 때 숫자인식
    num.on('click', 'li', function () {
        const text = $(this).text();
        console.log(text);
        pw += text;
        console.log(pw);
    });
    
    // # 누를 시 
    $(".num a").click(function (e) {
        // # 눌러도 새로고침 X
        e.preventDefault();
     
        if (pw === pw) {
            alert("비밀번호를 변경하십시오.")
        }
        else{
            alert("비밀번호가 맞지 않습니다.")
        }

    });



}); // JQB