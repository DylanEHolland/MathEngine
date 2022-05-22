import "../styles/app_wrapper.scss"

export const Application = ({children}: {children: any}) => {
    return (
        <div className="app__wrapper">
            {children}
        </div>
    )
}