import Tab from './tab'
const MiddleCard= ({})=>{
    return(
        <div className=' middle-card mt-6 w-100 mr-4 p-3'>
            <div className='d-flex align-items-center mb-3 text-bold text-medium'>
                <h1>Fiche de l'étudiant</h1>
            </div>
            <div className=' p-3 d-inline '>
                <Tab name='Claudys Bikindou' fil='Cybersecurite' stat="Accepter"/>
            </div>
        </div>
    )
}
export default MiddleCard;