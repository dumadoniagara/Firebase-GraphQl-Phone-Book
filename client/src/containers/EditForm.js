import React, { Component } from 'react';
import { connect } from 'react-redux';
import { offUpdateContact, updateContact } from '../actions'

class EditForm extends Component {
   constructor(props) {
      super(props);
      this.state = { name: this.props.name, phone: this.props.phone }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCancel = this.handleCancel.bind(this);
   }

   handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleCancel() {
      console.log('tombol cancel')
      this.setState({ name: this.props.name, phone: this.props.phone })
      this.props.offUpdateContact()
   }

   handleSubmit(event) {
      event.preventDefault();
      console.log('tombol submit')
      if (this.state.name && this.state.phone) {
         this.props.updateContact(this.state.name, this.state.phone)
      } else {
         // swall
      }

   }

   render() {
      return (
         <tr>
            <div className="col-md-10 ">
               <th scope="row">{this.props.index}</th>
            </div>
            <td>
               <div className="col-md-8 ">
                  <form className="form-row" onSubmit={this.handleSubmit}>
                     <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required={true} />
                  </form>
               </div>
            </td>
            <td>
               <div className="col-md-8 ">
                  <form className="form-row" onSubmit={this.handleSubmit}>
                     <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} required={true} />
                  </form>
               </div>
            </td>
            <td>
               <button type="submit" className="btn  mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
               <button type="button" className="btn " onClick={this.handleCancel}><i className="fas fa-times"></i> Cancel</button>
            </td>
         </tr>

      )
   }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
   offUpdateContact: () => dispatch(offUpdateContact(ownProps.id)),
   updateContact: (name, phone) => dispatch(updateContact(ownProps.id, name, phone))
})

export default connect(
   null,
   mapDispatchToProps
)(EditForm)