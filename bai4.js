function playgame() {
    let khoang = prompt("Nhập khoảng bạn định chọn theo dạng(a,b): ")
    if (khoang == null) {
        alert("Mời bạn nhập dữ liệu")
    }
    else {
        if (khoang == "") {
            alert("Mời bạn nhập dữ liệu")
        }
        else {
            console.log(khoang.split(","));
            let khoang1 = khoang.split(",");
            console.log(Number(khoang1[0]))
            console.log(Number(khoang1[1]))
            let rd = getRndInteger(Number(khoang1[0]), Number(khoang1[1]))
            console.log(rd)
            let check = 0;
            while (check !== 3) {
                let doan = prompt("Nhập số bạn đoán : ")
                if (rd == doan) {
                    alert("Chúc mừng")
                    break;
                }
                else {
                    if (doan < rd) {
                        alert("Bé hơn")
                    }
                    else {
                        alert("Lớn hơn")
                    }
                }
                check++;
                if (check == 3) {
                    alert("Thua cuộc")
                }
            }
        }
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + (min + 1);
}