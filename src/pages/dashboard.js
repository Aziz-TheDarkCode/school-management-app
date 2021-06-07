import MiniCard from '../components/minicard'
import B_card from '../components/b-card.js'
import Table from '../components/table'

function Dashboard(){
    return(
        <div className='w-75 centered-box'>
            <div className='d-flex mt-6 mb-5'>
                <MiniCard title='Web Dev' number='150'/>
                <MiniCard title='Web Dev' number='255'/>
                <MiniCard title='Web Dev' number='342'/>
                <MiniCard title='Web Dev' number='89'/>
            </div>
            <Table/>
        
            {/* <div className='tab'>
                <div>
                    <B_card title1='Liste des Inscrits'/>
                </div>
                <div className='d-flex'>
                    <B_card title='Numero'/>
                    <B_card title='Nom Comlpet'/>
                    <B_card title='Date Inscription'/>
                    <B_card title='Filier'/>
                    <B_card title='Annee Inscription'/>
                </div>
                <div className='d-flex'>
                    <B_card num='245'/>    
                    <B_card nom='Abdou Aziz Ndiaye'/>
                    <B_card date='25/08/19'/>
                    <B_card fil=' web dev'/>
                    <B_card annee='L1'/>
                </div>
                <div className='d-flex'>
                    <B_card num='245'/>    
                    <B_card nom='Abdou Aziz Ndiaye'/>
                    <B_card date='25/08/19'/>
                    <B_card fil=' web dev'/>
                    <B_card annee='L1'/>
                </div>
            </div> */}
        </div>
        
        
    )
}
export default Dashboard;