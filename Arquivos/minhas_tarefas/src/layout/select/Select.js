import styles from "./Select.module.css";

function Select({ lista, onChange, className }) {
  return (
    <>
      <div className={styles.container_select}>
        <form>
          <select onChange={onChange} className={className}>
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
