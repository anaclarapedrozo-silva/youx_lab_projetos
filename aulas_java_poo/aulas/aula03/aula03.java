package aulas.aula03;

import java.util.Locale;

public class aula03 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);

        Caneta c1 = new Caneta();
        c1.modelo = "BIC Cristal";
        c1.cor = "Preta";
        //c1.ponta = 0.5;
        c1.carga = 80;
        c1.tampada = true;
        c1.status();
    }
}
