package com.example.demo.entity;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="tour_booking_table")
public class TourBookingEntity {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long tourbookingid;
	
    private String packagetype;

    private String tourmentorating;
    
    private String tourmentoryoe;
    
 
	public Long getTourbookingid() {
		return tourbookingid;
	}

	public void setTourbookingid(Long tourbookingid) {
		this.tourbookingid = tourbookingid;
	}

	public String getPackagetype() {
		return packagetype;
	}

	public void setPackagetype(String packagetype) {
		this.packagetype = packagetype;
	}

	
	public String getTourmentorating() {
		return tourmentorating;
	}

	public void setTourmentorating(String tourmentorating) {
		this.tourmentorating = tourmentorating;
	}

	public String getTourmentoryoe() {
		return tourmentoryoe;
	}

	public void setTourmentoryoe(String tourmentoryoe) {
		this.tourmentoryoe = tourmentoryoe;
	}
 
	
}
