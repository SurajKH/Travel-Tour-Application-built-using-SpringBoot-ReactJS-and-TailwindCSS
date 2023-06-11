import React, { useEffect, useState } from 'react';
import TourBooking from './TourBooking';
import PaymentIntegration from './PaymentIntegration';
import TabularSummary from './TabularSummary';
import Discount from './Discount';

//Summary Component.
const Summary = ({PackageType,tourManagerYearOfExperience,tourManagerRating}) => {

  
 const [packageCost,setPackageCost]=useState('');
 // const [tourMentorCost,setTourMentorCost]=useState(0);
 const [totalCost,setTotalCost]=useState(0);
 const [generateSummary,setGenerateSummary]=useState(false);

 const tourManagerRatingFloat=parseFloat(tourManagerRating);
 
 const tourManagerYearOfExp=parseFloat(tourManagerYearOfExperience);

 function generateCost()
 {
   var tourcost=0;
   switch(PackageType)
   {
    case "Adventure":
                     tourcost+=6500;
                     break;
    case "WildLife":tourcost+=5500;
                     break; 
    case "Medical":tourcost+=10000;
                    break;
    case "Pilgrimage":tourcost+=9500;                                                 
   }
   if(tourManagerRatingFloat>=4)
   {
    tourcost+=4500;
   }
   if(tourManagerYearOfExp>=5)
   {
    tourcost+=2000;
   }
   console.log("the Tour Cost is: ",tourcost);
   setGenerateSummary(true);
   setTotalCost(tourcost);
 }
    //we need to have the integer format of selection of Orders.

    //tourMentorCost=parseInt(tourManagerRating);
   // console.log("Type: ",typeof(tourMentorCost));
//Lucky Draw Implementation.

//now lets consider the concept of coupon selection.
 const [couponIndex,setCouponIndex]=useState(0);

 const [discountPrice,setDiscountPrice]=useState(0);

 const couponmap=new Map();
 var arr=[1,2,3];
 couponmap.set(1,"COUPON15");
 couponmap.set(2,"COUPON10");
 couponmap.set(3,"COUPON20");

 //lets generate a coupon based on the user button instance.

  const randomButtonClick=(event)=>
  {
    event.preventDefault();
    let index=[];
    for(var value in couponmap.values())
    {
      index.push(value);
    }
    index.sort();
    let mini=index[0];
    let maxi=index[1];
    
    let random=Math.random()*(maxi-mini)+mini;

    setCouponIndex(random);
    if(couponIndex==1)
    {
      var cost=0;
      cost=totalCost-(totalCost*(15/100));
      setTotalCost(cost);
    }
    else if(couponIndex==2)
    {
      var cost=0;
      cost=totalCost-(totalCost*(10/100));
      setTotalCost(cost);
    }
    else{
      var cost=0;
      cost=totalCost-(totalCost*(20/100));
      setTotalCost(cost);
    }
  }
  
  return (
    
<React.Fragment>
    <button class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-500 font-medium rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 xl"
    onClick={()=>generateCost()}
    >Generate Summary</button>

    {
      generateSummary==true?<>
      <div className='flex max-w-xl mx-auto justify-center border-b'>
     <div className='px-24 py-12'>
  <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p class="font-bold">Note</p>
      <p class="text-md">Based on the Tour Attributes Selection Made by the User we have generated the Tour Booking Summary Details</p>
    </div>
  </div>
</div>
</div>
     </div>
     <div className='flex max-w-xl mx-auto justify-center border-b'>
       <div class='px-12 py-12 bg-white	 text-black text-xl border border-black	 mt-12'>
       <p class='text-xl mb-5'>Tour Booking Summary</p>
       <hr
        class='mb-5'
       />
         <p class='text-xl mb-3'>Tour Package Type : {PackageType}</p>
         <p class='text-xl mb-3'>Tour Mentor Ratings : {tourManagerRating}</p>
         <p class='text-xl mb-3'>Tour Mentor Year of Experience : {tourManagerYearOfExperience}</p>
         <p class='text-xl mb-3'>Tour Amount: {totalCost}</p>
         <PaymentIntegration/>

         <TabularSummary
         PackageType={PackageType}
        tourManagerYearOfExperience={tourManagerYearOfExperience}
        tourManagerRating={tourManagerRating}

        tourManagerCost={totalCost}

       
         />
         
       </div>
       </div>
      </>:<></>
    }

    {/*
    Now we need to Consider Payment Options.
    */}
    
    <Discount PackageType={PackageType}
        tourManagerYearOfExperience={tourManagerYearOfExperience}
        tourManagerRating={tourManagerRating}
        summaryStatus={generateSummary}
        tourManagerCost={totalCost}
    />
</React.Fragment>
  )
}

export default Summary;
