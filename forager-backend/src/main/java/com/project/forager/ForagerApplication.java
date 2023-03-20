package com.project.forager;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.project.forager.entity.User;
import com.project.forager.repository.UserRepository;

@SpringBootApplication
public class ForagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ForagerApplication.class, args);
	}

	@Bean
	CommandLineRunner init(UserRepository userRepository) {
		return args -> {
			userRepository.findAll().forEach(System.out::println);
		};
	}

}
