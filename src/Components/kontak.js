import { buildQueries } from '@testing-library/react'
import React from 'react'

class Kontak extends React.Component{
    render(){
        return(
        <div>
            <div class="alert alert-warning" role="alert">
  <center><h2>FOLLOW ME!</h2></center>
  </div>
  <div className="card col-sm-5 mx-auto m-5">
 	                <div className="card-header text-center bg-success text-white">
 	                    <h4>Sosial Media</h4>
 	                </div>
 	                <img src="ig.jpg"></img>
                    <img src="fb.jpg"></img>
                    <img src="yt.jpg"></img>
 	                   <div className="card-footer">
                        <center><a href="https://instagram.com/maylaniksm?igshid=10ye8v8ikjeax" class="btn btn-danger">INSTAGRAM</a>
                        <a href="https://www.facebook.com/maylani.wardhani" class="btn btn-primary">FACEBOOK</a>
                        <a href="https://www.youtube.com/channel/UCNWwK2c3QPIP5y08lnsBs8Q" class="btn btn-danger">YOUTUBE</a></center>
 	                </div>
 	            </div>

        </div>
        
        )
    }
}

export default Kontak;