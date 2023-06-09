import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { faIdBadge,faStar,faBuilding,faFlask } from '@fortawesome/fontawesome-free-regular';

//we need to retrive the details over here.
const DisplayTourManagers=()=>
{
    //Storing Array of Response Retrieved from the backend Application.
    const [tourManager,setTourManagers]=useState([]);

    //loading of Data from the Backend Application.
    const loadData=async()=>
    {
      const responseData=await axios.get('http://localhost:8080/tourManager/v1/getDetails');

      setTourManagers(responseData.data);
      console.log(responseData);
    }

    //Utilization of useEffect Hook.
    useEffect(()=>
    {
       loadData();
    },[]);

    //
    return(
        <React.Fragment>
        
        {/*{
            tourManager.map((tourData)=>(
                <>
                <li>
                    Tour Manager ID: {tourData.tourmanagerid} 
                    </li>

                    <li>
                        Tour Manager Rating:{tourData.tourmanagerating}
                        </li>
                        
                        <li>Tour Manager Company:{tourData.tourmanagercompanyname}</li>
                        <li>Tour Manager Year of Experience {tourData.tourmanageryearofexperience}
                    </li>
                </>
               
            ))
        }*/}

        <div class="grid grid-cols-4 gap-4">
        {
            tourManager.map((tourData)=>(
                <div class='mt-12 w-1/2 mx-auto p-5 max-w-sm rounded overflow-hidden shadow-lg'>
                <h4 style={{textDecoration:"None"}}>
                    Tour Manager ID <FontAwesomeIcon icon={faIdBadge} size='xl' /> {tourData.tourmanagerid} 
                    </h4>

                    <h4>
                        Tour Manager Rating:{tourData.tourmanagerating}

                        <FontAwesomeIcon icon={faStar} />

                        </h4>
                        
                        <h4>Tour Manager Company <FontAwesomeIcon icon={faBuilding} />:{tourData.tourmanagercompanyname}</h4>
                        <h4>Tour Manager Year of Experience {tourData.tourmanageryearofexperience}
                    </h4>
                </div>
               
            ))
        }
          </div>

        </React.Fragment>
    )
};

export default DisplayTourManagers;