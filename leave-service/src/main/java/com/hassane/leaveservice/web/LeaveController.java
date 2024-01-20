package com.hassane.leaveservice.web;

import org.springframework.web.bind.annotation.RestController;

import com.hassane.leaveservice.domain.Leave;
import com.hassane.leaveservice.repository.LeaveRepository;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class LeaveController {

    private LeaveRepository leaveRepository;

    LeaveController(LeaveRepository leaveRepository ) {
        this.leaveRepository = leaveRepository;
    }

    @GetMapping("/leaves")
    public List<Leave> getAllLeaves() {
        return leaveRepository.findAll();
    }

}
