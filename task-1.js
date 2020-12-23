const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
          let cek = dataDay.find((item) => {
              return item == day;
          })
          if(cek){
              resolve(cek)
          }else{
              reject(new Error('Hari ini bukan hari kerja'))
          }
      }, 3000)  
    }).then(result => {
        console.log(result);
      })
      .catch(err => {
        throw err
      })
}

cekHariKerja('selasa')
// cara penggunaan then dan catch :
// then adalah sebuah method untuk mengambil resolve dari sebuah promise,
// dengan menambahkan then, maka kita akan mengambil data sebuah Promise apabila status promise fullfield, cara pengambilan datanya yaitu dengan
// menuliskan methode then setelah methode promise, dengan mendefiniskan parameter didalam then untuk menyimpan data resolve promise tadi. setelah
// mendefiniskan then, maka kita harus mendefinisikan juga catch, hal ini untuk menangani sebuah kembalian promise apabila status promise reject atau gagal.



const cekHariKerja = (day) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
              let cek = dataDay.find((item) => {
                  return item == day;
              })
              if(cek){
                  resolve(cek)
              }else{
                  reject(new Error('Hari ini bukan hari kerja'))
              }
          }, 3000)  
        })
}

 const getData = async (data) => {
     try{
         const promise = await cekHariKerja(data)
         console.log(promise);
     }catch(error){
         throw error;
     }

 }

getData('senin')

//penggunaan try catch ini sebaiknya harus di dalam aync/await,
//try untuk mengambil respon data apabila keadaan promise saat request fullfield
//dan catch untuk menangani apabila response dari promise reject