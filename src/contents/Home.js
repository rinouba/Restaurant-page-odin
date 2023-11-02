const Home = () => {
  const HomeSection = document.createElement("section");
  HomeSection.classList.add("home");
  HomeSection.innerHTML = `
  <h1>Welcome to Your Website</h1>
  <p>This is the main content of your Home page.</p>
  `;
  return HomeSection
};

export default Home;
