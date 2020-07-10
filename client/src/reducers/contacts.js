const contacts = (state = [], action) => {

   switch (action.type) {
      case 'LOAD_CONTACT_SUCCESS':
         return action.phones.map((item) => {
            item.sent = true;
            return item;
         })

      case 'POST_CONTACT':
         console.log('ini state setelah post contact', state)
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
         console.log('post contact success', action.contact)
         return action.contact.map(item => {
            item.sent = true;
            return item
         })

      case 'POST_CONTACT_FAILURE':
         console.log('gatot')
         return state.map((item) => {
            if (item.id === action.id) {
               item.sent = false;
            }
            return item
         })

      case 'DELETE_CONTACT':
         console.log('button delete contact oke')
         return state.filter((item) => item.id !== action.id)

      case 'DELETE_CONTACT_SUCCESS':
      case 'DELETE_CONTACT_FAILURE':
      case 'LOAD_CONTACT_FAILURE':
      case 'DELETE_CONTACT_FAILURE':
      default:
         return state
   }
}


export default contacts;