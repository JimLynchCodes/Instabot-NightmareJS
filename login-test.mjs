import Nightmare from 'nightmare';

const nightmare = Nightmare({ show: true });
let className = 'ok';

nightmare.goto('https://www.instagram.com/')
.viewport(400, 600)
.wait(3000)
  .evaluate(() => {
    return document.title;
  })
  .evaluate(()=>{
      var elements = Array.from(document.querySelectorAll('button'))
      var el = elements[0];
      elements.forEach( (element) => {
      console.log(element.innerHTML);
     });
  })
  .evaluate(()=>{
      var elements = Array.from(document.querySelectorAll('a'))
      var el = elements[0];
      elements.forEach( (element) => {
        if (element.innerHTML.toString().match(/Log/)) {
          console.log(' YA ' + element.innerHTML);
          element.click();
        }
      })
   })
   .wait(4000)
   .evaluate(()=>{
      var elements = Array.from(document.querySelectorAll('input'))
      var el = elements[0];
      console.log('el here now! ' + elements.length);
      elements.forEach( (element) => {
          console.log(' oy' + element.innerHTML);
          console.log(' oy' + element.name);
          if (element.name.toString().match(/username/)) {
             console.log('username match!');
             element.focus();
             element.value = 'eat_raw_plants';
             element.dispatchEvent(new KeyboardEvent('keypress',{'key':'b'}));
             element.dispatchEvent(new KeyboardEvent('keypress',{'key':'c'}));
          }
       })
    })
    .wait(1000)
    .evaluate(()=>{
      var elements = Array.from(document.querySelectorAll('input'))
      var el = elements[0];
      elements.forEach( (element) => {
         if (element.name.toString().match(/password/)) {
              console.log('matched!');
              element.focus();
              className = element.className;
              console.log('classname is: ' + className);
              console.log('id: ' + element.id);
              className = '#' + element.id;
              element.value = '****';
              element.dispatchEvent(new KeyboardEvent('keypress',{'key':'a'}));
              return element.className;
          }
       })
    })
    .wait(3000)
    .evaluate(()=>{
        console.log('classname is: ' + className);
    })
    .evaluate( (passedClassName) => {
        console.log('here className: ' + passedClassName);
        console.log('here className: ' + this.className);
    })
    .wait(1000)
    .type('fuck', 'github nightmare')
  .wait(600)
  .end()
  .then((title) => {
    console.log(title);
  })
