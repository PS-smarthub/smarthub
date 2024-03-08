import Link from "next/link";
import { ModeToggle } from "@smarthub/ui";

export default function Header() {
  return (
    <nav className="m-auto w=full border-b">
      <div className="flex items-center gap-8 justify-between py-6">
        <Link href={"/"} className="pl-20 font-semibold hover:opacity-90 lg:text-xl">
          SMARTHUB
        </Link>
        <div className="flex items-center gap-4 pr-8">
          <ModeToggle/>
        </div>
      </div>
    </nav>
  );
}
