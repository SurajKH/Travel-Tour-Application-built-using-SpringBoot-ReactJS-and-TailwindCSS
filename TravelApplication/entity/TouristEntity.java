package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
@Table(name="tourist_entity_table")
public class TouristEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long TouristID;
	
	//Source Point.
	private String TourSource;
	
	//DDestination Point.
	private String TourDestination;
	
	//Luxury,Deluxe,Super Deluxe
	private String TourPackage;
	
	//Category:Within CountrySide,Abroad.
	private String TourCategory;

	public Long getTouristID() {
		return TouristID;
	}

	public void setTouristID(Long touristID) {
		TouristID = touristID;
	}

	public String getTourSource() {
		return TourSource;
	}

	public void setTourSource(String tourSource) {
		TourSource = tourSource;
	}

	public String getTourPackage() {
		return TourPackage;
	}

	public void setTourPackage(String tourPackage) {
		TourPackage = tourPackage;
	}

	public String getTourCategory() {
		return TourCategory;
	}

	public void setTourCategory(String tourCategory) {
		TourCategory = tourCategory;
	}
}
