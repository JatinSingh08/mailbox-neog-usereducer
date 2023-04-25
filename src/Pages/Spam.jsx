import { useContext } from "react";
import { MailContext } from "../Contexts/MailContext";
import MailCard from "../Components/MailCard";

export default function Spam() {
  const { spam } = useContext(MailContext);
  return (
    <div>
      {
        spam.map((data,index) => (
          <MailCard data={data} isSpam/>
        ))
      }
    </div>
  );
}
