const menu: HTMLElement | null = document.querySelector('.menu');

menu?.addEventListener('click', (e) => {
  console.log(e.currentTarget);
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
});
