import { Link } from 'react-router-dom'


function Header(props) {

  return (
    <header className="main-header">
      <nav className="navBar">
        
        {/* Link is a lot like <a> except it's more react-router specific */}

        <Link to="/home">home</Link>
        <Link to="/about">about</Link> 
        <Link to="/menu">menu</Link>
        <Link to="/gallery">gallery</Link>
      </nav>

    

    </header>
  )
}

export default Header