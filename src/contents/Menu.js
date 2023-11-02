const Menu = () => {
  const MenuSection = document.createElement("section");
  MenuSection.classList.add("menu");
  MenuSection.innerHTML = `
      <h1>Menu</h1>
      <ul> 
          <li>Burger</li>
          <li>Pizza</li>
          <li>Biff</li>
      </ul>
  `;
  return MenuSection
};

export default Menu;
