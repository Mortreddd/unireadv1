package com.example.uniread.services;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.Gender;
import com.example.uniread.entities.Genre;
import com.example.uniread.entities.User;
import com.example.uniread.repositories.BookRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;

import java.util.List;

@DataJpaTest
@Import(BookService.class)
public class BookServiceTest {

    @Autowired
    private BookRepository bookRepository;

    @Autowired
    private BookService bookService;
    private UserService userService;

    @Test
    public void canTest(){
        Assertions.assertThat(true).isTrue();
    }
    @Test
    public void canCreateBookTest() {
        Genre genre = Genre.builder()
                .id(2)
                .name("Fiction")
                .build();

        User user = User.builder()
                .id(1L)
                .superUser(false)
                .image(null)
                .firstName("Ronaldo")
                .lastName("Procario")
                .username("Killer341")
                .bio(null)
                .email("example@dummy.com")
                .password("12345678")
                .gender(Gender.M)
                .build();

        userService.registerUser(user, "USER");

        Book book = Book.builder()
                .id(2L)
                .title("Harry Potter")
                .description("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
                .genre(genre)
                .author(user)
                .coverPhoto(null)
                .build();

        bookService.createBook(book);

        List<Book> authorBooks = bookService.getBooksByUser(user);

        Assertions.assertThat(authorBooks).isInstanceOf(List.class);
        Assertions.assertThat(authorBooks).contains(book);
    }
}
