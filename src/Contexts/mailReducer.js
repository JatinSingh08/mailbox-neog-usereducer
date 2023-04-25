import { ADD_TO_CHECKBOXES, ADD_TO_SPAM, ADD_TO_TRASH, REMOVE_FROM_CHECKBOXES, REMOVE_FROM_SPAM, SHOW_STARRED, SHOW_UNREAD, TOGGLE_READ, TOGGLE_STARRED } from "./Types";




export default function mailReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CHECKBOXES: 
     return {
      ...state,
      checkboxes: [...state.checkboxes, action.payload]
     }
    case REMOVE_FROM_CHECKBOXES: 
     return {
      ...state,
      checkboxes: state.checkboxes.filter((checkbox) => checkbox !==  action.payload)
     }
    case ADD_TO_SPAM:
      return {
        ...state,
        spam: [...state.spam, action.payload],
        allMails: state.allMails.filter(({mId}) => mId !== action.payload.mId)
        }
    case REMOVE_FROM_SPAM:
      return {
        ...state,
        spam: state.spam.filter((mail) => mail.mId !== action.payload.mId),
        allMails: [...state.allMails, action.payload]
      }
    case ADD_TO_TRASH: 
        return {
          ...state,
          trash: [...state.trash, action.payload],
          allMails: state.allMails.filter(({mId}) => mId !== action.payload.mId)
        }
    case TOGGLE_READ: 
        return {
          ...state,
          allMails: state.allMails.map(mail => 
            mail.mId === action.payload ? {...mail, unread: !mail.unread} :mail  
          ),
        }
    case TOGGLE_STARRED: 
        return {
          ...state,
          allMails: state.allMails.map(mail => 
              mail.mId === action.payload ? {...mail, isStarred: !mail.isStarred} : mail
          )
        }
    case SHOW_UNREAD: 
        return {
          ...state, 
          showUnread: action.payload
        }
    case SHOW_STARRED: 
        return {
          ...state,
          showStarred: action.payload
        }
    default:
      return state;
    }
}

