import React from 'react';
import Jumbotron from './Jumbotron';
import ListContacts from '../containers/ListContacts';
import AddForm from '../containers/AddForm';
import SearchForm from '../containers/SearchForm';


function PhoneBox() {
   return (
      <div className="phone-box">
         <Jumbotron />
         <SearchForm />
         <AddForm />
         <ListContacts />
      </div>
   );
}

export default PhoneBox;