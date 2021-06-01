const Input =({placeholder,icon,inputType})=>
{   
   return(
       <div>
            <div className='placeholder text-x-small d-flex align-items-center'>
                <span>{placeholder}</span>
                <span className='ml-2'>{icon}</span>
            </div>
            <input  className='p-1 mb-5 text-input w-100' type={inputType}/>
       </div>
   ) 
}
export default Input