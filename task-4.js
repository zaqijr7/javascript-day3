function Fetch(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url, {
        method: 'GET'
    })
    .then((response) => {
        return response.json()
    })
    .then((data) => {
            data.map((e) => {
            console.log(e.name); 
        })
    })
    .catch(() => {
        console.log('error get data'); 
    })
}

Fetch()