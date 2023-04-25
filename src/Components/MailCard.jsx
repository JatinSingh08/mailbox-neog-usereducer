import { useContext } from "react";
import { Link } from "react-router-dom";
import { MailContext } from "../Contexts/MailContext";
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'
import {MdMarkEmailUnread} from 'react-icons/md'
export default function MailCard({ data, isSpam, isTrash }) {
  const { 
    handleAddMailToTrash, 
    handleAddMailToSpam, 
    handleToggleRead,
    handleToggleStarred, 
    handleRemoveFromSpam 
  } = useContext(MailContext);


  return (
    <section className="mailcard">
      <header className="mail__header">
        <h3>Subject: {data?.subject}</h3>
        <div className="mail__header_btn">
          <div>
            {data?.unread && 
            <MdMarkEmailUnread 
            onClick={() => handleToggleRead(data.mId)}
            fontSize={'20px'} style={{marginRight: '10px' }}/> }
          </div>
          <div
          onClick={() => handleToggleStarred(data.mId)}
          >{data.isStarred ? <AiFillStar fontSize={'20px'} /> : <AiOutlineStar fontSize={'20px'} />}</div>
        </div>
      </header>
      <main className="mail__content">
        <p>{data?.content}</p>
      </main>
      <footer className="mail__footer">
        <Link to={`/${data.mId}`} className="viewDetails_btn">View Details</Link>

        <div className="mail__footer-right">
          <button
          onClick={() => handleAddMailToTrash(data)}
          >Delete</button>
          <button
          onClick={() => handleToggleRead(data.mId)}
          >Mark as {data.unread ? 'read' : 'unread'}</button>
          {
            !isTrash &&
            <button
            onClick={() => isSpam ? handleRemoveFromSpam(data) : handleAddMailToSpam(data)}
            >{isSpam ? 'Remove from spam' : 'Report spam'}</button>
          }
          </div>
      </footer>
    </section>
  );
}
