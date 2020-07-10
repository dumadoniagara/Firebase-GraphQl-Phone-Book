import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postContact } from '../actions';

class AddForm extends Component {

   constructor(props) {
      super(props);
      this.state = { name: '', phone: '' }
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
         <div>
            <button className="btn btn-outline-primary mb-3 d-flex" type="button" data-toggle="collapse" data-target="#add-collapse" aria-expanded="false" aria-controls="add-collapse">
               Add New Contact
            </button>

            <div className="collapse mb-3" id="add-collapse">
               <div className="card card-body">
                  <form onSubmit={this.handleSubmit}>
                     <div className="form-group">
                        <div className="row">
                           <div className="col">
                              <label>Name</label>
                              <input
                                 type="text"
                                 name="name"
                                 className="form-control"
                                 placeholder="Input contact name..."
                                 value={this.state.name}
                                 required={true}
                                 onChange={this.handleChange}
                              />
                           </div>
                           <div className="col">
                              <label>Phone</label>
                              <input
                                 type="text"
                                 name="phone"
                                 placeholder="input phone number..."
                                 value={this.state.phone}
                                 className="form-control"
                                 required={true}
                                 onChange={this.handleChange}
                              />
                           </div>
                        </div>
                     </div>

                     <button type="submit" className="btn btn-outline-primary d-flex">
                        <i className="fas fa-plus"> Save</i>
                     </button>
                  </form>
               </div>
            </div>
         </div >
      )
   }
}

const mapDispatchToProps = dispatch => ({
   postContact: (name, phone) => dispatch(postContact(name, phone))
})

export default connect(
   null,
   mapDispatchToProps
)(AddForm)