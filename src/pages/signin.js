import Input from '../components/input'
import Button from '../components/buttons'
import Background from "./header-bg.jpg"
import {getAllStudents, getUser}  from '../data/GET'
import {AiOutlineKey} from 'react-icons/ai'
import  {useState } from "react";
import {AiOutlineMessage} from 'react-icons/ai'

const SignUppage = () =>
{       
        let message ="Merci de remplir tous les champs ."
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
                            message="Veuillez remplir les champs"
                            console.log("dfkffgk")
                        }else
                        {
                            if (formDatas.role=="1") 
                            {
                                getUser(input,"admins")
                                const user = JSON.parse(localStorage.getItem("User"))
                                getAllStudents()  
                            }else
                            {
                                getUser(input,"student")
                                const user = JSON.parse(localStorage.getItem("User"))
                            }
                        }
                        
                      
            }
    return(
       <>
         <div className='d-flex justify-content-between section p-3' style={{backgroundImage:`linear-gradient(to top, rgba(12, 12, 12, 0.56), rgba(12, 12, 12, 0.56)),url(${Background})`}}>
             <div className='  d-flex flex-column justify-content-center ml-5'>
                <p className='text-larger mb-5'>SUP'INFO</p>
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
                 <p className="text-small red-text mb-3 p-1">{message}</p>
                 </div>
            </div>
            <Button text="Se connecter " variant='primary' width='100' onclick={login}/>
        </div>

        </div>
    </>
    )
}
export default SignUppage;