import MiniCard from '../components/minicard'
import Table from '../components/table'
import Footer from '../layout/footer'
    import {GrPowerShutdown} from "react-icons/gr"

//function qui desactictive le retour en arriere
(function (global) {
    if(typeof (global) === "undefined") {
        throw new Error("window is undefined");
    }
    
    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";
    
        
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };
    
    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };
    
    global.onload = function () {
        noBackPlease();
    
      
        document.body.onkeydown = function (e) {
            var elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
                e.preventDefault();
            }
     
            e.stopPropagation();
        };
    }
    })(window);
function Dashboard(){
    const user = JSON.parse(localStorage.getItem("User"))
    const allStudents = JSON.parse(localStorage.getItem("AllStudents"))
    //Avoir le nbre d'etudiants dans chaque filiere
    const getLength =(fac)=>{
       return (allStudents.filter((el)=>{ return el.faculty ==fac})).length
        /*
        Web developpement :  1
        Reseau Telecom':  2
        Cyber Security :  3
        Info-gestion :  4
        */
    }
    if (localStorage.length>=1 && user.faculty ==undefined) 
    {
       
        return(
            <>
            <div className='w-75 centered-box'> 
                <div className="d-flex text-center red-text mt-1" onClick={()=>{localStorage.clear();window.location.replace("/signin")}}>Deconnexion <GrPowerShutdown className="ml-2 red-text"/></div>
                <div className='d-flex mt-2 mb-5'>
                    <MiniCard title='Web Dev' number={getLength(1)}/>
                    <MiniCard title="Reseau Telecom'" number={getLength(2)}/>
                    <MiniCard title='Cyber Security'  number={getLength(3)}/>
                    <MiniCard title='Info-gestion' number={getLength(4)}/>
                </div>
                <Table/>      
            </div>
            <Footer/>
            </>)
    }else
    {
        window.location.replace("/homepage")
    }

}
export default Dashboard;