package com.example.demo.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.TourManagerEntity;
import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.repository.TourManagerRepository;
//import com.example.demo.entity.
@RestController
@RequestMapping("/tourManager")
public class TourManagerController {

	@Autowired
	TourManagerRepository tourManagerRepository;
	
	//creation of GET Endpoints by using @GetMapping Annotations.
	
	@GetMapping("/v1/getDetails")
	List<TourManagerEntity> getTourManager()
	{
		return tourManagerRepository.findAll();
	}
	
	
	//creation of a New TourManager.
	
	@PostMapping("/v1/addTourManager")
	TourManagerEntity addNewTourManager(@RequestBody TourManagerEntity tourManagerEntity)
	{
		tourManagerRepository.save(tourManagerEntity);
		return tourManagerEntity;
	}
	
	//deleting the TourManager.
	
	@DeleteMapping("/v1/{id}/deleteTourManager")
	public List<TourManagerEntity> deletetourManager(@PathVariable("id") Long ID)
	{
		TourManagerEntity tourManager=tourManagerRepository.findById(ID).get();
		//return new HashMap<>();
		tourManagerRepository.delete(tourManager);
		return tourManagerRepository.findAll();
		
	}
}
