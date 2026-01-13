import styles from './Input.module.css'


function Input ({type, placeholder, onChange, label, value, maxLength}) {
    return (
        <div className={styles.div_container}>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} onChange={onChange} value={value} max={maxLength}/>
        </div>
    )
}

export default Input