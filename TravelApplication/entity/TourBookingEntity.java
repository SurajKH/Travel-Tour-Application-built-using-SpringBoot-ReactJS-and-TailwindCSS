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

	//lets consider a tour booking Entity.
	//TourBookingID
	//tourManager
	//PackageType
	//Number of Days
	
	//Discount based on Total.
	//Payment Details--->we need to generate it and store it in the file..
	
	//then we can generate a summary and store it in the text file.
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long tourbookingid;
	
    private String packagetype;

	private String tourmentorating;
    
    private String tourmentoryoe;
    
    
    
    //private Long TourManagerReferenceID;
    
    //concept of Aggregation.
//    @OneToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="TourManagerReferenceID",referencedColumnName="Tourmanagerid")
//    private TourManagerEntity tourmanager;
    
    
    //lets consider the tourmanager being grouped with the concept of 
    //tourmanager YOE and Ratings.
	

//	public TourManagerEntity getTourmanager() {
//		return tourmanager;
//	}
//
//	public void setTourmanager(TourManagerEntity tourmanager)
//	{
//	 
//		this.tourmanager = tourmanager;
//     }

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
