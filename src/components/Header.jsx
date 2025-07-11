import { useAuth0 } from "@auth0/auth0-react";
import logo from "../assets/logo.png";
import AuthButton from "./Authbtn";


const Header = () => {

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
       
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt=""
            className="h-12 w-12"
          />
          <h1 className="text-xl font-semibold">MCQ Portal</h1>
        </div>
        <div>

        {/* Auth Buttons */}
        {/* Login/Logout Button */}
        <AuthButton />
      
        </div>
      </div>
    </header>
  );
};

export default Header;
