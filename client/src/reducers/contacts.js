const contacts = (state = [], action) => {

   switch (action.type) {
      case 'LOAD_CONTACT_SUCCESS':
         return action.phones.map((item) => {
            item.sent = true;
            item.isEditing = false;
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
         return state.map(item => {
            item.sent = true;
            return item
         })

      case 'POST_CONTACT_FAILURE':
         return state.map((item) => {
            if (item.id === action.id) {
               item.sent = false;
            }
            return item
         })

      case 'ON_UPDATE_CONTACT':
         console.log('id yang mau diedit adalah', action.id);
         return state.map((item) => {
            if (item.id === action.id) {
               item.isEditing = true;
            }
            return item
         })

      case 'OFF_UPDATE_CONTACT':
         return state.map((item) => {
            if (item.id === action.id) {
               item.isEditing = false;
            }
            return item
         })

      case 'UPDATE_CONTACT':
         console.log('ini state setelah di update', state)
         return state.map(item => {
            if (item.id === action.id) {
               item.name = action.name;
               item.phone = action.phone;
            }
            return item
         })

      case 'UPDATE_CONTACT_SUCCESS':
         return state.map(item => {
            item.sent = true;
            return item
         })

      case 'UPDATE_CONTACT_FAILURE':
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