import Row from './row'
import {AiOutlineMenu,AiFillCloseCircle,AiFillCheckCircle}  from 'react-icons/ai'


import { getAllStudents } from '../data/GET'

const Table =()=>
{
    const allStudents= JSON.parse(localStorage.getItem("AllStudents"))
    return(
        <div className='table w-100 p-3'>
            <div className='d-flex align-items-center mb-5 text-bold text-medium'>
                <p className='mr-3'>Liste des inscrits</p>
                <AiOutlineMenu/>
            </div>
            <Row numb='Numero' name='Nom Complet' date="Date D'inscription" fil='Filiere' year="Année d'inscription"/>
            <div className="text-center"> 
           { allStudents.map(student => 
                <div className="d-flex align-items-center justify-content-between">
                    <Row numb={student.id} name={student.name} date={student.date_of_birth} fil={student.faculty} year={student.year}/>
                    <div className='d-flex ml-5 mt-3'>
                <div className="red-text mr-3"><AiFillCloseCircle/></div>
                <div><AiFillCheckCircle/></div>
                </div>
                </div>
                
            )
            }
            </div>
        </div>
    )
}
export default Table 