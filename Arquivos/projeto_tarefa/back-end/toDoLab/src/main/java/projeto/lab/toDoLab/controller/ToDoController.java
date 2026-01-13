package projeto.lab.toDoLab.controller;


import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import projeto.lab.toDoLab.dto.ToDoDtoRecord;
import projeto.lab.toDoLab.dto.ToDoRequestDto;
import projeto.lab.toDoLab.model.entity.ToDo;
import projeto.lab.toDoLab.repository.CategoriaRepository;
import projeto.lab.toDoLab.repository.ToDoRepository;
import projeto.lab.toDoLab.service.ToDoService;

import java.util.List;

@RestController
@RequestMapping("/tarefa")
@CrossOrigin(origins = "*")
public class ToDoController {


    @Autowired
    private ToDoService toDoService;

    @Autowired
    private ToDoRepository toDoRepository;


    @Autowired
    private CategoriaRepository categoriaRepository;


    @PostMapping("/salvar")
    public ResponseEntity<?> criarTarefa(@RequestBody @Valid ToDoDtoRecord toDoDto){

        try{
            toDoService.salvar(toDoDto);
            return ResponseEntity.ok(toDoDto);

        }catch (IllegalArgumentException exception){
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }



    @PatchMapping("/{id}")
    public void editar(@PathVariable("id") Long id, @RequestBody ToDoRequestDto toDoDto){
        toDoService.editarTarefa(id, toDoDto);

    }


    @GetMapping
    public List<ToDo> returnAllToDos(){
        return toDoService.retornarTodDosComId();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletar(@PathVariable("id") Long id){

        try{
            toDoService.deletar(id);
            return ResponseEntity.ok("Tarefa deletada");

        }catch (IllegalArgumentException exception){
            return ResponseEntity.badRequest().body(exception.getMessage());
        }
    }


    @GetMapping("/concluir/{id}")
    public ResponseEntity<?> marcarComoConcluido(@PathVariable ("id") Long id){

        try{
            toDoService.marcarComoConcluido(id);
            return ResponseEntity.ok("Tarefa concluida");
        }catch (IllegalArgumentException exception){
            return ResponseEntity.unprocessableEntity().body(exception.getMessage());
        }

    }







}
