package aulas.aula05;

public class ContaBanco {
    public int numConta;
    protected String tipo;
    private String dono;
    private double saldo;
    private boolean status;

    public ContaBanco(){
        this.saldo = 0;
        this.status = false;
    }

    public void estadoAtual(){
        System.out.println("-------ESTADO ATUAL-------");
        System.out.println("Conta: " + this.getNumConta());
        System.out.println("Dono: " + this.getDono());
        System.out.println("Tipo: " + this.getTipo());
        System.out.println("Saldo atual: R$" + this.getSaldo());
        System.out.println("Status: " + this.getStatus());
    }

    public boolean getStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public int getNumConta() {
        return numConta;
    }

    public String getTipo() {
        return tipo;
    }

    public String getDono() {
        return dono;
    }

    public void setDono(String dono) {
        this.dono = dono;
    }

    public double getSaldo() {
        return saldo;
    }

    public void setSaldo(double saldo) {
        this.saldo = saldo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public void setNumConta(int numConta) {
        this.numConta = numConta;
    }


    public void abrirConta(String t) {
        this.setTipo(t);
        this.setStatus(true);
        if (t =="Corrente"){
            this.setSaldo(50);
        }else if(t == "Poupança"){
            this.setSaldo(150);
        }
        System.out.println("Conta aberta com sucesso!");
    }

    public void fecharConta() {
        if(this.getSaldo() > 0){
            System.out.println("Conta não pode ser fechada, pois ainda tem dinheiro.");
        }else if(this.getSaldo() < 0){
            System.out.println("Conta não pode ser fechada, pois ainda tem débito.");
        }else{
            this.setStatus(false);
            System.out.println("Conta fechada com sucesso!");
        }
    }

    public void depositar(double valorAd)
    {
        if(this.getStatus()){
            this.setSaldo(this.getSaldo() + valorAd);
            System.out.println("Depósito realizado com sucesso na conta de " + getDono() + "!");
        }else{
            System.out.println("Impossível depositar em uma conta fechada.");
        }

    }

    public void sacar(double valorRetirado) {
        if(this.getStatus()){
            if(this.getSaldo() >= valorRetirado ){
                this.setSaldo(this.getSaldo() - valorRetirado);
                System.out.println("Saque realizado com sucesso na conta de " + getDono() + "!");
            }else{
                System.out.println("Saldo insuficiente.");
            }
        }else{
            System.out.println("Impossível sacar em uma conta fechada.");
        }
    }

    public void pagarMensal() {
        int v = 0;
        if(this.getTipo() == "Corrente"){
            v = 12;
        }else if(this.getTipo() == "Poupança"){
            v = 20;
        }
        if(this.getStatus()){
            this.setSaldo(this.getSaldo() - v);
        }else{
            System.out.println("Impossível pagar uma conta fechada!");
        }
    }


}
