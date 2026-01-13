
import * as React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import styles from './estrelas.module.css'

const labels = ["Péssimo", "Ruim", "Regular", "Bom", "Satisfeito"];

export default function Estrelas(){
  const [value, setValue] = React.useState(null);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
      }}
    >
      {labels.map((label, index) => {
        const starValue = index + 1;
        return (
          <Box
            key={starValue}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => setValue(starValue)}
          >
            <StarIcon
              sx={{
                fontSize: "55px",
                color: value >= starValue ? "#8E58BF" : "#bebcbcff",
                transition: "color 0.2s",
              }}
            />
            <span className={styles.labeis}>{label}</span>
          </Box>
        );
      })}
    </Box>
  );
}
