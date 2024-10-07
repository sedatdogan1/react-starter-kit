import "./index.css";
//import Button from "./components/Button";
import Tab from "./components/Tab";

//import styles from './App.module.css'
//import { Title } from "./ComponentsProps.jsx"

function App(){
    return(
        <>
            <Tab activeTab={0}>
                <Tab.Panel title="Profil">
                    <p>
                        1- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, recusandae.
                    </p>
                </Tab.Panel>
                <Tab.Panel title="Sosyal">
                    <p>
                        2- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, recusandae.
                    </p>
                </Tab.Panel>
                <Tab.Panel title="Ayarlar">
                    <p>
                        3- Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, recusandae.
                    </p>
                </Tab.Panel>
            </Tab>

        </>
    )
}

export default App