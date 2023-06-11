package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TourBookingEntity;
import com.example.demo.entity.TourBookingTestingEntity;
import com.example.demo.repository.TourBookingRepository;

@RestController
@RequestMapping("/newtourBooking")
public class TourBookingController {

	@Autowired
	TourBookingRepository tourbookingrepository;
	
	
	@GetMapping("/v1/getourBooking")
	List<TourBookingEntity> getAllTourBookingDetails()
	{
		return tourbookingrepository.findAll();
	}
	
	@PostMapping("/v1/addNewTourBooking")
	TourBookingEntity addNewTour(@RequestBody TourBookingEntity  tourBookingEntity)
	{
		tourbookingrepository.save(tourBookingEntity);	
		return tourBookingEntity;
	}
}
