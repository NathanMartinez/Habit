import '../styles/Nav.css'

function Nav() {
  return (
    <nav className="Nav">
      <ul id="tabs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Learn More</a></li>
        <li><a href="#">About Habit</a></li>
      </ul>
      <div>
        <ul id="accountButtons">
          {/* We will need to update the links to Links */}
          <li><a href="#">Sign Up</a></li>
          <li><a href="#">Log In</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;