import React from 'react';

const Contact = (props) => {
   return (
      <tr>
         <td scope="row">{props.index}</td>
         <td scope="row">{props.name}</td>
         <td scope="row">{props.phone}</td>
         <td scope="row">
            <button type="submit" className="btn"><i className="fas fa-pencil-alt"></i> Edit </button>
            {props.sent ?
               (<button type="button" className="btn" onClick={props.onDelete}><i className="fas fa-trash"></i> Delete</button>) : (<button type="submit" className="btn"><i className="fas fa-sync-alt"></i>Resend</button>)
            }
         </td>
      </tr>
   )
}

export default Contact;