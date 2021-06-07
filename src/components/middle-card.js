import Tab from './tab'
import Info from './info'
const MiddleCard= ({})=>{
    return(
        <div className=' middle-card mt-6 w-100 mr-4 p-3'>
            <div className='d-flex align-items-center mb-3 text-bold text-medium'>
                <h1>Fiche de l'étudiant</h1>
            </div>
            <div className='text-bold p-3 d-inline '>
                <Tab name='Nom complet' fil='Filiere inscrite' stat="Statut de l'inscription"/>
            </div>
            <div className='d-flex justify-content-end mb-5'>
                <Info name=' :Claudys Bikindou' fil=' :Cyber Securite' stat=' :Accepte'/>
            </div>
        </div>
    )
}
export default MiddleCard;