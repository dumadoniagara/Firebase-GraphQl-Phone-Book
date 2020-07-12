import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from '../actions';

class SearchForm extends Component {

   constructor(props) {
      super(props);
      this.state = { name: '', phone: '' }
      this.handleChange = this.handleChange.bind(this);
      this.handleReset = this.handleReset.bind(this);
   }

   handleChange(event) {
      let { name, phone } = this.state;
      this.setState({ [event.target.name]: event.target.value });
      console.log(name, phone)
   }

   handleReset(event) {
      this.setState({ name: '', phone: '' });
      event.preventDefault();
   }

   render() {
      return (
         <div className="card mb-3">
            <h5 className="card-header">Search Contact</h5>
            <div className="card-body">
               <form>
                  <div className="form-group row">
                     <label className="col-sm-1 col-form-label">
                        <b>Name</b>
                     </label>
                     <div className="col-sm-4">
                        <input
                           type="text"
                           className="form-control"
                           placeholder="Search by name.."
                           value={this.state.name}
                           onChange={this.handleChange}
                           name="name"
                        />
                     </div>
                     <label className="col-sm-1 col-form-label">
                        <b>Phone</b>
                     </label>
                     <div className="col-sm-4">
                        <input
                           type="text"
                           placeholder="Search by phone.."
                           className="form-control"
                           value={this.state.phone}
                           onChange={this.handleChange}
                           name="phone"
                        />
                     </div>
                     <div className="col-md-2">
                        <button className="btn btn-outline-secondary" onClick={this.handleReset}><i className="fas fa-sync-alt"></i> Reset</button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      )
   }
}

const mapDispatchToProps = dispatch => ({

})

export default connect(

)(SearchForm)




