const names = ['vaxo', 'giorgi', 'nika', 'mariami', 'luka'];
const button = document.getElementById('button');


  button.addEventListener('click', () => {
    names.forEach((name) => {
      if (name.length < 5) {
        console.log(name);
      }
    });
  });