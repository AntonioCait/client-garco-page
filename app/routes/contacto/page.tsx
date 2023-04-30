import MainContent from '@/app/components/MainContent';
import MainContentContact from '@/app/components/MainContentContact';
import hero from '@/app/assets/herolocal.png';
import maps from '@/app/assets/maps.jpg';

function Contacto() {
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
				titleText="Contacto"
				paragraphClass="text-lg font-light mt-4"
				paragraphText="Si tienes alguna pregunta o necesitas asesoramiento en la elección de productos, no dudes en ponerte en contacto con nosotros. Nuestro amable equipo de atención al cliente estará encantado de ayudarte."
				rightBoxClass="right-box justify-self-center sm:p-4 md:p-8 lg:p-12 lg:justify-self-end"
				figureClass="hero-img drop-shadow-2xl"
				imageClass="drop-shadow-2xl mt-4"
				image={hero}
			/>
			<MainContentContact
				sectionClass="hero py-20 max-w-6xl
				m-auto
				px-4
				xl:px-6"
				contentPositionClass="container grid lg:grid-cols-2 justify-center items-center gap-4 grip-cols-1"
				leftBoxClass="left-box"
				titleClass="text-4xl font-bold text-garco-text-black mb-4"
				titleText="Redes Sociales"
				paragraphClass="text-lg font-light flex justify-start items-center gap-2 "
				paragraphText="Si tienes alguna pregunta o necesitas asesoramiento en la elección de productos, no dudes en ponerte en contacto con nosotros. Nuestro amable equipo de atención al cliente estará encantado de ayudarte."
				rightBoxClass="right-box justify-self-center sm:p-4 md:p-8 lg:p-12 lg:justify-self-end"
				figureClass="hero-img drop-shadow-2xl"
				imageClass="drop-shadow-2xl mt-4 rounded-md"
				image={maps}
			/>
		</>
	);
}

export default Contacto;
