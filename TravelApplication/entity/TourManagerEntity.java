package com.example.demo.entity;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
@Entity
@Table(name="tourmanager_entity_table")
public class TourManagerEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long TourManagerID;
	
	private String TourManagerCompanyName;
	
	private Long TourManagerYearOfExperience;
	
	private String TourManagerRating;
	

	public Long getTourManagerID() {
		return TourManagerID;
	}

	public void setTourManagerID(Long tourManagerID) {
		TourManagerID = tourManagerID;
	}

	public String getTourManagerCompanyName() {
		return TourManagerCompanyName;
	}

	public void setTourManagerCompanyName(String tourManagerCompanyName) {
		TourManagerCompanyName = tourManagerCompanyName;
	}

	public Long getTourManagerYearOfExperience() {
		return TourManagerYearOfExperience;
	}

	public void setTourManagerYearOfExperience(Long tourManagerYearOfExperience) {
		TourManagerYearOfExperience = tourManagerYearOfExperience;
	}

	public String getTourManagerRating() {
		return TourManagerRating;
	}

	public void setTourManagerRating(String tourManagerRating) {
		TourManagerRating = tourManagerRating;
	}
	
}
