import { useContext } from "react";
import { MailContext } from "../Contexts/MailContext";
import MailCard from "../Components/MailCard";

export default function Trash() {
  const { trash } = useContext(MailContext);
  return (
    <div>
      {
        trash.map((data) => (
          <MailCard data={data} isTrash />
        ))
      }
    </div>
  );
}
