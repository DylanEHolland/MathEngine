export const Button = ({children, className}: {children?: string; className?: string;}) => {
    return (
        <button
            className={`layout__button ${className ? className : ""}`}
        >
            {children}
        </button>
    )
}