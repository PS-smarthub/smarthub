import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-gray-500 py-6 border-t border-border">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">© 2024 Smarthub Inc. All rights reserved.</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <Link
            className="text-gray-400 hover:text-gray-100 transition-colors"
            href="https://github.com/Ps-smarthub"
          >
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
