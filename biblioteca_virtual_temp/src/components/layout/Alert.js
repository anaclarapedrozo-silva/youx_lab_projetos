import { Alert } from "@mui/material";

function Alerta({ aviso }) {
  return <Alert severity="error" sx={{
    position: 'absolute',
    top: '0%'
  }}>{aviso}.</Alert>;
}

export default Alerta;
