import React from 'react';
import { connect } from 'react-redux';
import { deleteContact } from '../actions';

const Contact = (props) => {
   return (
      <tr>
         <td >{props.index}</td>
         <td >{props.name}</td>
         <td >{props.phone}</td>
         <td >
            <button type="button" className="btn"><i className="fas fa-pencil-alt"></i> Edit </button>
            {props.sent ?
               (<button type="button" className="btn" onClick={props.onDelete}><i className="fas fa-trash"></i> Delete</button>) : (<button type="submit" className="btn"><i className="fas fa-sync-alt"></i>Resend</button>)
            }
         </td>
      </tr>
   )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   onDelete: () => dispatch(deleteContact(ownProps.id))
})

export default connect(
   null,
   mapDispatchToProps
)(Contact)