import Input from './input'
import Submit from './submit'
import {AiOutlineKey} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
const Formul = ({title})=>{
    return(
        <div className='form col-3 p-5 mt-3 mb-5'>
            <p className='text-larger text-bold mb-5 ml-2'>{title}</p>
            <div className=''>
                 <div className=''>
                   <Input placeholder="Nom d'utilisateur" icon={<AiOutlineUser/>} inputType='text'/>
                   <Input placeholder="Mot de passe" icon={<AiOutlineUser/>} inputType='text'/>
                 </div>
            </div>
            <Submit text="Se connecter" variant='primary' width='50'/>
        </div>  
    )
}
export default Formul;