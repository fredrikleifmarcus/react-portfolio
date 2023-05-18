import PropTypes from 'prop-types'
import Button from './Button';

const Header = (props) => {
    let title = props.title || "Header";

  return (
    <header>
        
        <h1 style={{color: 'white', backgroundColor: 'black'}}>{title}</h1>

    </header>
  )
}

export default Header
