Object.keys(localStorage)
   .forEach(function(key) {
      if (/^global-alert-/.test(key)) {

         // localStorage.removeItem(key);
         // console.log('Hide global alert');

         document.documentElement.setAttribute('data-global-alert', 'closed');
      }
   });

/*
const globalAlert = localStorage.getItem('global-alert-1');


if (globalAlert === null) {

  console.log('Show global alert');


} else {

  console.log('Hide global alert');

  document.documentElement.setAttribute('data-global-alert', 'none');

}
*/
