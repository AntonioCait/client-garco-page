import Image from 'next/image';
import hero from './assets/img1.png';
import hero2 from './assets/img2.png';
import grid1 from './assets/img3.png';
import grid2 from './assets/img4.png';
import grid3 from './assets/img5.png';
import grid4 from './assets/img6.png';
import grid5 from './assets/img7.png';
import grid6 from './assets/img8.png';
import MainContent from './components/MainContent';
import Content from './components/Content';
import { Metadata } from 'next';

const gridImages = [
	{
		id: 1,
		image: grid1,
	},
	{
		id: 2,
		image: grid2,
	},
	{
		id: 3,
		image: grid3,
	},
	{
		id: 4,
		image: grid4,
	},
	{
		id: 5,
		image: grid5,
	},
	{
		id: 6,
		image: grid6,
	},
];

// metadata
export const metadata: Metadata = {
	title: 'Inicio - Persianas Garco',
	description:
		'¿Quieres renovar la decoración de tu hogar? En nuestra tienda contamos con una amplia variedad de productos, desde persianas y cortinas hasta toldos y papel tapiz de todo tipo, para facilitarte la tarea. Además, todos nuestros productos están garantizados para ofrecerte la tranquilidad de que estás haciendo una inversión segura. Descubre nuestra selección y encuentra lo que necesitas para darle un nuevo estilo a tu hogar.',
};

export default function Home() {
	return (
		<>
			<MainContent
				sectionClass="hero py-20 max-w-6xl
				m-auto
				px-4
				xl:px-6"
				contentPositionClass="container grid lg:grid-cols-2 justify-center items-center gap-4 grip-cols-1"
				leftBoxClass="left-box"
				titleClass="text-4xl font-bold text-garco-text-black"
				titleText="PERSIANAS GARCO"
				paragraphClass="text-lg font-light mt-4"
				paragraphText="Si estás buscando darle un nuevo estilo a tu hogar, nosotros te facilitamos la decoración. Contamos con una amplia variedad de productos, incluyendo persianas, cortinas, toldos y papel tapiz de todo tipo. Todos nuestros productos están garantizados, para que tengas la tranquilidad de que estás haciendo una inversión segura."
				rightBoxClass="right-box justify-self-center sm:p-4 md:p-8 lg:p-12 lg:justify-self-end"
				figureClass="hero-img drop-shadow-2xl"
				imageClass="drop-shadow-2xl mt-4"
				image={hero}
			/>
			<Content
				sectionClass="hero py-20 bg-garco-blue w-full"
				contentPositionClass="
				container 
				flex
				flex-col
				justify-center
				items-center
				lg:flex-row-reverse
				lg:justify-between
				lg:items-center			
				gap-4
				grip-cols-1
				m-auto max-w-6xl
				px-4
				xl:px-6
				text-lg
				font-light
				mt-4"
				leftBoxClass="left-box lg:w-1/2"
				titleClass="text-4xl font-bold text-white"
				titleText="Productos y Servicios"
				paragraphClass="text-lg font-light mt-4 text-white"
				// paragraphText="Decora tu hogar con facilidad con persianas, cortinas, toldos y papel tapiz de todo tipo"
				rightBoxClass="right-box justify-self-center sm:p-4 md:p-8 lg:p-12 lg:justify-self-end lg:w-1/2"
				figureClass="hero-img drop-shadow-2xl"
				imageClass="drop-shadow-2xl mt-4"
				image={hero2}
			/>
			{/* grid of images */}
			<section>
				<div className="title-container max-w-5xl m-auto p-8 mt-12 ">
					<h3
						className="
					text-4xl
					font-bold
					text-center
					text-garco-text-black
					"
					>
						Productos
					</h3>
				</div>
				<div className="grid-container max-w-4xl m-auto py-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-4">
					{gridImages.map((image) => (
						<figure
							key={image.id}
							className="grid-item 
							justify-self-center
							w-full
							h-full
							lg:p-1
						"
						>
							<Image
								className="
							drop-shadow-2xl
							w-full
							h-full
							justify-self-center
							"
								src={image.image}
								alt="Persianas"
								width={500}
								height={500}
							/>
						</figure>
					))}
				</div>
			</section>
		</>
	);
}
