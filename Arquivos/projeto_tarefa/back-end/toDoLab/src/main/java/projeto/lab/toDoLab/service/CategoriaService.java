package projeto.lab.toDoLab.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projeto.lab.toDoLab.dto.CategoriaDto;
import projeto.lab.toDoLab.model.entity.Categories;
import projeto.lab.toDoLab.repository.CategoriaRepository;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepository categoriaRepository;

    public void salvarCatetegoria(CategoriaDto categoriaDto){


        List<String> nomesCategoria = categoriaRepository.findAll().stream().map(Categories::getName).toList();
        if (nomesCategoria.contains(categoriaDto.getName())) throw new IllegalArgumentException("Categoria ja existe");


        Categories categoria = new Categories();
        categoria.setName(categoriaDto.getName());

        categoriaRepository.save(categoria);


    }






}
