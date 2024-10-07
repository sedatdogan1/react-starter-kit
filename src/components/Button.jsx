import classNames from "classnames";

function Button({ children, variant = "default"}){
    console.log(children)
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center bg-gray-100 rounded": true,
            "bg-blue-500 text-white": variant === "primary"
        })}>
            {children}
        </button>
    )
}

export default Button