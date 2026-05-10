// 平滑滾動到指定部分
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 處理聯絡表單提交
function handleSubmit(event) {
    event.preventDefault();
    
    // 獲取表單數據
    const form = event.target;
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    // 簡單的驗證
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('請填寫所有必填欄位！');
        return;
    }
    
    // 模擬表單提交（實際應用中應該發送到伺服器）
    console.log('表單數據:', {
        name: name,
        email: email,
        message: message
    });
    
    // 顯示成功訊息
    alert('感謝您的留言！我們會盡快回覆。');
    
    // 重置表單
    form.reset();
}

// 導航欄活動狀態
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});
