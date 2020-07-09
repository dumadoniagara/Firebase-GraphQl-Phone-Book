const contacts = (state = [], action) => {
   switch (action.type) {
      case 'LOAD_CONTACT_SUCCESS':
         return action.phones.map((item) => {
            item.sent = true;
            return item;
         })

      case 'POST_CONTACT':
         return [
            ...state,
            {
               id: action.id,
               name: action.name,
               phone: action.phone,
               sent: true
            }
         ]

      case 'POST_CONTACT_SUCCESS':
         console.log(action.contact)
         return action.contact.map(item => {
            item.sent = true;
            return item
         })

      case 'POST_CONTACT_FAILURE':
         console.log('gatot')
         return state.map((item)=>{
            if(item.id === action.id){
               item.sent = false;
            }
            return item
         })

      case 'LOAD_CONTACT_FAILURE':
      case 'DELETE_CONTACT_FAILURE':
      default:
         return state
   }
}


export default contacts;