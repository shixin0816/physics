// 年份自动更新
document.getElementById('year').textContent = new Date().getFullYear();

// 深浅色切换（记住用户选择）
var toggle = document.getElementById('themeToggle');
var icon = document.getElementById('themeIcon');
var saved = localStorage.getItem('theme');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  icon.textContent = theme === 'dark' ? '☾' : '☀';
  localStorage.setItem('theme', theme);
}

applyTheme(saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

toggle.addEventListener('click', function () {
  var current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// 移动端菜单
var navToggle = document.getElementById('navToggle');
var nav = document.getElementById('nav');

navToggle.addEventListener('click', function () {
  nav.classList.toggle('open');
});
