
// Hiển thị số
var numbers = [];
function themSo() {
    var number = document.getElementById("number").value * 1;
    numbers.push(Number(number));
    document.getElementById("showNumber").innerHTML = numbers.join(",");
    document.getElementById("number").value = '';
}
// Tính số dương
function tongSoDuong() {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    document.getElementById("result1").innerHTML = `Tổng số nguyên dương: ${sum}`
}
// Đếm số dương
function demSoDuong() {
    var sum1 = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum1++;
        }
    }
    document.getElementById("result2").innerHTML = `Tổng có: ${sum1} số dương`;
}

//  Số nhỏ nhất
function SoNhoNhat() {
    var min = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    document.getElementById("result3").innerHTML = `Số nhỏ nhất là: ${min}`
}


// Số dương nhỏ nhất
function SoDuongNhoNhat() {
    var min = null;
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] < min && numbers[i] > 0) {
            min = numbers[i];
        }
    }
    if (min == null) {
        document.getElementById("result4").innerHTML = `Không có số dương`
    } else {
        document.getElementById("result4").innerHTML = `Số dương nhỏ nhất là: ${min}`
    }

}

// Số chẵn cuối cùng
function soChanCuoi() {
    var soChanCuoi = null;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0 && numbers[i] > 0) {
            soChanCuoi = numbers[i];
        }
    }
    if (soChanCuoi == null) {
        document.getElementById("result5").innerHTML = `- 1`
    } else {
        document.getElementById("result5").innerHTML = `Số dương cuối cùng là: ${soChanCuoi}`
    }
}


// Đổi chỗ
function doiCho() {
    var viTri1 = document.getElementById("viTri1").value * 1;
    var viTri2 = document.getElementById("viTri2").value * 1;
    if (viTri1 >= 0, viTri1 < numbers.length && viTri2 >= 0, viTri2 < numbers.length) {
        var temp = numbers[viTri1];
        numbers[viTri1] = numbers[viTri2];
        numbers[viTri2] = temp;
        document.getElementById("result6").innerHTML = `Mảng sau khi đổi là:` + numbers.join(",");
    } else {
        document.getElementById("result6").innerHTML = `Vị trí không hợp lệ:`
    }
}

// Sắp xếp tăng dần
function sapxep() {
    numbers.sort(function (a, b) {
        return a - b;
    })
    document.getElementById("result7").innerHTML = `Mảng sau khi sắp xếp: ` + numbers.join(",");
}

// Số nguyên tố đầu tiên

// kiểm tra xem cos số nguyên không
function timSoNguyenTo(num) {
    if (num <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


function soNguyenToDauTien() {
    var soNguyen = null;
    for (var i = 0; i < numbers.length; i++) {
        if (timSoNguyenTo(numbers[i])) {
            soNguyen = numbers[i];
            break;
        }

    }
    if (soNguyen != null) {
        document.getElementById("result8").innerHTML = `Số nguyên tố đầu tiên là: ${soNguyen}`
    } else {
        document.getElementById("result8").innerHTML = `- 1`
    }
}

// Đếm số nguyên
function demSoNguyen() {
    sum2 = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            sum2++;

        }
    }
    document.getElementById("result9").innerHTML = `Tổng có: ${sum2} số nguyên`
}

// So Sánh số lượng số âm và số dương

function soSanh() {
    // Tìm tổng số lượng các số chẵn
    sum3 = 0;
    for (var i = 0; i <= numbers.length; i++) {
        if (numbers[i] > 0)
            sum3++;
    }
    // Tìm tổng só lượng các số lẻ
    sum4 = 0;
    for (var j = 0; j <= numbers.length; j++) {
        if (numbers[j] < 0)
            sum4++;
    }

    if (sum3 > sum4) {
        document.getElementById("result10").innerHTML = `Số Dương > Số Âm`
    } else if (sum3 < sum4) {
        document.getElementById("result10").innerHTML = `Số Dương < Số Âm`
    } else {
        document.getElementById("result10").innerHTML = `Số Dương = Số Âm`
    }
}