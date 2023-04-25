import { useContext } from "react";
import { MailContext } from "../Contexts/MailContext";

export default function Filters() {
  const { state, handleCheckbox } = useContext(MailContext);

  return (
    <fieldset className="filters">
      <legend>Filters</legend>
      <input type="checkbox" checked={state.checkboxes.includes('unread')} name="unread" id="unread" 
      value='unread'
      onChange={(e) => handleCheckbox(e)}
      />
      <label htmlFor="unread">Show unread mails</label>

      <input type="checkbox" checked={state.checkboxes.includes('isStarred')} name="star" id="star" value='isStarred'
      onChange={(e) => handleCheckbox(e)}
      />
      <label htmlFor="star">Show starred mails</label>
    </fieldset>
  );
}
