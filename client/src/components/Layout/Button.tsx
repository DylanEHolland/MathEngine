export const Button = ({children, className, onClick}: {children?: string; className?: string; onClick?: any;}) => {
    return (
        <button
            className={`layout__button ${className ? className : ""}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}