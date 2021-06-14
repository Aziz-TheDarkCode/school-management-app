import  BackgrounedSection from '../components/backgrounedSection'
import Form from '../components/form'
import Input from '../components/input'
import Button from '../components/buttons'
import {AiOutlineKey} from 'react-icons/ai'
import  {useEffect ,useState } from "react";
import {AiOutlineMessage} from 'react-icons/ai'
const SignUppage = () =>
{
        const [ input , setInput ] = useState({
                mail : "",
                password : "",
        })
        

        const login = ()=>
        {
           
        }
        const handler =(event)=>
        {
            setInput({...input,[event.target.name] : event.target.value})
            console.log(input)
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
                   <Input placeholder='Password' icon={<AiOutlineKey/>} inputType='text' name='password' onchange={handler}/>
                 </div>
            </div>
            <Button text="Se connecter " variant='primary' width='100' onclick={login}/>
        </div>

        </div>
    </>
    )
}
export default SignUppage;