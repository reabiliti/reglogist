import PropTypes from 'prop-types'

import './section.scss'

const Section = ({ children }) => {
  return <div className='section'>{children}</div>
}

Section.propTypes = {
  children: PropTypes.elementType.isRequired,
}

export default Section
