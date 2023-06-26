var arrDanhSach = [];
function themSo(){
    var soNhap = Number(document.getElementById('soNhap').value);
    arrDanhSach.push(soNhap);
    document.getElementById('hienThiDanhSachSo').innerHTML = arrDanhSach;
    // console.log(arrDanhSach)
}


// 1. Tổng các số dương trong mảng
document.getElementById('btnTongSoDuong').onclick = function(){
var tongSoDuong = 0;

    for(i=0; i<arrDanhSach.length; i++){
        if(arrDanhSach[i]>0){
            tongSoDuong += arrDanhSach[i];
        }
    }
    document.getElementById('hienThiTongSoDuong').innerHTML = tongSoDuong;
}
//2. Đếm có bao nhiêu số dương trong mảng
document.getElementById('btnDemSoDuong').onclick = function(){
    var soDem = 0;
    for(i=0; i<arrDanhSach.length; i++){
        if(arrDanhSach[i]>0){
            soDem++;
        }
    } 
    document.getElementById('hienThiDemSoDuong').innerHTML = soDem;

}
// 3. Tìm số nhỏ nhất trong mảng
document.getElementById('btnTimSoNhoNhat').onclick = function(){
    var minNumber = arrDanhSach[0];
    for(i=1; i< arrDanhSach.length; i++){
        if(minNumber>arrDanhSach[i]){
            minNumber = arrDanhSach[i];
        }
    }
    document.getElementById('hienThiSoNhoNhat').innerHTML = minNumber;
}