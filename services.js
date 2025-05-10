function toggleMenu() {
  const menu = document.getElementById('sideMenu');
  if (menu.style.left === '0px') {
    menu.style.left = '-250px';
  } else {
    menu.style.left = '0px';
  }
}

function toggleSubmenu() {
  const submenu = document.getElementById('servicesSubmenu');
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}