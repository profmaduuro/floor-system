import React from 'react'
import './parameters.css'

const Parameters = (props) => {
  return (
    <div>
        <a href="/">
               <i className='bi bi-house-door'></i>
            </a>
      <h3 className='bi bi-home'>Configure Parameters</h3>

      <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
          <div class="container-fluid">
              {/* <a href="#" class="navbar-brand">Brand</a> */}
              <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div class="navbar-nav">
                      <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Add Company</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Statutory Parameters</a>
                      <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Sale Parameters</a>
                  </div>
              </div>
          </div>
      </nav>
      </div>
      <br />

      <div className='card_10'>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                <th>Statutory</th>
                <th>Parameter</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Weighing & Auction</td>
                    <td><input type="number" className='form'/></td>
                    <td type='button' className='btn btn-primary btn-sm'>Edit</td>
                </tr>
            </tbody>

        </table>

      </div>

      {/* Modals */}

      <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add Company</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Company Name:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Address:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Phone:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Mobile:</label>
                        <input type="text" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Email:</label>
                        <input type="email" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Website:</label>
                        <input type="website" class="form-control" id="recipient-name" />
                    </div>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Logo:</label>
                        <input type="file" class="form-control" id="recipient-name" />
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
      </div>

      <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Configure Parameters</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Select Company:</label>
                        <select type="text" class="form-control" id="recipient-name" >
                            <option value="">Select Company</option>
                            <option value="">Vision Leaf</option>
                            <option value="">Horizon</option>
                        </select>
                    </div>
                    </form>
                </div>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Statutory</th>
                                <th>Charge</th>
                                <th>Place</th>
                                 <th>Priority</th>
                                 <th>On/Off</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Afforestration</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="checkbox" className='slider' /></td>
                            </tr>
                            <tr>
                                <td>Weighing & Auction</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="switch" className='switch-btn' /></td>
                            </tr>
                            <tr>
                                <td>Floor Commission</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="switch" className='switch-btn' /></td>
                            </tr>
                            <tr>
                                <td>Service Charge</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="switch" className='switch-btn' /></td>
                            </tr>
                            <tr>
                                <td>MOA</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="switch" className='switch-btn' /></td>
                            </tr>
                            <tr>
                                <td>MOA</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="switch" className='switch-btn' /></td>
                            </tr>
                            <tr>
                                <td>Bank Charge</td>
                                <td><input type="text" /></td>
                                <td><select name="" id="">
                                    <option value="">Value</option>
                                    <option value="">Mass</option>
                                    <option value="">Bales</option>
                                    <option value="">Mass & Value</option>
                                    <option value="">Net Value</option>
                                    <option value="">Stoporder Amount</option>
                                    </select></td>
                                <td><input type="switch" className='switch-btn' /></td>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Submit</button>
                </div>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Parameters