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
@Table(name="tour_manager_table")
public class TourManagerEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long Tourmanagerid;
	
	private String Tourmanagercompanyname;
	
	private Long Tourmanageryearofexperience;
	
	private String Tourmanagerating;

	public Long getTourmanagerid() {
		return Tourmanagerid;
	}

	public void setTourmanagerid(Long tourmanagerid) {
		Tourmanagerid = tourmanagerid;
	}

	public String getTourmanagercompanyname() {
		return Tourmanagercompanyname;
	}

	public void setTourmanagercompanyname(String tourmanagercompanyname) {
		Tourmanagercompanyname = tourmanagercompanyname;
	}

	public Long getTourmanageryearofexperience() {
		return Tourmanageryearofexperience;
	}

	public void setTourmanageryearofexperience(Long tourmanageryearofexperience) {
		Tourmanageryearofexperience = tourmanageryearofexperience;
	}

	public String getTourmanagerating() {
		return Tourmanagerating;
	}

	public void setTourmanagerating(String tourmanagerating) {
		Tourmanagerating = tourmanagerating;
	}
	
}
