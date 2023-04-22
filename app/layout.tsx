import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// open sans font
import { Open_Sans } from 'next/font/google';
// metadata

const openSans = Open_Sans({
	weight: ['400', '600', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Persianas Garco',
	description:
		'¿Quieres renovar la decoración de tu hogar? En nuestra tienda contamos con una amplia variedad de productos, desde persianas y cortinas hasta toldos y papel tapiz de todo tipo, para facilitarte la tarea. Además, todos nuestros productos están garantizados para ofrecerte la tranquilidad de que estás haciendo una inversión segura. Descubre nuestra selección y encuentra lo que necesitas para darle un nuevo estilo a tu hogar.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				// open sans font
				className={openSans.className}
			>
				<Navbar />
				<div
					className="
					mt-20
				"
				>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
