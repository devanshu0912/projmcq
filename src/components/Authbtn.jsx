// src/components/AuthButton.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButton = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <div className="flex items-center gap-3">
      <span className="hidden md:inline text-sm">{user?.name}</span>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  ) : (
    <button
      onClick={() => loginWithRedirect()}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded"
    >
      Login
    </button>
  );
};

export default AuthButton;
