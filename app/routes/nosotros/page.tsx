import MainContent from '@/app/components/MainContent';
import hero from '@/app/assets/hero-blue.png';
import { Metadata } from 'next';

// metadata
export const metadata: Metadata = {
	title: 'Nosotros - Persianas Garco',
	description:
		'Descubre más sobre Persianas GARCO, una empresa lagunera fundada en el 2021 que ofrece una amplia variedad de persianas y papel tapiz de calidad para todos los gustos. Nuestro objetivo principal es brindar un excelente servicio al cliente, desde la orden de su producto hasta la instalación del mismo. Conoce nuestra historia y nuestro compromiso con la calidad y el servicio al cliente en nuestra página "Nosotros".',
};

function Nosotros() {
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
				paragraphText="Persianas GARCO es una empresa lagunera, fundada en el año 2021, la cual ofrece
				una gran variedad de persianas y papel tapiz de calidad para todos los gustos, cuyo
				objetivo principal, es brindar un excelente servicio al cliente, desde la orden de su
				producto, hasta la instalación del mismo."
				rightBoxClass="right-box justify-self-center sm:p-4 md:p-8 lg:p-12 lg:justify-self-end"
				figureClass="hero-img drop-shadow-2xl"
				imageClass="drop-shadow-2xl mt-4"
				image={hero}
			/>
			<section
				className="valores-mision 
				py-20 
			"
			>
				<div
					className="mision-vision-valores-container max-w-6xl
				m-auto grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 
				"
				>
					<div className="mision">
						<h3 className="text-4xl font-bold text-center text-garco-text-black">Misión</h3>
						<p className="text-lg font-light mt-4 text-center">
							Mejorar el ambiente de tu espacio brindando asesoría personalizada y al mismo tiempo ofrecerte
							los mejores productos y servicios de calidad en decoración como persianas y papel tapiz.
						</p>
					</div>
					<div className="vision">
						<h3 className="text-4xl font-bold text-center text-garco-text-black">Visión</h3>
						<p className="text-lg font-light mt-4 text-center">
							Ser reconocida como una empresa líder la cual ofrece la mayor garantía de sus productos
							fabricados con la mejor tecnología y diseños muy variados.
						</p>
					</div>
					<div className="valores">
						<h3 className="text-4xl font-bold text-center text-garco-text-black">Valores</h3>
						<div className="text-lg font-light mt-4 text-center">
							<p>Buen trato al cliente</p>
							<p>Sencillez</p>
							<p>Responsabilidad</p>
							<p>Innovación</p>
							<p>Calidad</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Nosotros;
