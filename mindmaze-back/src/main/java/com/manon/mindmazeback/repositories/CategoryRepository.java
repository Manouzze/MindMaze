package com.manon.mindmazeback.repositories;
import com.manon.mindmazeback.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
