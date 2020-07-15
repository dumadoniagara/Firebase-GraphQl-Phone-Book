import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadContacts } from '../actions';

class Pagination extends Component {
   constructor(props) {
      super(props);
      this.state = {
         limit: 5,
      }
      this.handleNext = this.handleNext.bind(this);
      this.handlePrevious = this.handlePrevious.bind(this);
      this.handlePage = this.handlePage.bind(this);
   }

   componentDidMount() {
      console.log(this.state)
   }

   componentDidUpdate() {
      console.log(this.state)
   }

   handlePrevious(event) {
      const { page, limit } = this.state;
      this.setState({ page: page - 1 })
      let offset = ((page - 1) - 1) * limit
      this.props.loadContacts(offset);
      event.preventDefault();
   }

   handleNext(event) {
      const { page, limit } = this.state;
      this.setState({ page: page + 1 })
      let offset = ((page + 1) - 1) * limit
      this.props.loadContacts(offset);
      event.preventDefault();
   }

   handlePage() {

   }

   render() {
      return (
         <nav aria-label="Page navigation example" >
            <ul className="pagination justify-content-center">
               <li className={this.state.page === 1 ? "page-item disabled" : "page-item"}>
                  <a className="page-link" href="#" onClick={this.handlePrevious}>Previous</a>
               </li>

               {[...Array(this.props.pages)].map((num, i) => {
                  return (<li className="page-item" key={i}><a className="page-link" href="#" value={i + 1} >{i + 1}</a></li>)
               })
               }

               <li className="page-item">
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
   loadContacts: (offset, limit) => dispatch(loadContacts(offset, limit))
})

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Pagination)