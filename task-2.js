const getmonth = (callback) => {
    setTimeout (() =>{
        let error = true;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 
        'September', 'October', 'November', 'December'];
        if(!error) {
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

const outputMonth = (response, data) => {

    if(response == null) {
        data.map((e) => {
            console.log(e);
        })
    }else{
        console.log(response);
    }
    
}

getmonth(outputMonth)