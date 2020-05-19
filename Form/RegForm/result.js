var urlParams;

$(document).ready(function() {
    document.getElementById("infoname").innerHTML = 'Họ Tên: ' + urlParams.name;
    document.getElementById("infoemail").innerHTML = 'Email: ' + urlParams.email;
    document.getElementById("infopassword").innerHTML = 'Mật Khẩu: ' + urlParams.password;
    document.getElementById("infophone").innerHTML = 'Số Điện Thoại: ' + urlParams.phonenumber;
    document.getElementById("infoaddress").innerHTML = 'Địa Chỉ: ' + urlParams.address;
    document.getElementById("infogender").innerHTML = 'Giới Tính: ' + urlParams.gender;
    document.getElementById("infoyear").innerHTML = 'Ngày Sinh: ' + urlParams.day + '/' + urlParams.month + '/' + urlParams.year ;

});

(window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);
})();

