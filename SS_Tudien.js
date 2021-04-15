
let x=prompt("Nhập từ cần tìm kiếm");
let El=["soccer","basketball","volleyball"];
let Vn=["bóng đá","bóng rổ","bóng chuyền"];
let Not=true;
for (let i=0;i<El.length;i++) {
    if (x == El[i]) {
        Not = false;
        document.write(Vn[i])
    }
}
if (Not==true){
    document.write("Từ này không có trong từu điển");
}






