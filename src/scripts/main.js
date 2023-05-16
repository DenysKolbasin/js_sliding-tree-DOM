'use strict';

const treeItems = document.querySelectorAll('.tree li');

treeItems.forEach(item => {
  const text = item.firstChild.textContent;
  const span = document.createElement('span');
  span.textContent = text;
  item.firstChild.replaceWith(span);

  span.addEventListener('click', event => {
    const subTree = item.querySelector('ul');
    if (subTree && event.target === span) {
      subTree.style.display = subTree.style.display === 'none' ? 'block' : 'none';
    }
  });
});








