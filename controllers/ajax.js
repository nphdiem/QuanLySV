var svService = new SinhVienService();

var contentTable = "";

// xu ly success

var getAPISinhVien = function () {
  var objectAPI = {
    url: "http://svcy.myclass.vn/api/SinhVien/LayDanhSachSinhVien",
    method: "GET",
  };
  var promise = axios(objectAPI);
  promise
    .then(function (result) {
      console.log(result);
      renderTableSinhVien(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

function hienThiSinhVien(maSV) {
  const promise = svService.layThongTinSinhVien(maSV);
  promise
    .then(function (result) {
      document.getElementById("maSV").value = result.MaSV;
      document.getElementById("tenSV").value = result.HoTen;
      document.getElementById("email").value = result.Email;
      document.getElementById("diemToan").value = result.DiemToan;
      document.getElementById("diemLy").value = result.DiemLy;
      document.getElementById("diemHoa").value = result.DiemHoa;
    })
    .catch(function (error) {
      console.log(error);
    });
}

var renderTableSinhVien = function (mangSV) {
  for (let i = 0; i < mangSV.length; i++) {
    var sinhVien = mangSV[i];
    var sv = new SinhVien();
    sv.maSV = sinhVien.MaSV;
    sv.tenSV = sinhVien.HoTen;
    sv.email = sinhVien.Email;
    sv.diemToan = sinhVien.DiemToan;
    sv.diemLy = sinhVien.DiemLy;
    sv.diemHoa = sinhVien.DiemHoa;
    sv.diemRenLuyen = 5;
    sv.loaiSv = "binh thuong";
    sv.tenLoaiSV = "Binh thuong";
    contentTable =
      contentTable +
      `
      <tr>
      <td>${sv.maSV}</td>
      <td>${sv.tenSV}</td>
      <td>${sv.email}</td>
      <td>${sv.xepLoai()}</td>
      <td>${sv.tinhDiemTB()}</td>
      <td>${sv.diemRenLuyen}</td>
      <td><button class="btn btn-danger" onclick="hienThiSinhVien('${
        sv.maSV
      }')">Chinh sua</button></td>
      <td><button class="btn btn-danger" onclick="xoaSinhVien('${
        sv.maSV
      }')">Xoa</button></td>
      </tr>
    `;
  }
  document.getElementById("tableSV").innerHTML = contentTable;
};

var btn = (document.querySelector("#btnXacNhan").onclick = function () {
  var objectData = {
    MaSV: document.getElementById("maSV").value,
    HoTen: document.getElementById("tenSV").value,
    Email: document.getElementById("email").value,
    SoDT: "0123231333",
    CMND: "1029311211",
    DiemToan: Number(document.getElementById("diemToan").value),
    DiemLy: Number(document.getElementById("diemLy").value),
    DiemHoa: Number(document.getElementById("diemHoa").value),
  };

  var objectAxios = {
    url: "http://svcy.myclass.vn/api/SinhVien/ThemSinhVien",
    method: "POST",
    data: objectData,
  };

  axios(objectAxios)
    .then(function (result) {
      console.log(result);
      getAPISinhVien();
    })
    .catch(function (error) {
      console.log(error);
    });
});

var btnCapNhat = (document.getElementById("btnCapNhat").onclick = function () {
  // Lay thong tin sv
  // Goi API cap nhat
});

var xoaSinhVien = function (maSV) {
  var promise = svService.xoaSinhVien(maSV);
  promise
    .then(function (result) {
      getAPISinhVien();
    })
    .catch(function (error) {
      console.log(error);
    });
};

getAPISinhVien();

// function sortArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let tempi = arr[i];
//         arr[i] = arr[j];
//         arr[j] = tempi
//       }
//     }
//   }
//   return arr;
// }

// console.log(sortArr([1, 5, 2, 5]));

// function findMax2(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < max) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// function main(arr) {
//   if (arr.length <= 1) {
//     return null;
//   }

//   let sortedArr = sortArr(arr);
//   let result = findMax2(sortedArr);

//   return result;
// }

// let max2 = main([1, 1, 1]);
// console.log(max2);
