import React, { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
//we are generating an Admin View over here.
const AdminView = () => {
    //lets consider the defintion of states.
    const admin_username="admin";
    const admin_password="admin123";

    const [username,setUsername]=useState('');
    const [userPassword,setUserPassword]=useState('');
    const [stateView,setStateView]=useState('');

    //we have set the initial baseurl for the application over here.

    const navigate = useNavigate('http://localhost:3000');

    
    //lets consider the concept of conditional rendering over here.
    
      // lets update the data from the form,then apply the conditional rendering to redirect them to a new page.
    

       const handleSubmit=(e)=>
       {
        e.preventDefault();
        //we are considering a validate function instance.

        if(username==admin_username && admin_password==userPassword && stateView=="AllTourManagers")
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
         
          navigate('/TourManagers');

        }
        else if(username==admin_username && admin_password==userPassword && stateView=="BookTour")
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
          navigate('/BookTour');

        }
        else if(username==admin_username && admin_password==userPassword && stateView=="AboutView")
        {
           // console.log("Authentication Successfull");
           //now lets redirect to a new Page.
          navigate('/AboutUs');

        }
        else if(username==admin_username && admin_password==userPassword && stateView=="AdvancedTaskVisualizer")
        {
          navigate('/AdvancedTaskVisualizer');
        }
        /*
        '/TasksAnalytics'
        */
        else if(username==admin_username && admin_password==userPassword && stateView=="TasksAnalytics")
        {
          navigate('/TasksAnalytics');
        }
        else{
          //  console.log("Authentication was not Successfull");
          navigate('/ErrorPage');
        }
       }
  return (
    <React.Fragment>
    {/* <BrowserRouter> */}
    <div className='flex max-w-xl mx-auto justify-center border-b'>
        <div className='px-6 py-6'>
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Access Restriction.</p>
      <p class="text-sm">Only Users with Admin Privileges are allowed to Access the Application.</p>
    </div>
  </div>
</div>
        <form onSubmit={(e)=>handleSubmit(e)}>
        <br/>
            <label class='text-2xl mb-12'>Admin Name</label>
            <br/>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4" id="username" type="text" 
            placeholder="Enter Admin Name:" 
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />

            <br/>
            <label class='text-2xl'>Admin Password</label>
            <br/>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 mt-4" id="username" type="text" 
            placeholder="Enter Admin Password:" 
                onChange={(e)=>{
                    setUserPassword(e.target.value)
                }}
            />

            <br/>
            <br/>
            <label class='text-2xl'>Different Scopes</label>
            <br/>
            <br/>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an Option</label>
   <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{
    e.preventDefault();
    setStateView(e.target.value);
   }}>
      <option selected value="AllTourManagers">Available Tour Managers</option>
      <option value="TourStatistics">Tour Statistics(Year Wise Performance)</option>
      <option value="BookTour">Book a Tour(Selection Categories:All available tour managers,package discount,Stay facilities etc.) (tour payment configuration  via Phone).</option>
      <option value="AboutView">About Us</option>

       </select>
       <br/>
            <button 
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-auto ml-12" type="submit">Submit</button>
           <br/>

        </form>
        </div>
        </div>
        {/* </BrowserRouter> */}
    </React.Fragment>
  )
}

export default AdminView;

