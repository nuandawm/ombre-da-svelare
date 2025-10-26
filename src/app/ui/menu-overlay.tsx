import { FaXmark } from "react-icons/fa6";
import Link from "next/link";
import {Separator} from "@/app/ui/separator";

export type MenuState = "opened" | "closed" | "initial";

type MenuOverlayProps = {
  isMenuOpen: MenuState;
  onClose: () => void;
};

export function MenuOverlay({ isMenuOpen, onClose }: MenuOverlayProps) {
  const getMenuClassName = () => {
    switch (isMenuOpen) {
      case 'opened':
        return 'animate-fade-in';
      case 'closed':
        return 'animate-fade-out';
      default:
        return 'opacity-0';
    }
  };

  return (
    <div
      className={`menuOverlay absolute h-screen w-screen z-1 flex flex-col bg-purple-950 text-white ${getMenuClassName()}`}
      style={{ pointerEvents: isMenuOpen === 'opened' ? "auto" : "none" }}
    >
      <div className="flex flex-row justify-between p-5 bg-purple-950">
        <h2>Ombre da svelare</h2>
        <button onClick={onClose}>
          <FaXmark size={24} />
        </button>
      </div>
      <div className="flex flex-col grow bg-linear-to-b from-purple-950 from-0% to-black to-20%">
        <div className="flex flex-col pt-16 items-center">
          <Link href="/" onClick={onClose}>
            Home
          </Link>
        </div>
        <Separator />
        <div className="flex flex-col pt-5 items-center">
          <Link href="/seasons" onClick={onClose}>
            Episodi
          </Link>
        </div>
        <Separator />
        <div className="flex flex-col pt-5 items-center">
          <Link href="/seasons/1" onClick={onClose}>
            Stagione 1
          </Link>
        </div>
      </div>
    </div>
  );
}
