package projeto.lab.toDoLab.dto;

import java.time.LocalDate;

public record ToDoRequestDto(String nome, LocalDate data, String categories) {
}
