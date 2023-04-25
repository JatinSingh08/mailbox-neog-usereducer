import { Route, Routes } from 'react-router-dom';
import './App.css';
import Inbox from './Pages/Inbox';
import Trash from './Pages/Trash';
import Spam from './Pages/Spam';
import Sidebar from './Components/Sidebar';
import Filters from './Components/Filters';
import SingleMail from './Components/SingleMail';

function App() {
  return (
    <>
    <h1 className='navbar'>✉️ Mailbox</h1>
    <div className="layout">
      <Sidebar />
      <div className="container">
        {/* <Filters /> */}
        <Routes>
          <Route path="/" element={<Inbox />} />
          <Route path="/trash" element={<Trash />} />
          <Route path="/spam" element={<Spam />} />
          <Route path="/:id" element={<SingleMail />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
