var SinhVien = function (
  maSV,
  tenSV,
  email,
  loaiSV,
  tenLoaiSV,
  diemToan,
  diemLy,
  diemHoa,
  diemRL
) {
  this.maSV = maSV;
  this.tenSV = tenSV;
  this.email = email;
  this.loaiSv = loaiSV;
  this.tenLoaiSV = tenLoaiSV;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.diemRenLuyen = diemRL;
  this.tinhDiemTB = function () {
    return (
      (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa)) /
      3
    ).toFixed(2);
  };
  this.xepLoai = function () {
    var diemTrungBinh = this.tinhDiemTB();
    var diemRenLuyen = Number(this.diemRenLuyen);
    if (!diemRenLuyen || !diemTrungBinh) {
      return "Yếu";
    }
    if (diemRenLuyen < 5) {
      return "Yếu";
    } else if (diemRenLuyen >= 5 && diemRenLuyen <= 10) {
      if (diemTrungBinh < 5) {
        return "Yếu";
      } else if (diemTrungBinh >= 5 && diemTrungBinh < 6.5) {
        return "Trung binh kha";
      } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
        return "Kha";
      } else if (diemTrungBinh >= 8 && diemTrungBinh < 9) {
        return "Gioi";
      } else if (diemTrungBinh <= 10) {
        return "Xuat sac";
      } else {
        return "Diem trung binh khong hop le";
      }
    } else {
      return "Diem ren luyen khong hop le";
    }
  };
};
