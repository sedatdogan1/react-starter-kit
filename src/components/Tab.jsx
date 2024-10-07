//import Button from "./Button";

import {useState} from "react";

function Tab({ children, activeTab }){
    const [active, setActive] = useState(activeTab)

    return (
        <>
            <nav className="flex gap-2 m-2">
                {children.map((tab, index) =>
                    <button
                        onClick={() => setActive(index)}
                        key={index }
                        className={active === index ? 'bg-blue-500 px-4 py-3 rounded text-white' : 'bg-gray-100 px-4 py-3 rounded'}
                    >
                        {tab.props.title}
                    </button>
                )}
            </nav>
            <div>
                {children[active]}
            </div>
        </>
    )
}

Tab.Panel = function ({children, title}) {
    return (
        <div className="rounded mt-3 p-4 bg-gray-100 w-full max-w-[1200px] ml-2">
            {children}
        </div>
    )
}

export default Tab