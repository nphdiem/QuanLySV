var Validation = function () {
  this.kiemTraRong = function (value, selectorError) {
    if (value.trim() === "") {
      document.querySelector(selectorError).innerHTML = "Khong duoc bo trong";
      document.querySelector(selectorError).style.display = "block";
      return false;
    }
    document.querySelector(selectorError).innerHTML = "";
    document.querySelector(selectorError).style.display = "none";
    return true;
  };
  this.kiemTraTatCaLaChuoi = function (value, selectorError) {
    var regex = /^[a-z A-Z]+$/;
    var errorElement = document.querySelector(selectorError);
    if (regex.test(value.trim())) {
      errorElement.style.display = "none";
      errorElement.innerHTML = "";
      return true;
    }
    errorElement.style.display = "block";
    errorElement.innerHTML = "Khong duoc nhap so va ky tu dac biet";
    return false;
  };
  this.kiemTraEmail = function (value, selectorError) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var errorElement = document.querySelector(selectorError);
    if (regex.test(value.trim())) {
      errorElement.style.display = "none";
      errorElement.innerHTML = "";
      return true;
    }
    errorElement.style.display = "block";
    errorElement.innerHTML = "Email khong hop le";
    return false;
  };
  this.kiemTraDiem = function (value, selectorError) {
    var regex = /^[0-9.]+$/;
    var errorElement = document.querySelector(selectorError);
    if (regex.test(value.trim())) {
      errorElement.style.display = "none";
      errorElement.innerHTML = "";
      return true;
    }
    errorElement.style.display = "block";
    errorElement.innerHTML = "Khong duoc nhap chu va ky tu dac biet";
    return false;
  };
  this.kiemTraGiaTri = function (value, selectorError, minValue, maxValue) {
    var regex = /^[0-9.]+$/;
    var errorElement = document.querySelector(selectorError);
    if (Number(value.trim()) < minValue || Number(value.trim()) > maxValue) {
      errorElement.style.display = "block";
      errorElement.innerHTML = `Gia tri tu ${minValue} - ${maxValue}`;
      return false;
    }
    errorElement.style.display = "none";
    errorElement.innerHTML = "";
    return true;
  };
  this.kiemTraDoDaiChuoi = function (
    value,
    selectorError,
    minLength,
    maxLength
  ) {
    var errorElement = document.querySelector(selectorError);
    if (value.length < minLength || value.length > maxLength) {
      errorElement.style.display = "block";
      errorElement.innerHTML = `Do dai tu ${minLength} - ${maxLength}`;
      return false;
    }
    errorElement.style.display = "none";
    errorElement.innerHTML = "";
    return true;
  };
};
