import React from "react";

/*
PackageType={newBookTour.PackageType}
        tourManagerYearOfExperience={newBookTour.tourManagerYearOfExperience}
        tourManagerRating={newBookTour.tourManagerRating}

        tourManagerCost={newBookTour.totalCost}
*/
function TabularSummary({PackageType,tourManagerYearOfExperience,tourManagerRating,tourManagerCost})
{
    //now we are inside the tabular summary.

    return(
        <React.Fragment>
         
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Tour Package
                </th>
                <th scope="col" class="px-6 py-3">
                    Tour Mentor Ratings
                </th>
                <th scope="col" class="px-6 py-3">
                    Tour Mentor Year of Experience
                </th>
                <th scope="col" class="px-6 py-3">
                    Tour Amount
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th> */}
                <td class="px-6 py-4">
                    {PackageType}
                </td>
                <td class="px-6 py-4">
                    {tourManagerRating}
                </td>
                <td class="px-6 py-4">
                   {tourManagerYearOfExperience}
                </td>
                <td class="px-6 py-4">
                   {tourManagerCost}
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

        </React.Fragment>
    )
};

export default TabularSummary;