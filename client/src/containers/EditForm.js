import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditForm extends Component {
   constructor(props) {
      super(props);
      this.state = { name: '', phone: '', edit: false }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      if (this.state.name && this.state.phone) {
         this.props.postContact(this.state.name, this.state.phone)
         this.setState({ name: '', phone: '' })
      } else {
         // swall
      }

   }

   render() {
      return (
         <tr>
            <th scope="row">{this.props.index}</th>
            <td>
               <form className="form-row" onSubmit={this.handleSubmit}>
                  <div className="col-8">
                     <input type="text" className="form-control" name="Name" value={} disabled={true} />
                  </div>
               </form>
            </td>
            <td>
               <form className="form-row" onSubmit={this.handleSubmit}>
                  <div className="col-8">
                     <input type="text" className="form-control" name="Name" value={} onChange={} required={true} />
                  </div>
               </form>
            </td>
            <td>
               <form className="form-row" onSubmit={this.handleSubmit}>
                  <div className="col-8">
                     <input type="number" className="form-control" name="Number" value={} onChange={} required={true} />
                  </div>
               </form>
            </td>
            <td>
               <button type="submit" className="btn  mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
               <button type="button" className="btn " onClick={}><i className="fas fa-times"></i> Cancel</button>
            </td>
         </tr>
      )
   }
}

const mapDispatchToProps = dispatch => ({
   postContact: (name, phone) => dispatch(postContact(name, phone))
})

export default connect(
   null,
   mapDispatchToProps
)(EditForm)