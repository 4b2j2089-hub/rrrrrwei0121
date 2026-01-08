// 作品集篩選功能

document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const artworkCards = document.querySelectorAll('.artwork-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');

            // 更新按鈕狀態
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // 篩選作品
            artworkCards.forEach(card => {
                if (filterValue === 'all') {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.6s ease-out';
                } else {
                    const category = card.getAttribute('data-category');
                    if (category === filterValue) {
                        card.style.display = 'block';
                        card.style.animation = 'fadeIn 0.6s ease-out';
                    } else {
                        card.style.display = 'none';
                    }
                }
            });
        });
    });
});

// 平滑捲動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 表單提交
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感謝您的訊息！我們會盡快回覆您。');
        this.reset();
    });
}
