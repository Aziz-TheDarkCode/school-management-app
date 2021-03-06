import{Link} from "react-router-dom"
import Input from '../components/input'
import Background from "./header-bg.jpg"
import Button from '../components/buttons'
import {AiOutlineKey} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
import  {useState } from "react";
import PostData  from '../data/POST'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineHistory} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
const SignUppage = () =>
{
    let message ="Merci de remplir tous les champs ."
    const [ input , setInput ] = useState({
        name : "",
        date_of_birth : "",
        year: "",
        mail : "",
        password : "",
})
const [select,setSelect] =useState()


const handler =(event)=>
{
    setInput({...input,[event.target.name] : event.target.value})
    return input
}
    const dropdownhandler = (event)=>
    {
    setSelect({[event.target.name] : event.target.value})
        console.log(select)
        return select  
    }
const login = ()=>
{
    const formDatas ={
        ...select,
        ...input
    }
    console.log(formDatas)
     PostData(formDatas)
}
    return(
       <>
         <div className='d-flex justify-content-between section p-3' style={{backgroundImage:`linear-gradient(to top, rgba(12, 12, 12, 0.56), rgba(12, 12, 12, 0.56)),url(${Background})`}}>
             <div className='d-flex flex-column justify-content-center ml-5'>
                <p className=' text-larger mb-5'>SUP'INFO</p>
                <p className='text-larger'>INTERNATIONAL IT ACADEMY OF DAKAR</p>
             </div>
             <div className=' form col-4 p-3 mt-2'>
            <p className='text-larger text-bold mb-5 ml-2'>Inscription</p>
            <div className='d-flex justify-content-around mt-3'>
                 <div className=''>
                   <Input placeholder='Nom' icon={<AiOutlineUser/>} inputType='text' name='name' onchange={handler}/>
                   <Input placeholder='Date de Naissance' icon={<AiOutlineCalendar/>} inputType='date' name='date_of_birth' onchange={handler}/>
                  <div style={{marginTop:`5.5px`}}>
                     <div className='placeholder text-x-small d-flex align-items-center'>
                        <span>Filiere</span> 
                        <span className='ml-2'><AiOutlineBook/></span>
                    </div>
                 <select name="faculty" className='text-input w-100'   onChange={(event)=>{dropdownhandler(event)}}>
                        <option>Choisir formation</option>
                        <option value="1">Web Developement</option>
                        <option value="2">Reseau Telecommunications</option>
                        <option value="3">Cyber Security</option>
                        <option value="4">Informatique de gestion</option>
                 </select>
                  </div>
                 
                 </div>
                 <div className=''>
                   <Input placeholder="Ann??e d'inscription" icon={<AiOutlineHistory/>} inputType='text' name = "year" onchange={handler}/>
                   <Input placeholder='Adresse Mail' icon={<AiOutlineMessage/>} inputType='text' name = "mail" onchange={handler}/>
                   <Input placeholder='Mot de passe' icon={<AiOutlineKey/>} inputType='password' name = "password" onchange={handler}/>
                 </div>
            </div>
            <p className="text-small red-text mb-4 p-2">{message}</p>
            <Link to='/signin'>
            <Button text="S'inscrire" variant='primary' width='100'  onclick={login}/>
                </Link>
        </div>

        </div>
    </>
    )
}
export default SignUppage;