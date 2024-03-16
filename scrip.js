const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function(event){
    event.preventDefault()
    if(count == 1){
        //xem tất cả các bình luận
        return false
    }
    translateY += -590
    comment.style.transform = `translateY(${translateY}px)`
    count--
})

prev.addEventListener('click', function(event){
    event.preventDefault()
    if(count == 13){
        //xem tất cả các bình luận
        return false
    }
    translateY += 590
    comment.style.transform = `translateY(${translateY}px)`
    count++
})



var cart = []; // Mảng để lưu giỏ hàng

function addToCart(button) {
  var product = button.parentNode;
  var name = product.getAttribute("data-name");
  var price = product.getAttribute("data-price");
  
  var item = { name: name, price: price };
  cart.push(item);
  
  // Chuyển đến trang giỏ hàng
  window.location.href = "gio-hang.html";
}

// Giả định biến cart lưu trữ sản phẩm trong giỏ hàng, như trong ví dụ trước
var cart = [
    { name: "Sản phẩm 1", price: "10" },
    { name: "Sản phẩm 2", price: "20" }
  ];
  
  function displayCart() {
    var cartElement = document.getElementById("cart");
    cartElement.innerHTML = ""; // Xóa nội dung hiện tại của giỏ hàng
    
    for (var i = 0; i < cart.length; i++) {
      var item = cart[i];
      
      var listItem = document.createElement("li");
      listItem.innerHTML = item.name + " - Giá: $" + item.price;
      
      cartElement.appendChild(listItem);
    }
  }
  
  function goToCheckout() {
    // Code để chuyển hướng người dùng đến trang thanh toán
    // Ví dụ: window.location.href = "thanh-toan.html";
  }
  