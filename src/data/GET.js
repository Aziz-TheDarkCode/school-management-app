const baseUrl ="http://localhost:8000/api"

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
                // if (typeof(data.id)==undefined) 
                // {
                //     console.log("Mot de passe ou adresse mail incorrect ! ")  
                // }
                // else
                // {
                    localStorage.setItem("User",JSON.stringify(data))
                // }     
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
        .then(data =>console.log(data))
}
export  {getUser,getAllStudents}