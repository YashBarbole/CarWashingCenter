import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center md:text-left">
        <h2 className="text-2xl font-bold">B.D.R. Washing Centre</h2>
        <p className="mt-2 text-lg">
          Kondi, NH 65, Solapur - Pune Hwy, near Hotel Sunil, <br />
          Kondi, Solapur, Maharashtra 413255
        </p>
        <p className="mt-2 text-lg font-semibold">📞 +91 88885 18876</p>
        <p className="mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} B.D.R. Washing Centre. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
