package com.example.uniread.services;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.User;
import com.example.uniread.repositories.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public Optional<Book> findBookById(Long id){
        return bookRepository.findById(id);
    }

    public Book createBook(Book book){
        return Book.builder()
                .genre(book.getGenre())
                .title(book.getTitle())
                .coverPhoto(book.getCoverPhoto())
                .author(book.getAuthor())
                .build();
    }

    public List<Book> getBooksByUser(User user){
        return bookRepository.findBooksByAuthor(user);
    }
    public void deleteBookById(Long id){
        bookRepository.deleteById(id);
    }

}
