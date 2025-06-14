const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="container mx-auto text-center py-3 text-sm">
        &copy; {new Date().getFullYear()} MCQ Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
