package com.hassane.leaveservice.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Leave")
@NoArgsConstructor @AllArgsConstructor @Getter @Setter @Builder
public class Leave {

    @Id
    @GeneratedValue(generator ="sequenceGenerator",strategy = GenerationType.SEQUENCE )
    @SequenceGenerator(name = "sequenceGenerator")
    @Column(name = "id")
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "leave_type")
    @Enumerated(EnumType.STRING)
    private LeaveType leaveType;

    @Column(name ="start_date")
    private LocalDate startDate;

    @Column(name ="endDate_date")
    private LocalDate endDate;

    @Column(name ="resume_date")
    private LocalDate resumeDate;

    @Column(name = "day_taken")
    private int dayTaken;

    

}
