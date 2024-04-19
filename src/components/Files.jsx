import React from 'react';
import './Files.css';


const Files =(props)=> {
  return (
    <div>
      <div>

      <a href="/home">
                <i className='bi bi-house-door'></i>
              </a>
      <h3 className='bi bi-home'>Files Management</h3>

      </div>
      
      <br />

      <div className='col-auto'> 

      <form action="" className='center'>
    
        <label htmlFor="File to Upload"></label>
        <select type="text"  className='form-select'>
          <option>SELECT FILE </option>
          <option>Grower Booking</option>
          <option>Stoporder File</option>
          <option>Grower Registry</option>
          <option>TIMB Creditor Schedule</option>
        </select>

        <br />
        


        <input type="file" className='form-control sm' />

        <br />

        <button type="submit" className='btn btn-primary' value='Submit'>Submit</button>

        </form>
        
      </div>
     
    </div>
  )
}

export default Files