import ActiveLink from "./ActiveLink";

const Nav = () => (
  <nav>
    <style jsx>{`
      .nav {
        list-style-type: none;
      }
      .nav-link {
        text-decoration: none;
      }
      .active {
        background-color: red;
      }
      .active:after {
        content: " (current page)";
      }
    `}</style>
    <ul className="nav">
      <li>
        <ActiveLink activeClassName="active" href="/">
          <a className="nav-link">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/about">
          <a className="nav-link">About</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/blog">
          <a className="nav-link">Blog</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/test">
          <a className="nav-link">Test</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/whatever">
          <a className="nav-link">whatever</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="active" href="/[slug]" as="/dynamic-route">
          <a className="nav-link">Dynamic Route</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
