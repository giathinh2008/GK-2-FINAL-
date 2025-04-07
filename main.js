console.log("dddfd");
document.addEventListener("keydown", function (event) {
    var key = event.key; //lấy kí tự vừa lập
    console.log(key);
    if(key=="Backspace"){
        let pTag = document.getElementById("so"); //lấy thẻ có id là số
        var val = pTag.value; // lấy giấy trị vừa được nhập
        var rs =val.toString().slice(0,-1); // trừ 1 ký tự
        pTag.value = rs  // lấy giá trị vừa được trừ 1 ký tự
        console.log(rs);
    }
})
