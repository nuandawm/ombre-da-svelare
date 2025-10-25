import { FaXmark } from "react-icons/fa6";
import Link from "next/link";

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
      className={`menuOverlay absolute h-screen w-screen flex flex-col bg-purple-950 text-white ${getMenuClassName()}`}
      style={{ pointerEvents: isMenuOpen === 'opened' ? "auto" : "none" }}
    >
      <div className="flex flex-row justify-between p-5 bg-purple-950">
        <h2>Ombre da svelare</h2>
        <button onClick={onClose}>
          <FaXmark size={24} />
        </button>
      </div>
      <div className="flex flex-col grow bg-linear-to-b from-purple-950 from-0% to-black to-20%">
        <div className="flex flex-col pt-5 items-center">
          <h3>Episodi</h3>
        </div>
        <hr
          className="my-5 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"/>
        <div className="flex flex-col items-center">
          <Link href="/seasons/1" onClick={onClose}>
            Stagione 1
          </Link>
        </div>
      </div>
    </div>
  );
}
