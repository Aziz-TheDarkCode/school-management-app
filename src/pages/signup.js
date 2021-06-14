import  BackgrounedSection from '../components/backgrounedSection'
import Form from '../components/form'
import Input from '../components/input'
import Button from '../components/buttons'
import {AiOutlineKey} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
import  {useEffect ,useState } from "react";
import PostData  from '../data/POST'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineHistory} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
const SignUppage = () =>
{
    const [ input , setInput ] = useState({
        name : "",
        date_of_birth : "",
         faculty: "1",
        year: "",
        mail : "",
        password : "",
})


const handler =(event)=>
{
    setInput({...input,[event.target.name] : event.target.value})
    return input
}
const login = ()=>
{
     console.log(input)
     PostData(input)
}
    return(
       <>
         <div className='d-flex justify-content-between section p-3'>
             <div className=' text-primary d-flex flex-column justify-content-center ml-5'>
                <p className='text-primary text-larger mb-5'>SUP'INFO</p>
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
                 <select name="faculty" className='text-input w-100'  onChange={()=>{handler()}}>
                        <option value="Web">Web Developement</option>
                        <option value="Cyber">Cyber Security</option>
                        <option value="Reseau">Reseau Telecommunications</option>
                        <option value="Info-gestion">Informatique de gestion</option>
                 </select>
                  </div>
                 
                 </div>
                 <div className=''>
                   <Input placeholder="Année d'inscription" icon={<AiOutlineHistory/>} inputType='text' name = "year" onchange={handler}/>
                   <Input placeholder='Adresse Mail' icon={<AiOutlineMessage/>} inputType='text' name = "mail" onchange={handler}/>
                   <Input placeholder='Mot de passe' icon={<AiOutlineKey/>} inputType='password' name = "password" onchange={handler}/>
                   {/* <Input placeholder='Confirmer Mot de passe' icon={<AiOutlineKey/>} inputType='password' name = "passwordConfirm" onchange={handler}/> */}
                 </div>
            </div>
            <Button text="S'inscrire" variant='primary' width='100'  onclick={login}/>
        </div>

        </div>
    </>
    )
}
export default SignUppage;