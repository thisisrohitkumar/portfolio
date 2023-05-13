let timeout;

function showPreloader() {
  timeout = setTimeout(hidePreloader, 4000);
}

function hidePreloader() {
  document.getElementById('preloader-container').style.display = 'none';
}

function open_mobile_nav(){
  document.getElementById('open-mobile-nav').style.display = 'none';
  document.getElementById('close-mobile-nav').style.display = 'block';
}

function close_mobile_nav(){
  document.getElementById('open-mobile-nav').style.display = 'block';
  document.getElementById('close-mobile-nav').style.display = 'none';
}