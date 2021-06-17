import Row from './row'
import {AiOutlineMenu} from 'react-icons/ai'
import { getAllStudents } from '../data/GET'
const Table =()=>
{
    const baseUrl ="http://localhost:8000/api"
    const getAllStudents = () =>  
    {
        const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${baseUrl}/student/read.php`, requestOptions)
        .then(response => response.json())
        .then(data =>console.log(data))
}
    
    return(
        <div className='table w-100 p-3'>
            <div className='d-flex align-items-center mb-5 text-bold text-medium'>
                <p className='mr-3'>Liste des inscrits</p>
                <AiOutlineMenu/>
            </div>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <div className="text-center"> 
            {/* <Row numb='2020' name='Claudys Bikindou' date="20/07/19" fil='Web Dev' year="L2"/> */}
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            </div>
        </div>
    )
}
export default Table 