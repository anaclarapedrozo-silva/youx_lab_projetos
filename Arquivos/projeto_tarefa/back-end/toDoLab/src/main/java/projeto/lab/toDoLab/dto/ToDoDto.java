package projeto.lab.toDoLab.dto;


import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import projeto.lab.toDoLab.model.enums.Status;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
public class ToDoDto {

    private String nome;
    private LocalDate data;
    private String categories;
    @Enumerated(EnumType.STRING)
    private Status status;
}
