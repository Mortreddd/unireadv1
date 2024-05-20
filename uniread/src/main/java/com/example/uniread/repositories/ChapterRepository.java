package com.example.uniread.repositories;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.Chapter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChapterRepository extends CrudRepository<Chapter, Long>, JpaRepository<Chapter, Long> {

    List<Chapter> findAllByBook(Book book);

    Chapter findByBook(Book book);
}
