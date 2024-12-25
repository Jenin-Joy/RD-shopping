import React from 'react'
import './main.css'
const Category = () => {
  return (
    <div className='hm'>
      <button className='bt submitbt' data-bs-toggle="modal" data-bs-target="#exampleModal">Add +</button>
      <table className='table table-dark' align='center'>
        <thead>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>Category 1</td>
          <td>Delete Edit</td>
        </tr>
        </tbody>
      </table>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Category</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <input type="text" name="txt_district" placeholder='Enter Category' className='textbox' id="" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Category