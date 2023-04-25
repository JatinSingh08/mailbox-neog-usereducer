import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { MailContext } from '../Contexts/MailContext';
import MailCard from './MailCard';

const SingleMail = () => {
  const {id} = useParams();
  const { filteredData } = useContext(MailContext);

  const mail = filteredData.find(({mId}) => mId.toString() === id.toString());
  return (
    <div>
      <MailCard data={mail} />
    </div>
  )
}

export default SingleMail
