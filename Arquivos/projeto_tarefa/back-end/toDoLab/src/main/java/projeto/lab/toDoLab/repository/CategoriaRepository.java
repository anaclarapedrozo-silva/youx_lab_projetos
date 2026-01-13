package projeto.lab.toDoLab.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import projeto.lab.toDoLab.model.entity.Categories;

import java.util.Optional;

@Repository
public interface CategoriaRepository extends JpaRepository<Categories, Long> {

    Optional<Categories> findByName(String name);

}
