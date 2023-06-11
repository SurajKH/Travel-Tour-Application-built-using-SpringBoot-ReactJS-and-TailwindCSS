import React,{useState} from 'react';
import PaymentIntegration from './PaymentIntegration';


const Discount = ({PackageType,tourManagerYearOfExperience,tourManagerRating,tourManagerCost,summaryStatus}) => {

    const [couponIndex,setCouponIndex]=useState(0);

    const [genDiscount,setgenDiscount]=useState(false);

   const [tourCost,setTourCost]=useState(0);
  // setTourCost(tourManagerCost);

   //console.log("Tour Cost is: ",tourCost);

 const couponmap=new Map();
 var arr=[1,2,3];
 couponmap.set(1,"COUPON15");
 couponmap.set(2,"COUPON10");
 couponmap.set(3,"COUPON20");

 //lets generate a coupon based on the user button instance.

  const randomButtonClick=(event)=>
  {
    event.preventDefault();
    setgenDiscount(true);
    let index=[];
    for(var value of couponmap.keys())
    {
      index.push(value);
     // console.log()
    }
    index.sort();
    let mini=index[0];
    let maxi=index[1];
    
    let random=Math.floor(Math.random()*(maxi-mini))+mini;

   // console.log("Random Number is: ",random);

    setCouponIndex(random);
    if(couponIndex==1)
    {
      var cost=0;
     // console.log(tourCost);
      cost=tourManagerCost-(tourManagerCost*(15/100));
      console.log("cost is: ",cost);
      setTourCost(cost);
    }
    else if(couponIndex==2)
    {
        var cost=0;
        cost=tourManagerCost-(tourManagerCost*(10/100));
        setTourCost(cost);
    }
    else{
        var cost=0;
        cost=tourManagerCost-(tourManagerCost*(20/100));
        setTourCost(cost);
    }
  }

  console.log(summaryStatus);
  return (
    <React.Fragment>
    {summaryStatus==true?<>
        <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-5"
        onClick={randomButtonClick}
        >Generate Discount Coupon</button>

        {genDiscount==true?<>
            <div className='flex max-w-xl mx-auto justify-center border-b'>
       <div class='px-12 py-12 bg-white	 text-black text-xl border border-black	 mt-12'>
       <p class='text-xl mb-5'>Updated Tour Booking Summary</p>
       <hr
        class='mb-5'
       />
         <p class='text-xl mb-3'>Tour Package Type : {PackageType}</p>
         <p class='text-xl mb-3'>Tour Mentor Ratings : {tourManagerRating}</p>
         <p class='text-xl mb-3'>Tour Mentor Year of Experience : {tourManagerYearOfExperience}</p>
         <p class='text-xl mb-3'>Tour Amount: {tourCost}</p>
         <PaymentIntegration/>   
       </div>
       </div>
        </>:<></>}
    </>:<></>}
        
    </React.Fragment>
  )
}

export default Discount;
