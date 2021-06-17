import MiniCard from '../components/minicard'
import Table from '../components/table'


function Dashboard(){
    const user = JSON.parse(localStorage.getItem("User"))
    if (localStorage.length>=1 && user.faculty ==undefined) 
    {
       
        const baseUrl ="http://localhost:8000/api"
        const getAllStudents = () =>  
        {
            const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`${baseUrl}/student/read.php`, requestOptions)
            .then(response => response.json())
            .then(data =>console.log(data))
    }
        
       
        return(
            <div className='w-75 centered-box'>
                <div className='d-flex mt-6 mb-5'>
                    <MiniCard title='Web Dev' number='150'/>
                    <MiniCard title="Reseau Telecom'" number='255'/>
                    <MiniCard title='Cyber Security' number='342'/>
                    <MiniCard title='Info-gestion' number='89'/>
                </div>
                <Table/>      
            </div>)
    }else
    {
        window.location.replace("/homepage")
    }

}
export default Dashboard;