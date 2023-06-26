var arrDanhSach = [];
function themSo() {
  var soNhap = Number(document.getElementById("soNhap").value);
  arrDanhSach.push(soNhap);
  document.getElementById("hienThiDanhSachSo").innerHTML = arrDanhSach;
  // console.log(arrDanhSach)
}

// 1. Tổng các số dương trong mảng
document.getElementById("btnTongSoDuong").onclick = function () {
  var tongSoDuong = 0;

  for (var i = 0; i < arrDanhSach.length; i++) {
    if (arrDanhSach[i] > 0) {
      tongSoDuong += arrDanhSach[i];
    }
  }
  document.getElementById("hienThiTongSoDuong").innerHTML = tongSoDuong;
};
//2. Đếm có bao nhiêu số dương trong mảng
document.getElementById("btnDemSoDuong").onclick = function () {
  var soDem = 0;
  for (var i = 0; i < arrDanhSach.length; i++) {
    if (arrDanhSach[i] > 0) {
      soDem++;
    }
  }
  document.getElementById("hienThiDemSoDuong").innerHTML = soDem;
};
// 3. Tìm số nhỏ nhất trong mảng
document.getElementById("btnTimSoNhoNhat").onclick = function () {
  var minNumber = arrDanhSach[0];
  for (var i = 1; i < arrDanhSach.length; i++) {
    if (minNumber > arrDanhSach[i]) {
      minNumber = arrDanhSach[i];
    }
  }
  document.getElementById("hienThiSoNhoNhat").innerHTML = minNumber;
};
//4. Tìm số dương nhỏ nhất trong mảng
document.getElementById("btnSoDuongNhoNhat").onclick = function () {
  var arrSoDuong = [];
  for (var i = 1; i < arrDanhSach.length; i++) {
    if (arrDanhSach[i] > 0) {
      arrSoDuong.push(arrDanhSach[i]);
    }
  }
  // kiem tra có số dương hay không
  if (arrSoDuong.length === 0) {
    document.getElementById("hienThiSoDuongNhoNhat").innerHTML =
      "Không có số dương";
    return;
  }

  var minSoDuong = arrSoDuong[0];
  for (var j = 1; j < arrSoDuong.length; j++) {
    if (minSoDuong > arrSoDuong[j]) {
      minSoDuong = arrSoDuong[j];
    }
  }
  document.getElementById("hienThiSoDuongNhoNhat").innerHTML = minSoDuong;
};

//5. Tìm số chẵn cuối cùng trong mảng
document.getElementById("btnSoChanCuoiCung").onclick = function () {
  var SoChan = -1;
  for (i = 0; i < arrDanhSach.length; i++) {
    if (arrDanhSach[i] % 2 === 0) {
      SoChan = arrDanhSach[i];
    }
  }
  document.getElementById("hienThiSoChanCuoiCung").innerHTML = SoChan;
};
//6. Đổi chỗ 2 giá trị trong mảng theo vị trí
document.getElementById("btnDoiCho").onclick = function () {
  var viTri_1 = Number(document.getElementById("viTri-1").value);
  var viTri_2 = Number(document.getElementById("viTri-2").value);
  var giaTriTam = 0;
  giaTriTam = arrDanhSach[viTri_1];
  arrDanhSach[viTri_1] = arrDanhSach[viTri_2];

  arrDanhSach[viTri_2] = giaTriTam;
  console.log(arrDanhSach)

  document.getElementById("hienThiDoiCho").innerHTML = arrDanhSach;
};
