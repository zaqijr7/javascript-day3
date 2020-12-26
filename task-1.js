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

cekHariKerja('selasa')
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            throw err
        });

// cara penggunaan then dan catch :
// 1. then adalah sebuah method untuk mengambil resolve dari sebuah promise,
// dengan menambahkan then, maka kita akan mengambil data sebuah Promise apabila status promise fullfield, dan mengembalikan nilai resolve.
// 2. cara pengambilan datanya yaitu dengan menuliskan methode then setelah promise, dengan mendefiniskan parameter didalam then untuk menyimpan data resolve promise tadi. 
// setelah mendefiniskan then, maka kita harus mendefinisikan juga catch, hal ini untuk menangani sebuah kembalian promise apabila status promise reject atau gagal.

 const getData = async (data) => {
     try{
         const promise = await cekHariKerja(data)
         console.log(promise);
     }catch(error){
         throw error;
     }

 }

getData('senin')

// TRY and Catch
// penggunaan try catch ini sebaiknya harus di dalam aync/await,
// try untuk mengambil respon data apabila keadaan promise saat request statusnya fullfield
// dan catch untuk menangani apabila response dari promise reject
// Alur code :
// 1. Disini saya membuat sebuah function async yang diberi nama getData dengan satu parameter yaitu 'data'
// 2. parameter 'data ini berfungsi untuk menerima value yang akan di kirimkan ke function hariKerja yang berisi promise untuk menampilkan salah satu hari kerja.
// 3. Didalan function getData terdapat sebuah methode try dan catch, try untuk menghandle apabila status promise fullfield saat dipanggil nanti, dan catch untuk menghandle promise apabila statusnya reject.
// 4. Didalam try, saya mendefinisikan sebuah constanta yang berisi await cekHariKerja, await ini berfungsi untuk menunda sebuah kode dijalankan.
// 5. Setelah mendifiniskan constanta, maka disini saya mendifiniskan console.log untuk menampilkan hasil dari resolve(cek) di function cekHariKerja.
// 6. Selanjut mendifinisikan methode catch untuk menghandle error saat status promise reject dengan mengambil reject(new Error('Hari ini bukan hari kerja')) pada function sekHariKerja