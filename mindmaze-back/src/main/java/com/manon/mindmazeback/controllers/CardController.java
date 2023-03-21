package com.manon.mindmazeback.controllers;
import com.manon.mindmazeback.models.Card;
import com.manon.mindmazeback.models.Category;
import com.manon.mindmazeback.repositories.CardRepository;
import com.manon.mindmazeback.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/cards")
public class CardController {
    public class ResourceNotFoundException extends RuntimeException {
        public ResourceNotFoundException(String message) {
            super(message);
        }
    }
    @Autowired
    private CardRepository cardRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @GetMapping
    public List<Card> list(){
        return cardRepository.findAll();
    }
    @GetMapping
    @RequestMapping("{id}")
    public Card get(@PathVariable Long id) {
        return cardRepository.getOne(id);
    }
    @PostMapping
    public Card create(@RequestBody final Card card) {

        Category category = categoryRepository.findByName(card.getCategory().getName())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        card.setCategory(category);

        return cardRepository.saveAndFlush(card);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        cardRepository.deleteById(id);
    }

}

