'use strict';

// --- ハンバーガーメニュー開閉 ---
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header-toggleBtn');
  const header = document.querySelector('header');

  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('js-open');
  });
});

// --- アニメーション ---
// aboutセクション：下からふわっと
// serviceセクション：左右からふわっと
// アクセントにフェードイン
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.fade-in, .fade-up, .fade-left, .fade-right ');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-show');
        observer.unobserve(entry.target); // 一度だけ発火
      }
    });
  }, { threshold: 0.2 }); // 20%見えたら発火

  targets.forEach(el => observer.observe(el));
});


// --- TOPに戻るボタン ---
const backToTopBtn = document.getElementById('back-to-top');

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'   // スムーズスクロール
  });
});

