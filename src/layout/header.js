import logo from './logo.jpg'
import NavLinks from '../components/NavLinks'
import { Link } from 'react-router-dom';
const Header = ()=>
{
const user = JSON.parse(localStorage.getItem("User"))
    if (localStorage.length>=1) 
    {
        return(
            <div className='d-flex header justify-content-between align-items-center p-3 w-100'>
                <img src={logo} width='150px'/>
                <div className='d-flex header--menu'>
                    <Link to='/homepage' className='router-link'><NavLinks link='Accueil'/></Link>
                    <Link to='/courses' className='router-link'><NavLinks link='Les formations'/></Link>
                </div> 
            </div>)
    }else{
        return(
            <div className='d-flex header justify-content-between align-items-center p-3 w-100'>
                <img src={logo} width='150px'/>
                <div className='d-flex header--menu'>
                    <Link to='/homepage' className='router-link'><NavLinks link='Accueil'/></Link>
                    <Link to='/signup' className='router-link'><NavLinks link='Inscription'/></Link>
                    <Link to='/signin' className='router-link'><NavLinks link='Connexion'/></Link>
                    <Link to='/courses' className='router-link'><NavLinks link='Les formations'/></Link>
                </div> 
            </div>
    
        )
    }
    
}

export default Header;