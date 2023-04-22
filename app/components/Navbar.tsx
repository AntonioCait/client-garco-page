'use client';

import Image from 'next/image';
import Link from 'next/link';
// import logo from assets folder
import logo from '../assets/garcoLogo.png';
// import links interface
import { ILinks } from '../typings/types';
// import styles from navbar.module.css
import styles from './Navbar.module.css';
// use state
import { useState } from 'react';
// import hamburger icon
import { hamburger } from '../assets/icons';
import { close } from '../assets/icons';
function Navbar() {
	const [activeMobile, setActiveMobile] = useState<boolean>(false);

	const toggleMobile = () => {
		setActiveMobile(!activeMobile);
	};
	// links
	const Links: ILinks[] = [
		{
			name: 'Inicio',
			href: '/',
		},
		{
			name: 'Nosotros',
			href: '/routes/nosotros',
		},
		{
			name: 'Contacto',
			href: '/routes/contacto',
		},
	];

	return (
		<>
			<nav className="bg-garco-blue py-4 px-6 fixed top-0 left-0 w-full z-10 drop-shadow-md">
				{/* two grid columns and margin auto */}
				<div className="max-w-6xl grid grid-cols-2 m-auto">
					<div className="nav-left">
						<Link href="/">
							<Image src={logo} alt="Garco Logo" width={140} height={140} />
						</Link>
					</div>
					<div className="nav-right flex justify-end items-center gap-4">
						<div
							className="links-desktop
						hidden lg:flex gap-4
						"
						>
							{Links.map((link) => (
								<Link href={link.href} key={link.name} className="text-white">
									{link.name}
								</Link>
							))}
						</div>

						{/* mobile button only for tablet and below */}
						<button
							className="lg:hidden
						"
							onClick={toggleMobile}
							aria-label="mobile menu button"
						>
							{activeMobile ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-8 h-8 text-white"
								>
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-8 h-8 text-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* mobile menu */}
				<div className="max-w-6xl m-auto lg:hidden">
					{/* mobile menu links */}
					<div className={`${activeMobile ? 'block' : 'hidden'} mobile-menu w-full"`}>
						<ul className="flex flex-col items-center gap-4 h-56 p-6 justify-evenly border-t border-white mt-5">
							{Links.map((link) => (
								<li key={link.name}>
									<Link href={link.href} className="text-white" onClick={toggleMobile}>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
