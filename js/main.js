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

document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById("back-to-top");
  const showAt = 300; // 何pxスクロールしたら出すか
  window.addEventListener("scroll", () => {
    if (window.scrollY > showAt) {
      backToTopBtn.classList.add("is-show");
    } else {
      backToTopBtn.classList.remove("is-show");
    }
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


// --- PRACTICEのスライド化 ---
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("practiceSlider");
  if (!slider) return;
  const track = slider.querySelector(".slider__track");
  const slides = slider.querySelectorAll(".slider__slide");
  const prevBtn = slider.querySelector(".slider__btn--prev");
  const nextBtn = slider.querySelector(".slider__btn--next");
  const dotsWrap = slider.querySelector(".slider__dots");
  let index = 0;
  // ドット生成
  const dots = Array.from(slides).map((_, i) => {
    const b = document.createElement("button");
    b.className = "slider__dot";
    b.type = "button";
    b.setAttribute("aria-label", `${i + 1}枚目へ`);
    b.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(b);
    return b;
  });
  function update() {
    track.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("is-active", i === index));
  }
  function goTo(i) {
    index = (i + slides.length) % slides.length;
    update();
  }
  prevBtn.addEventListener("click", () => goTo(index - 1));
  nextBtn.addEventListener("click", () => goTo(index + 1));
  update();
});
