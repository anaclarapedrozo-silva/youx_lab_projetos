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
            System.out.println("Seu nome completo: ");
            sc.nextLine();
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




        sc.close();
    }
}
