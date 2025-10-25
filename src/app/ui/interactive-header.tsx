"use client";

import {useState} from "react";
import {MenuButton} from "./menu-button";
import {MenuOverlay, MenuState} from "./menu-overlay";
import Link from "next/link";

export function InteractiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState<MenuState>('initial');

  return (
    <>
      <MenuOverlay isMenuOpen={isMenuOpen} onClose={() => setIsMenuOpen('closed')} />
      <header className="flex flex-row justify-between p-5 bg-purple-950 text-white">
        <Link href="/">
          Ombre da svelare
        </Link>
        <MenuButton onClick={() => setIsMenuOpen('opened')} />
      </header>
    </>
  );
}
