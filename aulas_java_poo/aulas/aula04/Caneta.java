package aulas.aula04;

public class Caneta {
    private String modelo;
    private double ponta;
    private boolean tampada;
    private String cor;

    public Caneta(String m, String c, double p){
        this.tampar();
        this.cor = c;
        this.modelo = m;
        this.ponta = p;
    }


    public String getModelo(){
        return this.modelo;
    }

    public double getPonta(){
        return this.ponta;
    }

    public void setModelo(String modelo){
        this.modelo = modelo;
    }

    public void setPonta(double ponta){
        this.ponta = ponta;
    }

    public void tampar (){
        tampada = true;
    }

    public void destampar(){
        tampada = false;
    }

    public void status(){
        System.out.println("INFORMAÇÕES DA CANETA: ");
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Ponta: " + this.ponta);
        System.out.println("Cor: " + this.cor);
        System.out.println("Está tampada? " + this.tampada);
    }

    
}
