import Button from "./components/Button.jsx";

function Past(){
    const searchFunction = () => {
        alert("çalıştı")
    }

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const name = "Sedat";

    return (
        <>

            <div className="flex items-center w-auto m-3 gap-2">
                <label htmlFor="test">Arama</label>
                <input type="text" id="test" className="border border-2 border-zinc-400 rounded px-3 focus:border-blue-500"/>
            </div>

            {numbers.map((number, index) => (
                <li key={index} className="ml-3">
                    {number}
                </li>
            ))}

            <div>
                <button style={{color: "red", backgroundColor: "white"}} onClick={searchFunction}>
                    test style
                </button>
            </div>

            <div>
                {`${name} doğan`}
            </div>

            <button onClick={() => {
                alert("inline")
            }}
                    className="px-4 py-4 rounded my-3 mx-2 underline bg-zinc-200 text-dark transition hover:bg-zinc-500 !text-white">
                Gönder
            </button>

            <Button variant="default">
                Children örneği
            </Button>
            <Button variant="primary">
                Children örneği primary
            </Button>

        </>
    )
}

export default Past