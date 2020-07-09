import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { loadContacts } from '../actions';

class ContactList extends Component {
   componentDidMount() {
      this.props.loadPhones();
   }
   render() {
      const nodes = this.props.contacts.map((item, index)=>{
         return(
            <Contact
            key={index}
            id={item.id}
            name={item.name}
            phone={item.phone}
            />
         )
      })

      return (
         <div className="contact-list">
            <table className="table">
               <thead className="thead-dark">
                  <tr>
                     <th scope="col">#</th>
                     <th scope="col">Name</th>
                     <th scope="col">Phone</th>
                     <th scope="col">Actions</th>
                  </tr>
                  <tbody>
                     {nodes}
                  </tbody>
               </thead>
            </table>
         </div >
      )
   }

}

const mapStateToProps = (state) => ({
   contacts: state.contacts
})

const mapDispatchToProps = (dispatch) => ({
   loadContacts: () => dispatch(loadContacts())
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ContactList)