'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header-toggleBtn');
  const header = document.querySelector('header');

  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('js-open');
  });
});
