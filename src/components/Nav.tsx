"use client";

import { useState } from "react";

const links = [
  { id: "intro", label: "About Me" },
  { id: "first", label: "Skills" },
  { id: "second", label: "Projects" },
  { id: "cta", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("intro");

  return (
    <nav id="nav" className="w-full">
      <ul className="flex justify-center gap-8 text-lg font-semibold">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setActive(id)}
              className={`
                px-3 py-1 rounded-md transition-colors duration-300
                ${
                  active === id
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-300"
                }
              `}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
