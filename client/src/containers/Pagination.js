import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadContacts, nextPage, previousPage, changePage } from '../actions';

class Pagination extends Component {
   constructor(props) {
      super(props);
      this.state = {
         limit: 5
      }
      this.handleNext = this.handleNext.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handlePage = this.handlePage.bind(this);
      this.ref = React.createRef();
   }

   componentDidMount() {
      console.log(this.state)
   }

   componentDidUpdate() {
      console.log('state page global :', this.props.page)
   }

   handlePrevious(event) {
      const { limit } = this.state;
      let offset = ((this.props.page - 1) - 1) * limit
      this.props.loadContacts(offset);
      this.props.previousPage();
      event.preventDefault();
   }

   handleNext(event) {
      const { limit } = this.state;
      let offset = ((this.props.page + 1) - 1) * limit
      this.props.loadContacts(offset);
      this.props.nextPage();
      event.preventDefault();
   }

   handlePage(event) {
      const page = parseInt(event.target.id);
      const offset = (page - 1) * this.state.limit;
      this.props.loadContacts(offset);
      this.props.changePage(page);
      event.preventDefault();
   }

   render() {
      return (
         <nav aria-label="Page navigation example" >
            <ul className="pagination justify-content-center">
               <li className={this.props.page == 1 ? "page-item disabled" : "page-item"}>
                  <a className="page-link" href="#" onClick={this.handlePrevious}>Previous</a>
               </li>

               {[...Array(this.props.pages)].map((num, index) => {
                  return (<li className={this.props.page == index + 1 ? "page-item active" : "page-item"} key={index} ><a className="page-link" id={index + 1} onClick={this.handlePage} href="#" >{index + 1}</a></li>)
               })
               }

               <li className={this.props.page == this.props.pages ? "page-item disabled" : "page-item"}>
                  <a className="page-link" href="#" onClick={this.handleNext}>Next</a>
               </li>
            </ul>
         </nav >
      )
   }
}

const mapStateToProps = (state) => ({
   page: state.contacts.page,
   pages: state.contacts.pages
})

const mapDispatchToProps = dispatch => ({
   loadContacts: (offset, limit) => dispatch(loadContacts(offset, limit)),
   changePage: (page) => dispatch(changePage(page)),
   nextPage: () => dispatch(nextPage()),
   previousPage: () => dispatch(previousPage())
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Pagination)