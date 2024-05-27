package com.example.uniread.repositories;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long>, CrudRepository<Book, Long> {
    List<Book> findByTitle(String title);

    List<Book> findBooksByAuthor(User user);



}
