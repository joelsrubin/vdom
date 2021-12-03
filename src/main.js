import createElement from './createElement';
import render from './vdom/render';
import mount from './vdom/mount';

const vApp = createElement('div', {
  attrs: {
    id: 'app',
  },
  children: [
    'Hello World',
    createElement('img', {
      attrs: {
        src: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif'
      }
    })
  ]
});

const $app = render(vApp);
console.log($app);
mount($app, document.getElementById('app'));