// mang sinh vien chua thong tin tat ca sinh vien luu tu form
var mangSinhVien = [];
var validate = new Validation();
//------------------Giao tiep voi API-------------------------------

var btn = document.querySelector("#btnXacNhan");
btn.onclick = function () {
  var maSV = document.getElementById("maSV").value;
  var tenSV = document.getElementById("tenSV").value;
  var email = document.getElementById("email").value;
  var diemToan = document.getElementById("diemToan").value;
  var diemLy = document.getElementById("diemLy").value;
  var diemHoa = document.getElementById("diemHoa").value;
  var diemRenLuyen = document.getElementById("diemRL").value;

  var selectedLoaiSV = document.getElementById("loaiSV");
  var loaiSV = selectedLoaiSV.value;
  var tenLoaiSV =
    selectedLoaiSV.options[selectedLoaiSV.selectedIndex].innerHTML;

  var sinhVien = new SinhVien(
    maSV,
    tenSV,
    email,
    loaiSV,
    tenLoaiSV,
    diemToan,
    diemLy,
    diemHoa,
    diemRenLuyen
  );
  // Kiem tr du lieu hop le
  var valid =
    validate.kiemTraRong(sinhVien.maSV, "#error_maSinhVien") &
    validate.kiemTraRong(sinhVien.tenSV, "#error_tenSinhVien") &
    validate.kiemTraRong(sinhVien.email, "#error_emailSinhVien") &
    validate.kiemTraRong(sinhVien.diemToan, "#error_diemToan") &
    validate.kiemTraRong(sinhVien.diemLy, "#error_diemLy") &
    validate.kiemTraRong(sinhVien.diemHoa, "#error_diemHoa") &
    validate.kiemTraRong(sinhVien.diemRenLuyen, "#error_diemRenLuyen");

  valid &= validate.kiemTraTatCaLaChuoi(
    sinhVien.tenSV,
    "#error_all_letter_tenSinhVien"
  );

  // kiem tra email
  valid &= validate.kiemTraEmail(sinhVien.email, "#error_email_invalid");

  //kiem tra diem toan ly hoa ren luyen
  valid &=
    validate.kiemTraDiem(sinhVien.diemToan, "#error_all_number_diemToan") &
    validate.kiemTraDiem(sinhVien.diemLy, "#error_all_number_diemLy") &
    validate.kiemTraDiem(sinhVien.diemHoa, "#error_all_number_diemHoa") &
    validate.kiemTraDiem(
      sinhVien.diemRenLuyen,
      "#error_all_number_diemRenLuyen"
    );

  // kiem tra min max diem
  valid &=
    validate.kiemTraGiaTri(
      sinhVien.diemToan,
      "#error_min_max_diemToan",
      0,
      10
    ) &
    validate.kiemTraGiaTri(sinhVien.diemLy, "#error_min_max_diemLy", 0, 10) &
    validate.kiemTraGiaTri(sinhVien.diemHoa, "#error_min_max_diemHoa", 0, 10) &
    validate.kiemTraGiaTri(
      sinhVien.diemRenLuyen,
      "#error_min_max_diemRenLuyen",
      0,
      10
    );

  // Kiem tra do dai
  valid &= validate.kiemTraDoDaiChuoi(
    sinhVien.maSV,
    "#error_min_max_length_maSV",
    5,
    10
  );

  if (!valid) {
    return;
  }

  mangSinhVien.push(sinhVien);

  renderTableSinhVien(mangSinhVien);
  luuLocalStorage(mangSinhVien);

  // var trSinhVien = document.createElement("tr");
  // var tdMaSinhVien = document.createElement("td");
  // tdMaSinhVien.innerHTML = sinhVien.maSV;

  // var tdTenSinhVien = document.createElement("td");
  // tdTenSinhVien.innerHTML = sinhVien.tenSV;

  // var tdEmailSinhVien = document.createElement("td");
  // tdEmailSinhVien.innerHTML = sinhVien.email;

  // var tdXepLoaiSV = document.createElement("td");
  // tdXepLoaiSV.innerHTML = sinhVien.xepLoai();

  // var tdDiemTB = document.createElement("td");
  // tdDiemTB.innerHTML = sinhVien.tinhDiemTB();

  // var tdDiemRL = document.createElement("td");
  // tdDiemRL.innerHTML = sinhVien.diemRenLuyen;

  // var tdAction = document.createElement("td");
  // var btnXoa = document.createElement("button");
  // btnXoa.innerHTML = "Xoa";
  // btnXoa.className = "btn btn-danger";
  // btnXoa.id = "btnXoa";
  // btnXoa.onclick = function () {
  //   btnXoa.parentElement.parentElement.remove();
  // };
  // tdAction.appendChild(btnXoa);

  // trSinhVien.appendChild(tdMaSinhVien);
  // trSinhVien.appendChild(tdTenSinhVien);
  // trSinhVien.appendChild(tdEmailSinhVien);
  // trSinhVien.appendChild(tdXepLoaiSV);
  // trSinhVien.appendChild(tdDiemTB);
  // trSinhVien.appendChild(tdDiemRL);
  // trSinhVien.appendChild(tdAction);

  // document.getElementById("tableSV").appendChild(trSinhVien);
};

var renderTableSinhVien = function (mangSV) {
  // Tu du lieu mang
  var chuoitr = "";
  for (let i = 0; i < mangSV.length; i++) {
    let sinhVien = mangSV[i];
    var sv = new SinhVien();
    sv.maSV = sinhVien.maSV;
    sv.tenSV = sinhVien.tenSV;
    sv.email = sinhVien.email;
    sv.diemToan = sinhVien.diemToan;
    sv.diemLy = sinhVien.diemLy;
    sv.diemHoa = sinhVien.diemHoa;
    sv.diemRenLuyen = sinhVien.diemRenLuyen;
    var chuoitr =
      chuoitr +
      `
      <tr>
      <td>${sv.maSV}</td>
      <td>${sv.tenSV}</td>
      <td>${sv.email}</td>
      <td>${sv.xepLoai()}</td>
      <td>${sv.tinhDiemTB()}</td>
      <td>${sv.diemRenLuyen}</td>
      <td><button class="btn btn-danger" onclick="xoaSinhVien('${
        sv.maSV
      }')">Xoa</button></td>
      </tr>
    `;
  }
  document.getElementById("tableSV").innerHTML = chuoitr;
};

var xoaSinhVien = function (maSV) {
  for (let i = mangSinhVien.length - 1; i >= 0; i--) {
    var sinhVien = mangSinhVien[i];
    if (sinhVien.maSV === maSV) {
      mangSinhVien.splice(i, 1);
    }
  }
  renderTableSinhVien(mangSinhVien);
  luuLocalStorage(mangSinhVien);
};

var luuLocalStorage = function (mangSinhVien) {
  var sMangSinhVien = JSON.stringify(mangSinhVien);
  localStorage.setItem("mangSinhVien", sMangSinhVien);
};

var layDuLieuLocalStorage = function () {
  if (localStorage.getItem("mangSinhVien")) {
    var sMangSinhVien = localStorage.getItem("mangSinhVien");
    mangSinhVien = JSON.parse(sMangSinhVien);
    renderTableSinhVien(mangSinhVien);
  }
};

var f_devB= function(){
  console.log('devB');
}
layDuLieuLocalStorage();

console.log(axios);
console.log("TEST BRANCH");
