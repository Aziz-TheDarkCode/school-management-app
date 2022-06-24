const PostData = (userData) =>
{
        const baseUrl ="http://localhost/backend/api"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
        fetch(`${baseUrl}/student/create.php`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
}   



export default PostData ;

