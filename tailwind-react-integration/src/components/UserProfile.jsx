function UserProfile() {
    return (
      <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
        {/* User Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-36 h-36 rounded-full mx-auto"
        />
  
        {/* User Name */}
        <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
  
        {/* User Bio */}
        <p className="text-gray-600 text-base">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  
  
  import React from "react";

  function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm mx-auto my-10 rounded-lg shadow-lg text-center">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-3">
          John Doe
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Developer at Example Co. Loves to write code and explore new
          technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  