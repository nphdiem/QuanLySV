var SinhVienService = function () {
  this.xoaSinhVien = function (maSV) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/XoaSinhVien/" + maSV,
      method: "DELETE",
    });
  };
  this.layThongTinSinhVien = function (maSv) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/LayThongTinSinhVien/" + maSV,
      method: "GET",
    });
  };
  this.capNhatSinhVien = function (sinhVien) {
    return axios({
      url: "http://svcy.myclass.vn/api/SinhVien/CapNhatThongTinSinhVien/",
      method: "PUT",
      data: sinhVien,
    });
  };
  this.themSinhVien = function (sinhVien) {
    // Them sinh vien o day
  };

  this.hienThiThongTin= function(sinhvien){

  }

  this.sapXepSinhVien = functin(sinhVien) {
    console.log('sap xep sinh vien');
  }
};
