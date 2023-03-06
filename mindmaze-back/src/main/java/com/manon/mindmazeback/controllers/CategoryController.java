package com.manon.mindmazeback.controllers;

import com.manon.mindmazeback.models.Category;
import com.manon.mindmazeback.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import org.springframework.http.HttpStatus;

import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private CategoryRepository categoryRepository;
    @GetMapping
    public List<Category> list(){
        return categoryRepository.findAll();
    }
    @GetMapping
    @RequestMapping("{id}")
    public Category get(@PathVariable Long id){
        return categoryRepository.getOne(id);
    }
    @PostMapping
    public Category create(@RequestBody final Category category){
        return categoryRepository.saveAndFlush(category);
    }
    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        categoryRepository.deleteById(id);
    }
}
