import s from "./From.module.css"
const Form = () => {
    return (
        <div className={s.fondo}>
            <label htmlFor="">username:</label>
            <input type="text" name="" id="" />
            <label htmlFor="">password:</label>
            <input type="text" name="" id="" />
            <button>Login</button>
        </div>
    )
}

export default Form;