import React from "react";

const Footer = ({ sharedBasicInfo: data }) => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="copyright py-4 text-center">
          <div className="container">
            <small>Copyright &copy; {data ? data.name : "???"}</small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
