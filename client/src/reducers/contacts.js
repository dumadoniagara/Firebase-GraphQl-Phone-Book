const contacts = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_CONTACT_SUCCESS':
         return action.phones.map((item) => {
            item.sent = true;
            return item;
         })
      case 'LOAD_CONTACT_FAILURE':
      case 'DELETE_CONTACT_FAILURE':
      default:
         return state
   }
}


export default contacts;