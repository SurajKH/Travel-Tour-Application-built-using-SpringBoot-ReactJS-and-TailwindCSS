import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
//Tour Booking Component.
const TourBooking = () => {

    //Book a Tour(Selection Categories:All available tour managers,package discount,Stay facilities etc.) 
    const [newBookTour,setnewBookTour]=useState({
        
        PackageDiscount:"",
        PackageType:"",
        taskPriority:""
    });

  return (
    <React.Fragment>
      <p class='text-3xl mt-12'>Book a Tour <FontAwesomeIcon icon={faSuitcase} size="1xl" /></p>
 <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <h4 className='items-center text-center text-lg'>Add a New Task  
        <span class='mr-5'></span>
        
        </h4>
    <form >
    <br/>

    

<label class='text-lg'>Task Name 
</label>
<br/>

<input 
type="text" 
className="h-10 w-96 border mt-2 px-2 py-2"
name="taskName"
value={newTask.taskName}
onChange={(e)=>
{
  e.preventDefault();
  const value=e.target.value;
  setnewTask({
    ...newTask,
    [e.target.name]:value
  });
  console.log("Task Name: ",value)
}}
placeholder="Enter the Task Name" >

</input>
</form>
</div>
</div>
    </React.Fragment>
  )
}

export default TourBooking;
/*
*/