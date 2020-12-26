 const buyBook = (data) => {
     return new Promise((resolve, reject) => {
         setTimeout(() => {
             const book = ['Pemrogramman PHP', 'Styling css', 'Rahasia Pintu Rezeki', 'Nyanyian Surau', 
                            'Cahaya Kolbu']
             const {name, noBook} = data;
             let danger = noBook > book.length;

             if(!danger){
                resolve({name: name, book: book[noBook]})
             } else {
                 reject(new Error('Buku tidak tersedia'))
             }
         }, 3000)
     })
 }

 buyBook({name: 'Muhammad Zaqi', noBook: 1})
        .then((result) => {
            console.log(`${result.name} akan membeli buku : ${result.book}`);
        })
        .catch((err) => {
        throw err;
        })


 //==============================================

 const listData = () => {
     return new Promise((resolve, reject) => {
         const dataNum = [2, 4, 5, 6, 7, 3];
         setTimeout(() => {
             let cannot = dataNum.length > 10;
             if(!cannot) {
                 resolve(dataNum)
                }else{
                 reject(new Error('Data tidak boleh lebih dari 10'))
             }
         }, 3000)
     })
 }

 const getData = async () => {
     try{
         const promise = await listData()
         console.log(promise);
     }catch(error){
         throw error;
     }

 }

 getData()