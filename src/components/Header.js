import PropTypes from 'prop-types'
import Button from './Button';
const Header = (props) => {
    const onClick = (e) => {
        console.log(e);
    }

    let title = props.title || "test";

  return (
    <header>
        
        <h1 style={{color: 'white', backgroundColor: 'black'}}>{title}</h1>
        <Button color='green' text='Add' onClick={onClick}></Button>

    </header>
  )
}

export default Header
