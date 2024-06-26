import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Services from './Sercvices.jsx';
import Layout from './Dashboard/Layout.jsx';
import Home from './Dashboard/Home.jsx';
import Users from './Dashboard/Users.jsx';
import Messages from './Dashboard/Messages.jsx';
import Setting from './Dashboard/Setting.jsx';



function App() {
  const [openModel, setOpenModel] = useState(false);

  const handlemadal = () => {
    setOpenModel(!openModel);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/dashboard" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="messages" element={<Messages />} />
            <Route path='settings' element={<Setting/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
