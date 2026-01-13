import { TextField } from "@mui/material";
import styles from "./Input.module.css";

function Inputs({ textAnt, textDep, label, onChange, type, conteudo }) {
  return (
    <div className={styles.div_input}>
      <label className={styles.div_label}>{textAnt}</label>
      <TextField
        id="outlined-basic"
        type={type}
        variant="outlined"
        label={label}
        onChange={onChange}
        sx={{
          width: "400px",
          color: "#FAF7F3",
        }}
      >{conteudo}</TextField>
      <label className={styles.div_label}>{textDep}</label>
    </div>
  );
}

export default Inputs;
