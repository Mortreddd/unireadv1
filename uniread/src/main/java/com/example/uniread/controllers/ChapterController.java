package com.example.uniread.controllers;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.Chapter;
import com.example.uniread.services.BookService;
import com.example.uniread.services.ChapterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping(name="/api/v1/books/{bookId}/chapters")
public class ChapterController {


    private final ChapterService  chapterService;
    private final BookService bookService;


    /*
        ** @params Long bookId;
        ** Find the book and get the associated chapters
     */
    @GetMapping("/")
    public ResponseEntity<List<Chapter>> getChaptersByBook(@PathVariable("bookId") Long bookId){
        Optional<Book> book = bookService.findBookById(bookId);

        return book.map(_book ->
                ResponseEntity.ok(
                        chapterService
                                .getBookChapters(_book)
                ))
                .orElseGet(() ->
                        ResponseEntity.
                                noContent()
                                .build()
                );
    }


    /*
     ** @params Long bookId, Long chapterId;
     ** Find the book and get the specified chapter based on chapterId
     ** returns an 204 status code if the none of the conditions are met
     */
    @GetMapping("/{chapterId}")
    public ResponseEntity<Chapter> getChapter(
            @PathVariable("bookId") Long bookId,
            @PathVariable("{chapterId}") Long chapterId
    ){
        Optional<Book> book = bookService.findBookById(bookId);

        return book.map(_book ->
                chapterService
                        .getChapter(chapterId)
                        .map(ResponseEntity::ok)
                        .orElseGet(() -> ResponseEntity.noContent().build()))
                        .orElseGet(() -> ResponseEntity.noContent().build());
    }

    /*
     ** @params Long bookId, Object chapter;
     ** Find the book and get the specified chapter based on chapterId
     ** returns an 204 status code if the book is not found
     */
    @PostMapping("/create")
    public ResponseEntity<Chapter> createBook(
            @PathVariable("bookId") Long bookId,
            @RequestBody Chapter chapter
    ){
            Optional<Book> book = bookService.findBookById(bookId);
            return book.map(_book ->
                    ResponseEntity.ok(
                            chapterService.createChapter(_book, chapter)
                    ))
                    .orElseGet(() -> ResponseEntity.noContent().build());
    }
}
