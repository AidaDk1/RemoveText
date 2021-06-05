let container=document.getElementById('container');
container.addEventListener('click',function(e) {
    if (e.target.className != 'removeText') {
        return;
    }

      let text = e.target.closest('.text');
      text.remove();
});