import logo from './logo.jpg'
import NavLinks from '../components/NavLinks'
import { Link } from 'react-router-dom';
import { logout } from '../data/POST';
const Header = ()=>
{
    const logout = ()=>
{
    localStorage.clear()
    window.location.replace("/signin")
    window.location.reload();
    return true
}
    if (localStorage.length>=1) 
    {
        return(
            <div className='d-flex header justify-content-between align-items-center p-3 w-100'>
                <img src={logo} width='150px'/>
                <div className='d-flex header--menu'>
                    <Link to='/homepage' className='router-link'><NavLinks link='Accueil'/></Link>
                    <Link to='/courses' className='router-link'><NavLinks link='Les formations'/></Link>
                   <a onclick={()=>{logout()}}><Link to='/signin' className='router-link'><NavLinks link='Deconnexion'/></Link> </a> 
                    <a href="#footer" className='router-link'><NavLinks link='Contact'/></a>
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