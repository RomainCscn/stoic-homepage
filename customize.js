function setDarkClass(shouldAdd, elements) {
  elements.forEach(element => {
    shouldAdd ? element.classList.add('dark') : element.classList.remove('dark');
  });
}