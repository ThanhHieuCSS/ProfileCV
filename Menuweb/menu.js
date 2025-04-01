document.addEventListener("DOMContentLoaded", function () {
  fetch("Menuweb/menu.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("menu-container").innerHTML = data;
      })
      .catch(error => console.error("Lỗi tải menu:", error));
});


//hiệu ứng lặp chữ lại nhiều lần trong thuật toán JavaScript
// Đoạn mã này sẽ tạo hiệu ứng gõ chữ và xóa chữ liên tục
/*const text = "Frontend";
let index = 0;
let isDeleting = false; // Kiểm tra trạng thái xóa chữ

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (!isDeleting) {
        // Gõ chữ
        typingElement.innerHTML = text.substring(0, index);
        index++;

        if (index > text.length) {
            isDeleting = true; // Chuyển sang trạng thái xóa
            setTimeout(typeEffect, 1500); // Đợi 1.5s trước khi xóa
            return;
        }
    } else {
        // Xóa chữ
        typingElement.innerHTML = text.substring(0, index);
        index--;

        if (index === 0) {
            isDeleting = false; // Chuyển lại trạng thái gõ chữ
        }
    }

    // Điều chỉnh tốc độ gõ và xóa chữ
    let speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

// Bắt đầu hiệu ứng
typeEffect();*/

// Mảng chứa các từ sẽ hiển thị luân phiên
const texts = ["Frontend", "Developer"];

let textIndex = 0; // Vị trí của từ hiện tại trong mảng texts
let charIndex = 0; // Vị trí ký tự hiện tại trong từ
let isDeleting = false; // Biến kiểm tra trạng thái xóa chữ (true: đang xóa, false: đang gõ)

// Hàm hiệu ứng gõ chữ
function typeEffect() {
    const typingElement = document.getElementById("typing"); // Lấy phần tử có ID "typing"
    const currentText = texts[textIndex]; // Lấy từ hiện tại trong mảng texts

    if (isDeleting) {
        charIndex--; // Nếu đang xóa, giảm số ký tự hiển thị
    } else {
        charIndex++; // Nếu đang gõ, tăng số ký tự hiển thị
    }

    // Hiển thị một phần của chữ theo charIndex
    typingElement.innerHTML = currentText.substring(0, charIndex);

    // Kiểm tra nếu đã gõ xong toàn bộ chữ
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true; // Bắt đầu chuyển sang trạng thái xóa chữ
        setTimeout(typeEffect, 1500); // Giữ chữ trong 1.5 giây trước khi xóa
        return; // Dừng hàm tạm thời
    }
    
    // Kiểm tra nếu đã xóa hết chữ
    else if (isDeleting && charIndex === 0) {
        isDeleting = false; // Quay lại trạng thái gõ chữ
        textIndex = (textIndex + 1) % texts.length; // Chuyển sang từ tiếp theo
    }

    // Điều chỉnh tốc độ gõ/xóa chữ
    let speed = isDeleting ? 50 : 100; // Khi xóa nhanh hơn khi gõ
    setTimeout(typeEffect, speed); // Gọi lại hàm sau khoảng thời gian tương ứng
}

// Gọi hàm để bắt đầu hiệu ứng
typeEffect();



document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observer.observe(item));
});
