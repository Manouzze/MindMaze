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
    @Autowired
    private CardRepository cardRepository;

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
        Category category = CategoryRepository.getOne(card.getCategory().getCategory_id()); // récupération de la Category depuis la base de données
        card.setCategory(category); // association de la Category à la Card
        return cardRepository.saveAndFlush(card);
    }

    @RequestMapping(value = "{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        cardRepository.deleteById(id);
    }

}
