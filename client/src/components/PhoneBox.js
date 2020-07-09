import React from 'react';
import Jumbotron from './Jumbotron';
import ListContacts from '../containers/ListContacts';
import AddForm from '../containers/AddForm';

function PhoneBox() {
   return (
      <div className="phone-box">
         <Jumbotron />
         <AddForm />
         <ListContacts />
      </div>
   );
}

export default PhoneBox;