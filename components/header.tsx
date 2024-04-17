"use client";

import { useRecoilState } from "recoil";
import SearchInput from "./search-input";
import { searchState } from "utils/recoil/state";

export default function Header() {
  const [search, setSearch] = useRecoilState(searchState);

  return (
    <header className="w-full flex items-center justify-between px-4 py-2 bg-gray-900">
      <div className="flex items-center gap-4">
        <img
          src="/images/netflix_logo.svg"
          alt="Netflix Logo"
          className="h-6 mr-4"
        />
        {[
          { href: "/", title: "Home" },
          { href: "/", title: "Movies" },
          { href: "/", title: "Dramas" },
        ].map(({ href, title }, index) => (
          <a key={index} href={href} className="text-white">
            {title}
          </a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <SearchInput search={search} setSearch={setSearch} />
        <i className="fas fa-user text-white border-white rounded-full border-2 p-2" />
      </div>
    </header>
  );
}
