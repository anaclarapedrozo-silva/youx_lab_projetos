package projeto.lab.toDoLab.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import projeto.lab.toDoLab.dto.ToDoDto;
import projeto.lab.toDoLab.model.entity.ToDo;


@Repository
public interface ToDoRepository extends JpaRepository<ToDo, Long> {


    ToDo findByNome(String nome);

    @Query("delete from ToDo t where t.nome = ?1")
    void deleteByNome(@Param("nome") String nome);


}
