import { AiFillGithub, AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/rice2411", Icon: AiFillGithub, label: "GitHub" },
  {
    href: "https://facebook.com/rice2411",
    Icon: AiFillFacebook,
    label: "Facebook",
  },
  {
    href: "https://instagram.com/ttam.rice",
    Icon: AiFillInstagram,
    label: "Instagram",
  },
  {
    href: "https://t.me/rice2411",
    Icon: FaTelegramPlane,
    label: "Telegram",
  },
];

export const Footer = () => {
  return (
    <footer className="py-8 max-w-[1200px] mx-auto px-4">
      <div className="mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="text-gray-200">© 2024. All rights reserved.</p>

        <ul className="flex gap-5 flex-wrap">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors"
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};
