import React from 'react';

const Contact = (props) => {
   return (
      <tr>
         <td>{props.index}</td>
         <td>{props.name}</td>
         <td>{props.phone}</td>
         <td>
            {
            props.sent ? (<button type="submit" className="btn"><i className="fas fa-pencil-alt"></i> Edit </button>) : (<button type="submit" className="btn"><i className="fas fa-sync-alt"></i>Resend</button>)
            }
         </td>
      </tr>
   )
}

export default Contact;