import { useContext } from "react";
import { MailContext } from "../Contexts/MailContext";
import MailCard from "../Components/MailCard";
import Filters from "../Components/Filters";

export default function Inbox() {
  const { filteredData } = useContext(MailContext);

  return (
    <>
      <div>
        <Filters />
        {filteredData.map((data, index) => (
          <MailCard data={data} />
        ))}
      </div>
    </>
  );
}
