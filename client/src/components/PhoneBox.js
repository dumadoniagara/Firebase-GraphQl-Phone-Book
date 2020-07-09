import React from 'react';
import Jumbotron from './Jumbotron';
import ListContacts from './ListContacts';

function PhoneBox() {
   return (
      <div className="phone-box">
         <Jumbotron />
         <ListContacts/>
      </div>
   );
}

export default PhoneBox;