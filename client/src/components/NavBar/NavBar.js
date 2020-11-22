import Logo from './Logo'

const NavBar = () => {
  return (
    <nav>
      <div className='nav-wrapper grey lighten-5'>
        <a href='/' className='brand-logo grey-text text-darken-3'>
          <Logo />
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='/#' className='grey-text text-darken-3'>
              Sass
            </a>
          </li>
          <li>
            <a href='/#' className='grey-text text-darken-3'>
              Components
            </a>
          </li>
          <li>
            <a href='/#' className='grey-text text-darken-3'>
              JavaScript
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
