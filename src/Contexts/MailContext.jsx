import { createContext, useEffect, useReducer, useState } from "react";
import { mailsData } from "../Data/mail";
import mailReducer from "./mailReducer";
import { ADD_TO_SPAM, ADD_TO_TRASH, SHOW_STARRED, SHOW_UNREAD, TOGGLE_READ, TOGGLE_STARRED, REMOVE_FROM_SPAM, ADD_TO_CHECKBOXES, REMOVE_FROM_CHECKBOXES } from "./Types";

export const MailContext = createContext();

export default function MailProvider({ children }) {

  const initialState = {
    allMails: mailsData,
    trash: [],
    spam: [],
    showUnread: false,
    showStarred: false,
    checkboxes: []
  };

  const [state, dispatch] = useReducer(mailReducer, initialState);

  const handleAddMailToTrash = (mail) => {
    dispatch({
      type: ADD_TO_TRASH,
      payload: mail
    })
  }
  
  const handleAddMailToSpam = (mail) => {
    dispatch({
      type: ADD_TO_SPAM,
      payload: mail
    })
  }

  const handleRemoveFromSpam = (mail) => {
    dispatch({
      type: REMOVE_FROM_SPAM,
      payload: mail
    })
  }

  const handleToggleRead = (id) => {
    dispatch({
      type: TOGGLE_READ,
      payload: id
    })
  }

  const handleToggleStarred = (id) => {
    dispatch({
      type: TOGGLE_STARRED,
      payload: id
    })
  }

  const handleShowUnread = (e) => {
    dispatch({
      type: SHOW_UNREAD,
      payload: e.target.checked
    })
  }

  const handleShowStarred = (e) => {
    dispatch({
      type: SHOW_STARRED,
      payload: e.target.checked
    })
  }


  const handleCheckbox = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if(isChecked) {
      dispatch({
        type: ADD_TO_CHECKBOXES,
        payload: value
      })
    } else {
      dispatch({
        type: REMOVE_FROM_CHECKBOXES,
        payload: value
      })
    }
  }

  const filteredData = state.allMails.filter((mail) => {
    return state.checkboxes.every(checkbox => mail[checkbox]);
  }); 
  console.log(filteredData);

  return (
    <MailContext.Provider
      value={{
        allMails: state.allMails,
        trash: state.trash,
        spam: state.spam,
        showUnread: state.showUnread,
        showStarred: state.showStarred,
        filteredData,
        state,
        handleCheckbox,
        handleAddMailToTrash,
        handleAddMailToSpam,
        handleToggleRead,
        handleToggleStarred,
        handleShowUnread,
        handleShowStarred,
        handleRemoveFromSpam
      }}
    >
      {children}
    </MailContext.Provider>
  );
}
