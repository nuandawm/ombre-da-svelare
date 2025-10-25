import {FaBars} from "react-icons/fa6";

export const MenuButton = ({onClick}: {onClick: () => void}) => <button onClick={onClick}>
    <FaBars size={24} />
</button>