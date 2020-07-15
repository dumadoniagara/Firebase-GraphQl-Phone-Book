import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchContacts, loadContacts } from '../actions';

class SearchForm extends Component {

   constructor(props) {
      super(props);
      this.state = { name: '', phone: '' }
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangePhone = this.handleChangePhone.bind(this);
      this.handleReset = this.handleReset.bind(this);
   }

   handleChangeName(event) {
      let { phone } = this.state
      console.log(event.target.value)
      this.setState({ name: event.target.value })
      this.props.searchContacts(event.target.value, phone)
   }

   handleChangePhone(event) {
      let { name } = this.state
      this.setState({ phone: event.target.value })
      this.props.searchContacts(name, event.target.value)
   }

   handleReset(event) {
      this.props.loadContacts()
      this.setState({ name: '', phone: '' });
      event.preventDefault();
   }

   render() {
      return (
         <div className="card mb-3">
            <div className="card-header" style={{ fontSize: "23px" }}>
               Search Contact
                 <i className="fas fa-search ml-3"></i>
            </div>
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
                           onChange={this.handleChangeName}
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
                           onChange={this.handleChangePhone}
                           name="phone"
                        />
                     </div>
                     <div className="col-md-2">
                        <button className="btn btn-outline-secondary" onClick={this.handleReset}><i className="fas fa-sync-alt"></i> Reset</button>
                     </div>
                  </div>
               </form>
            </div>
         </div >
      )
   }
}

const mapDispatchToProps = dispatch => ({
   searchContacts: (name, phone, offset, limit) => dispatch(searchContacts(name, phone, offset = 0, limit = 5)),
   loadContacts: () => dispatch(loadContacts())
})

export default connect(
   null,
   mapDispatchToProps
)(SearchForm)




