"user client";

import { Menu } from "lucide-react";
import Link from "next/link";


export const Navbar = () => {
  return (
    <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 h-16 border-b border-primary/10 bg-secondary">
      <div className="flec items-center">
        <Menu className="block md:hidden" />
        <Link href="/">
          <h1 className="hidden md:block text-xl md:text-3xl
          font-bold text-primary">companion.ai</h1>
        </Link>
      </div>
    </div>
  );
};
