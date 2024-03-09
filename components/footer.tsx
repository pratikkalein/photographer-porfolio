import {
  FaSquareXTwitter,
  FaFacebook,
  FaSquareInstagram,
} from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  const socials = [
    { icon: <FaFacebook />, url: "https://www.facebook.com" },
    {
      icon: <FaSquareInstagram />,
      url: "https://www.instagram.com/piyush_gogawale/",
    },
    {
      icon: <FaSquareXTwitter />,
      url: "https://www.twitter.com",
    },
  ];
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between my-8">
      <div className="flex justify-center items-center lg:justify-end gap-4">
        {socials.map((social) => (
          <Link
            target="_blank"
            className="text-2xl"
            key={social.url}
            href={social.url}
          >
            {social.icon}
          </Link>
        ))}
      </div>
      <p className="text-center">© 2024 | piyushogogawale.com</p>
    </footer>
  );
}

export default Footer;
