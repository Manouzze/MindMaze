package com.manon.mindmazeback.repositories;
import com.manon.mindmazeback.models.Card;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CardRepository extends JpaRepository<Card,Long> {
}