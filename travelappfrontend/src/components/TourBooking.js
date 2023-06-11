import React,{useState,useFor} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';
import Summary from './Summary';
import PrintFile from './PrintFile';
import axios from 'axios';
import Discount from './Discount';
//Tour Booking Component.
const TourBooking = () => {

  /*
  const [newTask,setnewTask]=useState({
    taskName:"",
    taskCategory:"",
    taskDate:"",
    taskPriority:""
});
//now lets define the onSubmit Functionality.

const onSubmit=(event)=>
{
   event.preventDefault();
  
   console.log("Data Submitted successfully");
  return axios.post("http://localhost:8080/v1/addNewTask",newTask);
}

  */
  // const [addnewtour,setAddNewTour]=useState([
  //     {
  //       packagetype:"",
  //       tourmentorating:"",
  //       tourmentoryoe:""
  //   }
  // ]);

  

    //Book a Tour(Selection Categories:All available tour managers,package discount,Stay facilities etc.) 
    const [newBookTour,setnewBookTour]=useState({
              packagetype:"",
              tourmentorating:"",
               tourmentoryoe:""
    });

    const onSubmitForm=(e)=>
  {
    e.preventDefault();
     console.log("Form is got Submitted...");
     return axios.post("http://localhost:8080/newtourBooking/v1/addNewTourBooking",newBookTour);
  }

    const [summary,setShowSummary]=useState(false);
    // const handleSubmit=(e)=>
    // {
    //   e.preventDefault();
    //   console.log("Form is Submited...");
    // }
  return (
    <React.Fragment>
      <p class='text-3xl mt-12'>Book a Tour <FontAwesomeIcon icon={faSuitcase} size="1xl" /></p>
 <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        {/* <h4 className='items-center text-center text-lg'>Add a New Task  
        <span class='mr-5'></span>
        
        </h4> */}
    <form onSubmit={(e)=>onSubmitForm(e)}>
    <br/>

    <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Tourism Packages: </span>
  <div>
    <span class="font-medium">Available Tourism Packages:Adventure,WidlLife and Medical,Pilgrimage Packages. </span> 
  </div>
</div>

<label class='text-lg'>Tour Package Type 
</label>
<br/>

<input 
type="text" 
className="h-10 w-96 border mt-2 px-2 py-2"
name="packagetype"
value={newBookTour.packagetype}
onChange={(e)=>{
  e.preventDefault();
  const value=e.target.value;
  setnewBookTour({...newBookTour,
  [e.target.name]:value});
  console.log("Package Type is: ",value);
}}
// name="taskName"
// value={newTask.taskName}
// onChange={(e)=>
// {
//   e.preventDefault();
//   const value=e.target.value;
//   setnewTask({
//     ...newTask,
//     [e.target.name]:value
//   });
//   console.log("Task Name: ",value)
// }}
placeholder="Enter the Tour Package Type" >

</input>
<br/>
{/* <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Tourism Packages: </span>
  <div>
    <span class="font-medium">Available Tourism Packages:Adventure,WidlLife and Medical,Pilgrimage Packages. </span> 
  </div>
</div> */}

<br/>
<label class='text-lg'>Tour Mentor Rating (0 to 5 stars)
</label>
<br/>

<input 
type="text" 
className="h-10 w-96 border mt-2 px-2 py-2"
name="tourmentorating"
value={newBookTour.tourmentorating}
onChange={(e)=>{
  e.preventDefault();
  const value=e.target.value;
  setnewBookTour({...newBookTour,
  [e.target.name]:value});
  console.log("Tour Mentor Rating (0 to 5 stars): ",value);
}}
// name="taskName"
// value={newTask.taskName}
// onChange={(e)=>
// {
//   e.preventDefault();
//   const value=e.target.value;
//   setnewTask({
//     ...newTask,
//     [e.target.name]:value
//   });
//   console.log("Task Name: ",value)
// }}
placeholder="Enter the Tour Mentor Rating" >

</input>
<br/>


<br/>
<label class='text-lg'>Tour Mentor Year of Experience
</label>
<br/>

<input 
type="text" 
className="h-10 w-96 border mt-2 px-2 py-2"
name="tourmentoryoe"

value={newBookTour.tourmentoryoe}
onChange={(e)=>{
  e.preventDefault();
  const value=e.target.value;
  setnewBookTour({...newBookTour,
  [e.target.name]:value});
  console.log("Tour Mentor Year of Experience is: ",value);
}}
// name="taskName"
// value={newTask.taskName}
// onChange={(e)=>
// {
//   e.preventDefault();
//   const value=e.target.value;
//   setnewTask({
//     ...newTask,
//     [e.target.name]:value
//   });
//   console.log("Task Name: ",value)
// }}
placeholder="Enter the Tour Mentor Rating" >

</input>
<br/>
<br/>
<button type="submit" 

onClick={()=>{console.log(newBookTour)
   setShowSummary(true);
}}

class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-500 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 xl">Submit</button>
</form>
</div>
</div>
<br/>
{
  summary==false?<>
  <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Select a Tour Package.</p>
      <p class="text-sm">Please Select a Valid Tour Package inorder to Proceed with the Next Steps.</p>
    </div>
  </div>
</div>
        </div>
  
</div>
   </>:<><Summary PackageType={newBookTour.packagetype}
        tourManagerYearOfExperience={newBookTour.tourmentoryoe}
        tourManagerRating={newBookTour.tourmentorating} />
        </>
}
    </React.Fragment>
  )
}

export default TourBooking;
/*
*/