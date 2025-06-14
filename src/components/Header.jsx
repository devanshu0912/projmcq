import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";


const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="src\assets\logo.png" // replace with your actual logo path in /public
            alt="MCQ App Logo"
            className="h-8 w-8"
          />
          <h1 className="text-xl font-semibold">MCQ Portal</h1>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <span className="hidden md:inline">{user.name}</span>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-500 hover:bg-blue-600 px-4 py-1 rounded"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
