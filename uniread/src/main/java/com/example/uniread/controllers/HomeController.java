package com.example.uniread.controllers;

import com.example.uniread.entities.Book;
import com.example.uniread.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(path="/api/v1", method={RequestMethod.GET, RequestMethod.POST})
public class HomeController {

    private final BookService bookService;
    @GetMapping("/")
    public ResponseEntity<Collection<Book>> getHomeData(){
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok().body(books);
    }
}
