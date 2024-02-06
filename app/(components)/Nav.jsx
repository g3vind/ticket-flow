// (components) - folder is not included in the routing

import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex justify-evenly bg-nav p-4">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image
            src="/ticket.png"
            width={25}
            height={28}
            alt="Picture of the logo"
          />
          <span className="text-blue-500 font-bold">Ticket Flow</span>
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="ml-2 font-semibold text-white hover:text-blue-400">
            Home
          </span>
        </Link>
        <Link href="/TicketPage/new">
          <FontAwesomeIcon icon={faTicket} className="icon" />
          <span className="ml-2 font-semibold text-white hover:text-blue-400">
            New Ticket
          </span>
        </Link>
      </div>
      <div>
        <p className="text-default-text">g3vind@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
