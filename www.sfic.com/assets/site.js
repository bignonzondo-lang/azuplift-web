document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.main-nav');
  const cartCount = document.querySelector('#cart-count');
  menuButton?.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  const searchForm = document.querySelector('#product-search');
  const searchInput = document.querySelector('#search');
  const searchResult = document.querySelector('#search-result');
  const categories = [...document.querySelectorAll('.category')];
  searchForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const term = searchInput.value.trim().toLocaleLowerCase('fr');
    let count = 0;
    categories.forEach((category) => {
      const visible = !term || category.dataset.name.toLocaleLowerCase('fr').includes(term);
      category.hidden = !visible;
      count += Number(visible);
    });
    searchResult.textContent = term ? `${count} univers produit${count === 1 ? '' : 's'} trouvé${count === 1 ? '' : 's'}.` : '';
    document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
  });

  document.querySelectorAll('.favorite').forEach((button) => button.addEventListener('click', () => {
    const active = button.classList.toggle('is-favorite');
    button.setAttribute('aria-pressed', String(active));
    button.textContent = active ? '♥' : '♡';
  }));
  document.querySelectorAll('.add-cart:not(a)').forEach((button) => button.addEventListener('click', () => {
    const nextCount = Number(cartCount?.textContent || 0) + 1;
    if (cartCount) cartCount.textContent = String(nextCount);
    button.textContent = 'Ajouté ✓';
  }));
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
});
