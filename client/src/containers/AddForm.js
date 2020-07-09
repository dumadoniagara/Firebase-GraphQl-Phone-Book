import React, { Component } from 'react';

class AddForm extends Component {

   constructor(props) {
      super(props);
      this.state = {
         name: '', phone: ''
      }
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event){

   }

   render() {
      return (
         <div>
            <button className="btn btn-outline-primary mb-3 d-flex" type="button" data-toggle="collapse" data-target="#add-collapse" aria-expanded="false" aria-controls="add-collapse">
               Add New Contact
            </button>

            <div className="collapse mb-3" id="add-collapse">
               <div className="card card-body">
                  <form>
                     <div className="form-group">
                        <div className="row">
                           <div className="col">
                              <label for="name">Name</label>
                              <input
                                 type="text"
                                 name="name"
                                 className="form-control"
                                 placeholder="Input contact name..."
                                 value={this.state.name}
                                 required={true}
                              />
                           </div>
                           <div className="col">
                              <label for="phone">Phone</label>
                              <input
                                 type="text"
                                 name="phone"
                                 placeholder="input phone number..."
                                 value={this.state.phone}
                                 className="form-control"
                                 required={true}
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

export default AddForm;