import {FaInstagram, FaSquareFacebook, FaEnvelope} from "react-icons/fa6";
import Link from "next/link";
import {JSX} from "react";

type IconName = "facebook" | "instagram" | "email";

const socialData = {
  facebook: {
    icon: FaSquareFacebook,
    link: "https://facebook.com",
  },
  instagram: {
    icon: FaInstagram,
    link: "https://instagram.com",
  },
  email: {
    icon: FaEnvelope,
    link: "mailto:nuandawm@krasnij-njesa.com",
  }
};

export function Social({ iconName }: { iconName: IconName }): JSX.Element {
  const link = socialData[iconName].link;
  const Icon = socialData[iconName].icon;

  return <div>
    <Link href={link}>
      <Icon size={32} />
    </Link>
  </div>;
}