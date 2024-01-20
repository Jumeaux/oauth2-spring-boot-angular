package com.hassane.leaveservice;

import java.time.LocalDate;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.hassane.leaveservice.domain.Leave;
import com.hassane.leaveservice.domain.LeaveType;
import com.hassane.leaveservice.repository.LeaveRepository;

@SpringBootApplication
public class LeaveServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(LeaveServiceApplication.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(LeaveRepository leaveRepository){
		return args->{

			leaveRepository.save(
			Leave.builder()
			.id(1L)
			.name("Amadou")
			.leaveType(LeaveType.ANNUAL)
			.startDate(LocalDate.of(2024, 1, 22))
			.endDate(LocalDate.of(2024, 1,26 ))
			.dayTaken(5)
			.resumeDate(LocalDate.of(2024, 1, 29)).build()
			);

			leaveRepository.save(
			Leave.builder()
			.id(2L)
			.name("Oumou")
			.leaveType(LeaveType.MATERNITY)
			.startDate(LocalDate.of(2024, 1, 1))
			.endDate(LocalDate.of(2024, 4,26 ))
			.dayTaken(90)
			.resumeDate(LocalDate.of(2024, 4, 29)).build()
			);
		};
	}

}
