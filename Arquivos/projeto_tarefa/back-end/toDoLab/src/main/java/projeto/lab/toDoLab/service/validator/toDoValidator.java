package projeto.lab.toDoLab.service.validator;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import projeto.lab.toDoLab.dto.ToDoDto;
import projeto.lab.toDoLab.model.entity.ToDo;
import projeto.lab.toDoLab.repository.ToDoRepository;

import java.util.List;
import java.util.Objects;

@Component
public class toDoValidator {


    @Autowired
    private ToDoRepository toDoRepository;


//    public boolean existeMesmosToDos(ToDoDto toDoDto){
//
//
//        List<Long> ids = toDoRepository.findAll().stream().map(ToDo::getId).toList();
//        boolean verdade = true;
//        var toDoBuscado = toDoRepository.findByNomeAndCategories(toDoDto.getNome(), toDoDto.getCategories());
//
//        toDoRepository.findAll().forEach(tarefa -> {
//            if(!Objects.equals(toDoBuscado.getId(), tarefa.getId())){
//
//            }
//        });
//        return true;
//    }



}
