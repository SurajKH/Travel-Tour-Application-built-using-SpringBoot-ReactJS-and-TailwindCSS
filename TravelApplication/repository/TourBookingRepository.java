package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.TourBookingEntity;

public interface TourBookingRepository extends JpaRepository<TourBookingEntity,Long> {

}
