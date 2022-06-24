const baseUrl ="http://localhost/backend/api"

const getUser = (userData,type) =>
{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
        fetch(`${baseUrl}/${type}/readSingle.php`, requestOptions)
            .then(response => response.json())
            .then(data => {console.log(data)
                    if (data.id==undefined) 
                    {
                        console.log("Not saved")    
                    }else
                    {
                        localStorage.setItem("User",JSON.stringify(data)) 
                        if (data.faculty==undefined) 
                        {
                            window.location.replace("/dashboard")    
                        }else
                        {
                            window.location.replace("/fiche")
                        }
                    }
                   
            });
}
const getAllStudents = () =>  
    {
        const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    fetch(`${baseUrl}/student/read.php`, requestOptions)
        .then(response => response.json())
        .then(data =>localStorage.setItem("AllStudents",JSON.stringify(data)))
}
export  {getUser,getAllStudents}