// components/layout/Header.tsx

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>
    </header>
  );
};

export default Header;
