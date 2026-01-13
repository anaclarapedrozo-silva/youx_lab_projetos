package aulas.aula03;

public class Caneta {
    public String modelo;
    public String cor;
    private double ponta;
    protected int carga;
    protected boolean tampada;

    public void status(){
        System.out.println("Modelo: " + this.modelo);
        System.out.println("Cor: " + this.cor );
        System.out.println("Está tampada? " + this.tampada);
        System.out.println("Carga: " + this.carga);
        System.out.println("Ponta: " + this.ponta);
    }

    public void escrever(){
    }


   public void rabiscar(){
        if(this.tampada){
            System.out.println("Erro ao rabiscar");
        }else{
            System.out.println("Rabiscado");
        }
    }

    protected void tampar(){
        this.tampada = true;
    }

    protected void destampar(){
        this.tampada = false;
    }
}

