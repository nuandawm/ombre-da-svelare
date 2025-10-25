import {FaEnvelope, FaInstagram, FaSpotify} from "react-icons/fa6";
import Link from "next/link";
import {JSX} from "react";
import {IconType} from "react-icons";

type IconName = "spotify" | "instagram" | "email";

const socialData: Record<IconName, { icon: IconType, link: string }> = {
  instagram: {
    icon: FaInstagram,
    link: "https://www.instagram.com/ombre_da_svelare/",
  },
  email: {
    icon: FaEnvelope,
    link: "mailto:ombredasvelare@gmail.com",
  },
  spotify: {
    icon: FaSpotify,
    link: "https://open.spotify.com/show/5Bd3bw7uq04N4KOGbj8AMH?si=65f273a3d76448c2",
  }
};

export function Social({ iconName }: { iconName: IconName }): JSX.Element {
  const link = socialData[iconName].link;
  const Icon = socialData[iconName].icon;

  return <Link href={link}>
    <Icon size={32} />
  </Link>;
}