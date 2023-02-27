$(() => {
    console.log("로딩완");

    let num = $(".num");

    num.on('click','li',function(){
        const text = $(this).text();
        console.log(text);
    })

    


}); // JQB