package aulas.aula02;

import java.util.Locale;

public class aula02 {
    public static void main(String[] args) {

        Locale.setDefault(Locale.US);

        Caneta caneta1 = new Caneta();
        caneta1.cor = "azul";
        caneta1.ponta = 0.5;
        caneta1.tampada = false;
        caneta1.status();
        caneta1.rabiscar();

        Caneta caneta2 = new Caneta();
        caneta2.modelo = "Hostnet";
        caneta2.cor = "Preta";
        caneta2.destampar();
        caneta2.status();
        caneta2.rabiscar();
    }
}