const Footer =()=>
{
    return(
        <div className='d-flex footer p-3 align-items-center' id="#footer">
            {/* <img src={Logo}/ > */}
            <div className='col-6 p-3'>
                <p className='text-larger text-bold mb-2'>Groupe Sup'info</p>
                <p>© 2021 | Mentions Légales  |  Groupe SUP'INFO SENEGAL</p>
            </div>
            <div className='col-6 p-3 '>
                   <p className='p-2 text-bold text-medium'>Informations</p> 
                   <p className='p-2'>SENEGAL - DAKAR,</p> 
                    <p className='p-2'>Siège : 8, Rue Aristide le Dantec,</p>
                    <p className='p-2'>BP 21 104 Dakar Ponty</p>
                    <p className='p-2'>E-mail :  info@groupesupinfo.com </p>
                    <p className='p-2'>Téléphone :  +221 786300614 </p>
            </div>
        </div>
    )
}
export default Footer
