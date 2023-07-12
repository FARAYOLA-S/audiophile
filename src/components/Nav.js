import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Nav(props) {
  const router = useRouter();
  return (
    <div className={props.className}>
      <ul className={props.nav}>
        <li>
          <Link 
          href="/"  
          prefetch={false} 
          className="cursor-pointer hover:text-deepOrange"
          >
            HOME{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link
            href="/headphones"
            prefetch={false}
            className="cursor-pointer hover:text-deepOrange"
          >
            HEADPHONES
          </Link>{" "}
        </li>
        <li>
          <Link
            href={{
              pathname: '/speakers',
              query: { name: 'test' },
            }}
            prefetch={false}
            className="cursor-pointer hover:text-deepOrange"
          >
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link
            href="/earphones"
            prefetch={false}
            className="cursor-pointer hover:text-deepOrange"
          >
            
            EARPHONES
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
