import Link from "next/link";

export default function Header() {
  return (
    <nav className="m-auto w=full px-20 border-b border-gray-600">
      <div className="flex items-center gap-8 justify-between py-6">
        <Link href={"/"} className=" font-semibold hover:opacity-90">
          SMARTHUB
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/#features"
            className="font-medium text-sm hover:opacity-90"
          >
            Features
          </Link>
        </div>
      </div>
    </nav>
  );
}
