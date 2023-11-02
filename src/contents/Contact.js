const Contect = () => {
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact");
  contactSection.innerHTML = `
  <h1>Contact</h1>
  <p>123 Restaurant Street</p>
  <p>Email: info@restaurant.com</p>
  `;

  return contactSection;
};

export default Contect;
