var announcement = document.getElementById('announcement');

if (announcement !== null) {

  var id = announcement.dataset.id;

  if (localStorage.getItem('global-alert-' + id) === null ) {

    announcement.classList.remove('d-none');

  }

  announcement.addEventListener('closed.bs.alert', () => {

    localStorage.setItem('global-alert-' + id, 'closed');

  });

}
