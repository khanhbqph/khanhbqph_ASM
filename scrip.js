function submitForm() {
    var confirmed = confirm("Xác nhận gửi dữ liệu đến server?");

    if (confirmed) {
        document.getElementById("confirmationMessage").innerText = "Thông báo xác nhận đã được nhận, dữ liệu sẽ được gửi đến server";
        // Thực hiện các thao tác khác ở đây, ví dụ: gửi dữ liệu đến server
    } else {
        document.getElementById("confirmationMessage").innerText = "";
        // Xóa thông báo xác nhận
    }
}