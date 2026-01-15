package aulas.aula05;

import java.util.Locale;
import java.util.Scanner;

public class aula05 {
    public static void main(String[] args) {
        Locale.setDefault(Locale.US);
        Scanner sc = new Scanner(System.in);
        ContaBanco contaBanco = new ContaBanco();

        System.out.println("Olá, seja bem vindo(a)!");
        System.out.println("");
        System.out.println("Escolha o que deseja fazer: ");
        System.out.println("(a) Abrir conta");
        System.out.println("(b) Fechar conta");
        System.out.print("O que escolhe? ");
        String escolha = sc.nextLine();

        if(escolha.equals("a")){
            String e = "";
            System.out.print("Seu nome completo: ");
            String nome = sc.nextLine();
            contaBanco.setDono(nome);
            contaBanco.setNumConta(123);
            System.out.println("Que tipo sua conta será? ");
            System.out.println("(a) Corrente");
            System.out.println("(b) Poupança");
            System.out.print("Digite sua escolha: ");
            String escolha2 = sc.next();

            if(escolha2.equals("a")){
                e = "Corrente";
            }else if(escolha2.equals("b")){
                e = "Poupança";
            }

            contaBanco.abrirConta(e);
        }else if (escolha.equals("b")){
            contaBanco.fecharConta();
        }else{
            System.out.println("Opção inválida!");
        }

        contaBanco.estadoAtual();

        System.out.println("Que ação deseja executar? ");
        System.out.println("(a) Sacar");
        System.out.println("(b) Depositar");
        System.out.println("(c) Nenhuma das alternativas");
        System.out.print("Digite sua escolha: ");
        String escolha3 = sc.next();

        if (escolha3.equals("a")){
            System.out.print("Quanto deseja sacar? R$");
            double saque = sc.nextDouble();
            contaBanco.sacar(saque);
        }else if(escolha3.equals("b")){
            System.out.println("Quanto deseja depositar? R$");
            double deposito = sc.nextDouble();
            contaBanco.depositar(deposito);
        }else if(escolha3.equals("c")){
            System.out.println("Ok, saindo..");
        }else{
            System.out.println("Opção inválida!");
        }




        sc.close();
    }
}
