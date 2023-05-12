import React from "react";
import { useCurrentUserContext } from "../Context/userContext";

function Profile() {
  const { user } = useCurrentUserContext();

  return (
    <div>
      <header className="bg-orange-500 text-white text-center py-2">
        <h1 className="text-3xl font-bold">Profile Page</h1>
      </header>
      <div className="flex justify-center pt-5 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 lg:p-10 w-full lg:w-3/5 max-w-md lg:max-w-3xl mt-">
          <div className="flex flex-col justify-center items-center">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-4 border-white"
            />
            <button
              type="button"
              className="bg-orange-500 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-md"
            >
              Update Avatar
            </button>
          </div>
          <div className="mt-4 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold">
              {user.firstname} {user.lastname}
            </h2>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
