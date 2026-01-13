import { useEffect, useState } from "react";
import styles from "./Aviso.module.css";

function Aviso() {
  const [visivel, setVisivel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {visivel && (
        <div>
          <p>Preencha todos o campos.</p>
        </div>
      )}
    </>
  );
}

export default Aviso;
