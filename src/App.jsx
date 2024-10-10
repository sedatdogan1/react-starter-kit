import "./index.css";
//import Button from "./components/Button";
import Tab from "./components/Tab";
import Post from "./components/Post";
import { useState, useEffect } from "react";

//import styles from './App.module.css'
//import { Title } from "./ComponentsProps.jsx"

function App() {

  const [show, setShow] = useState(false)

  return (
    <>
      <Tab activeTab={0}>
        <Tab.Panel title="Profil">
          <p>
            1- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet, recusandae.
          </p>
        </Tab.Panel>
        <Tab.Panel title="Sosyal">
          <p>
            2- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet, recusandae.
          </p>
        </Tab.Panel>
        <Tab.Panel title="Ayarlar">
          <p>
            3- Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eveniet, recusandae.
          </p>
        </Tab.Panel>
      </Tab>

      <button className="m-3 rounded p-2 bg-gray-100" onClick={() => setShow(show => !show)}>
        { show ? 'Post Gizle' : 'Post Göster' }
      </button>

      {show && <Post/>}

    </>
  );
}

export default App;
