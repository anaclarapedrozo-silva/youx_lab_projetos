import styles from "./Select.module.css";

function Select({ lista, onChange, className, texto, value }) {
  return (
    <>
      <div className={styles.container_select}>
        <form>
          <select onChange={onChange} className={className} value={value}>
            <option value="" disabled selected hidden>{texto}</option>
            {lista.map((cat, i) => (
              <option key={i}> {cat.name} </option>
            ))}
          </select>
        </form>
      </div>
    </>
  );
}

export default Select;
