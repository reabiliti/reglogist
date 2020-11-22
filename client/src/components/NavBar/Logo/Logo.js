import logoImage from './KSD Logo.webp'

import './logo.scss'

const Logo = () => {
  return (
    <div className='logo'>
      <div className='logo__wrapper'>
        <img src={logoImage} alt='Logo' />
        <span>КСД Сервис</span>
      </div>
    </div>
  )
}

export default Logo
