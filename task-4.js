function Fetch(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    return fetch(url, {
        method: 'GET'
    })
}

Fetch()
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