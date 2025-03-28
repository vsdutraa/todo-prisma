"use client";

// next imports
import Link from "next/link";

// lucide react imports
import { Pen } from "lucide-react";

// shared imports
import UserAvatarDropdown from "@/components/header/user-avatar-dropdown";

export function Header() {
  return (
    <header className="flex h-14 items-center border-b">
      <div className="container m-auto flex h-full items-center justify-between border-x px-4">
        {/* left side */}
        <Link href="/" className="flex items-center gap-2">
          <Pen size={20} strokeWidth={3} />
          <h1 className="font-black lowercase">To-Do List</h1>
        </Link>

        {/* right side */}
        <div>
          <UserAvatarDropdown />
        </div>
      </div>
    </header>
  );
}
