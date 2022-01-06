var announcement = document.getElementById('announcement');

if (announcement !== null) {

  var id = announcement.dataset.id;

  if (localStorage.getItem(id) === null ) {

    announcement.classList.remove('d-none');

  }

  announcement.addEventListener('closed.bs.alert', () => {

    localStorage.setItem(id, 'closed');

  });

}
