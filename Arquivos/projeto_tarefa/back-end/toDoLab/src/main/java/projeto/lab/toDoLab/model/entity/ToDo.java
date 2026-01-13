package projeto.lab.toDoLab.model.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import projeto.lab.toDoLab.model.enums.Status;

import java.time.LocalDate;


@Getter
@Setter
@Entity
@Table(name = "todo_lab_table")
@NoArgsConstructor
public class ToDo {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long Id;

    @Column(name = "nome")
    private String nome;

    @Column(name = "data_entrega")
    private LocalDate data;


    @ManyToOne
    @JoinColumn(name = "id_categories")
    private Categories categories;


    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private Status status;
}
