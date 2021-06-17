import illustration from "./user.webp"
const MiddleCard= ({})=>{
    const user = JSON.parse(localStorage.getItem("User"))
    return(
        <div className=' middle-card mt-6 w-100 mr-4 p-3 d-flex flex-column justify-content-center align-items-center'>
                <h1 className=' mb-3 text-bold text-medium'>Fiche de l'étudiant</h1>
            <img src={illustration} alt=""  width="200px"/>
            <div className=' p-3 d-inline text-medium '>
            <div className='d-inline justify-content-between p-3 mt-3'>
            <p className='mb-3'><span className="text-bold">Nom Complet</span>: {user.name}</p>
            <p className='mb-3'><span className="text-bold">Filiére </span>:{user.faculty}</p>
                 <p><span className="text-bold">Status de l'inscription</span>: {user.status}</p>
        </div>
            </div>
        </div>
    )
}
export default MiddleCard;