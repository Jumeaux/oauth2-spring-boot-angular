package com.hassane.leaveservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hassane.leaveservice.domain.Leave;

@Repository
public interface LeaveRepository extends JpaRepository<Leave,Long> {
    
}
