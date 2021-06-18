import MiddleCard from '../components/middle-card'
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

    // Making sure we have the fruit available for juice (^__^)
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

    // Disables backspace on page except on input fields and textarea..
    document.body.onkeydown = function (e) {
        var elm = e.target.nodeName.toLowerCase();
        if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
            e.preventDefault();
        }
        // Stopping the event bubbling up the DOM tree...
        e.stopPropagation();
    };
}
})(window);
function Fiche() {
    const user = JSON.parse(localStorage.getItem("User"))
    if (localStorage.length>=1) 
    {    
        return(
            <>
            <div className='w-75 centered-box'>
            <div className="d-flex text-center red-text mt-1" onClick={()=>{localStorage.clear();window.location.replace("/signin")}}>Deconnexion <GrPowerShutdown className="ml-2 red-text"/></div>
                <MiddleCard/>
            </div>
            <Footer/>
       </> 
        )
    }else
    {
        return(window.location.replace("/homepage"))
    }
    
}
export default Fiche;