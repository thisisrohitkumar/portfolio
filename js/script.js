let timeout;

function showPreloader() {
  timeout = setTimeout(hidePreloader, 3000);
}

function hidePreloader() {
  document.getElementById('preloader-container').style.display = 'none';
}