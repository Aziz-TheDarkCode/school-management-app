import Input from './input'
import Button from './buttons'
import {AiOutlineKey} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineCalendar} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineHistory} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
const Form=({title})=>
{
    return(
        <div className='form col-4 p-3 mt-2'>
            <p className='text-larger text-bold mb-5 ml-2'>{title}</p>
            <div className='d-flex justify-content-around mt-3'>
                 <div className=''>
                   <Input placeholder='Nom' icon={<AiOutlineUser/>} inputType='text'/>
                   <Input placeholder='Prenom' icon={<AiOutlineUser/>} inputType='text'/>
                   <Input placeholder='Date de Naissance' icon={<AiOutlineCalendar/>} inputType='date'/>
                  <div style={{marginTop:`5.5px`}}>
                     <div className='placeholder text-x-small d-flex align-items-center'>
                        <span>Filiere</span>
                        <span className='ml-2'><AiOutlineBook/></span>
                    </div>
                 <select name="cars" className='text-input w-100'>
                        <option value="volvo">Web Developement</option>
                        <option value="saab">Cyber Security</option>
                        <option value="opel">Reseau Telecommunications</option>
                        <option value="audi">Informatique de gestion</option>
                 </select>
                  </div>
                 
                 </div>
                 <div className=''>
                   <Input placeholder="Année d'inscription" icon={<AiOutlineHistory/>} inputType='text'/>
                   <Input placeholder='Adresse Mail' icon={<AiOutlineMessage/>} inputType='text'/>
                   <Input placeholder='Mot de passe' icon={<AiOutlineKey/>} inputType='password'/>
                   <Input placeholder='Confirmer Mot de passe' icon={<AiOutlineKey/>} inputType='password'/>
                 </div>
            </div>
            <Button text="S'inscrire" variant='primary' width='100'/>
        </div>
    )
}
export default Form;