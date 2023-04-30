import Image from 'next/image';
import Link from 'next/link';
// import logo from assets folder
import logo from '../assets/garcoLogo.png';
import { ILinks } from '../typings/types';
// AiOutlineInstagram
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

function Footer() {
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
			<footer className="bg-garco-blue">
				<div
					className="footer-container max-w-6xl m-auto 
          grid grid-cols-1 gap-4
          lg:grid-cols-3
          py-10

        "
				>
					<div
						className="footer-logo-left 
          flex justify-center items-center gap-4
          lg:justify-start
          "
					>
						<Link href="/">
							<Image src={logo} alt="Garco Logo" width={140} height={140} />
						</Link>
					</div>
					<div
						className="link-instagram 
          flex justify-center items-center gap-4
          lg:justify-center
          "
					>
						<a href="https://www.instagram.com/garco.persianas.trc/" target="_blank">
							<AiOutlineInstagram className="text-white text-4xl" />
						</a>
						<a href="https://www.facebook.com/garco.persianas.trc" target="_blank">
							<AiFillFacebook className="text-white text-4xl" />
						</a>
					</div>
					<div
						className="footer-links-right
          flex flex-col justify-center items-center gap-4
          lg:justify-end
          lg:flex-row
          "
					>
						{Links.map((link) => (
							<Link href={link.href} key={link.name} className="text-white">
								{link.name}
							</Link>
						))}
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
