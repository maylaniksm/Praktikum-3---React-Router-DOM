import React, { Component } from 'react'

class TentangSaya extends React.Component{
    render(){
        return(
        <div>
            <div class="alert alert-danger" role="alert">
  <center><h2>HALO READERS!</h2></center>
  <center><img src="me.JPG"></img></center>
</div>
<div class="alert alert-secondary" role="alert">
Perkenalkan nama saya Maylani Kusuma Wardhani. Saya lahir di Tulungagung, tanggal 23 Mei 2003.
</div>
<div class="alert alert-info" role="alert">
Saya bersekolah di SMK TELKOM MALANG Angkatan ke-28. 
    Saya merupakan salah satu siswi jurusan Rekayasa Perangkat Lunak kelas XI RPL 5.
</div>
<div class="alert alert-warning" role="alert">
Saya berasal dari Kabupaten Tulungagung, Provinsi Jawa Timur.
</div>
<div class="alert alert-success" role="alert">
 Hobi saya adalah menonton film.
</div>
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
    </ul>
  </div>
  <div class="card-body">
    <center><h5 class="card-title">Want To Be Closer To Me?</h5>
    <p class="card-text">"TODAY OR NEVER"</p>
    <a href="https://wa.me/qr/PXXGLB3QC7NZI1" class="btn btn-primary">Contact Me!</a></center>
  </div>
</div>
        </div>
        )
    }
}
export default TentangSaya;