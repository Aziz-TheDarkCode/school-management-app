import  BackgrounedSection from '../components/backgrounedSection'
import Form from '../components/form'
import Input from '../components/input'
import Button from '../components/buttons'
import {getAllStudents, getUser}  from '../data/GET'
import {AiOutlineKey} from 'react-icons/ai'
import  {useEffect ,useState } from "react";
import {AiOutlineMessage} from 'react-icons/ai'
import { Redirect } from 'react-router-dom'
const SignUppage = () =>
{
        const [ input , setInput ] = useState({
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
                        if (formDatas.name==""   ||   formDatas.password=="") 
                        {
                            console.log("Pourquoi t'es con ?")
                        }else
                        {
                            if (formDatas.role=="1") 
                            {
                                getUser(input,"admins")
                                const user = JSON.parse(localStorage.getItem("User"))
                                getAllStudents() 
                                if(localStorage.length>=1)
                                {
                                    window.location.replace("/dashboard")
                                }
                             
                            }else
                            {
                                getUser(input,"student")
                                const user = JSON.parse(localStorage.getItem("User"))
                                if(localStorage.length>=1)
                                {
                                    window.location.replace("/fiche")
                                }
                            }
                        }
                        
                      
            }
    return(
       <>
         <div className='d-flex justify-content-between section p-3'>
             <div className=' text-primary d-flex flex-column justify-content-center ml-5'>
                <p className='text-primary text-larger mb-5'>SUP'INFO</p>
                <p className='text-larger'>INTERNATIONAL IT ACADEMY OF DAKAR</p>
             </div>
             <div className=' form col-4 p-3 mt-2'>
            <p className='text-larger text-bold mb-5 ml-2'>Connexion</p>
            <div className='d-flex justify-content-around mt-3'>
                 <div className="mt-5 w-100 p-3">
                   <Input placeholder='Adresse mail' icon={<AiOutlineMessage/>} inputType='text'    name='mail' onchange={handler}/>
                   <Input placeholder='Password' icon={<AiOutlineKey/>} inputType='pasword' name='password' onchange={handler}/>
                   <select name="role" className='text-input w-100 mb-4' onChange={(event)=>{dropdownhandler(event)}}>
                        <option value=" ">Se connecter en tant que </option>
                        <option value="1"   onChange={()=>{handler()}}>Administrateur</option>
                        <option value="2"   onChange={()=>{handler()}}>Etudiant</option>
                 </select>
                 </div>
            </div>
            <Button text="Se connecter " variant='primary' width='100' onclick={login}/>
        </div>

        </div>
    </>
    )
}
export default SignUppage;