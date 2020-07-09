import React from 'react';

const Contact = (props) => {
   return (
      <div className="contact-item">
         <table className="table">
            <thead className="thead-dark">
               <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Actions</th>
               </tr>
               <tbody>
                  <tr>
                     <th scope="row"></th>
                     <td>{props.name}</td>
                     <td>{props.phone}</td>
                     <td>
                        <button
                           role="button"
                           className="btn btn-success mr-1 btn-edit"
                        >
                           <i className="fas fa-pen-alt">update</i>
                        </button>

                        <button
                           role="button"
                           className="btn btn-danger btn-delete"
                        >
                           <i className="fas fa-trash">delete</i>
                        </button>
                     </td>
                  </tr>
               </tbody>
            </thead>
         </table>
      </div >
   )
}

export default Contact;