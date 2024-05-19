package com.example.uniread;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/*
** This application is inspired from wattpad, where supports writing books, creating own books, messaging,
** follow functionality, etc. So what is the difference, the difference is that this applicant will support collaboration
** owner can collaborate with other authors/users. the owner of the story will only have authorized to create, remove,
** collaborators along with the book. Only I can't implement all the features :<.
** I'm just sticking to By Layer Folder Structure
**
*
** I'm hoping for collaborators for the future of this project
* -- from the person who got heath break at May 18, 2024, LMAO;
*
** Increment the collaborators :>
** - Name
*/
@SpringBootApplication
public class UnireadApplication {
	public static void main(String[] args) {
		SpringApplication.run(UnireadApplication.class, args);
	}
}
