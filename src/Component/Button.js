import '../App.css'

export default function Button({buttonText, buttonAction, buttonDisabled, buttonClassName}) {
    return (
        <>
            <button
                value={buttonText}
                disabled={buttonDisabled}
                onClick={buttonAction}
                className={buttonClassName}
            >{buttonText}</button>
        </>
    )
}