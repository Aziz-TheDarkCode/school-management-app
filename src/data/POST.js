const PostData = (userData) =>
{
        const port ="http://localhost:8000/api"
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
        fetch(`${port}/student/create.php`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
}
export default PostData;

