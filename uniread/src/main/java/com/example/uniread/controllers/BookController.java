package com.example.uniread.controllers;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.Chapter;
import com.example.uniread.services.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/api/v1/books", method = { RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE })
public class BookController {

    private BookService bookService;
    @GetMapping("/")
    public ResponseEntity<List<Book>> getBooks(){
        List<Book> books = bookService.getAllBooks();
        return ResponseEntity.ok(books);
    }
    @GetMapping("/{bookId}")
    public ResponseEntity<?> getBook(@PathVariable Long bookId){
        Optional<Book> book = bookService.findBookById(bookId);
        if(book.isPresent()){
            return ResponseEntity.ok(book);
        }
        return ResponseEntity.noContent().build();
    }
    @PostMapping("/create")
    public ResponseEntity<Book> createBook(@RequestBody Book book){
        return ResponseEntity.ok(bookService.createBook(book));
    }

    @DeleteMapping("/delete/{bookId}")
    public ResponseEntity<Optional<Book>> deleteBook(@PathVariable Long bookId){
        Optional<Book> book = bookService.findBookById(bookId);
        if(book.isPresent()){
            bookService.deleteBookById(bookId);
            return ResponseEntity.ok(book);
        }

        return ResponseEntity.noContent().build();
    }


}
