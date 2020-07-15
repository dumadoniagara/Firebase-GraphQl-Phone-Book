import React from 'react';
import Jumbotron from './Jumbotron';
import ListContacts from '../containers/ListContacts';
import AddForm from '../containers/AddForm';
import SearchForm from '../containers/SearchForm';
import Pagination from '../containers/Pagination';


function PhoneBox() {
   return (
      <div className="card mt-5 mb-5">
         <div className="phone-box">
            <Jumbotron />
            <SearchForm />
            <AddForm />
            <ListContacts />
            <Pagination />
         </div>
         <div className="card-footer">
            <small className="text-muted">© 2020 Duma Doniagara Sambora </small>
         </div>
      </div>
   );
}

export default PhoneBox;