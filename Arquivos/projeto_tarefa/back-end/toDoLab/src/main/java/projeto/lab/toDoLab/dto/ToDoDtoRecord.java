package projeto.lab.toDoLab.dto;

import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;

public record ToDoDtoRecord (@NotNull String nome, @NotNull @Future LocalDate data, @NotNull String categories) {


}
