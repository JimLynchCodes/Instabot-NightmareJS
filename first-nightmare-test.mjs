import Nightmare from 'nightmare';
const nightmare = Nightmare({ show: true });






nightmare
  .goto('https://www.instagram.com/')
  .evaluate( function() {
  let elems = document.querySelectorAll('div.click');
  elems.forEach(function(elem){
  elem.click();
  });
  return "sucsess";
  })
  .end()
  .then( (that) => {
        console.log('in then');

  })
  .catch((error) => {
    console.error('Search failed:', error);
  });
