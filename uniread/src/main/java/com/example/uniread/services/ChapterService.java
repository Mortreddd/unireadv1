package com.example.uniread.services;

import com.example.uniread.entities.Book;
import com.example.uniread.entities.Chapter;
import com.example.uniread.repositories.ChapterRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ChapterService {

    private final ChapterRepository chapterRepository;

    public List<Chapter> getBookChapters(Book book){
        return chapterRepository.findAllByBook(book);
    }

    public Optional<Chapter> getChapter(Long id){
        return chapterRepository.findById(id);
    }

    public Chapter createChapter(Book book, Chapter chapter){
        return Chapter
                .builder()
                .book(book)
                .title(chapter.getTitle())
                .content(chapter.getContent())
                .chapterNumber(chapter.getChapterNumber())
                .build();
    }
}
