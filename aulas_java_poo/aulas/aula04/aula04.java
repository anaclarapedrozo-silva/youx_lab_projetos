package aulas.aula04;

import java.util.Locale;

public class aula04 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Caneta c1 = new Caneta("Bic Cristal", "Azul", 0.8);


        c1.status();

    }
}
