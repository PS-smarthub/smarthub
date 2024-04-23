import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-gray-500 py-6">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">© 2024 Smarthub Inc. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            className="text-gray-400 hover:text-gray-100 transition-colors"
            href="#"
          >
            YouTube
          </Link>
        </div>
      </div>
    </footer>
  );
}
