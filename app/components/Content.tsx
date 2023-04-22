import Image from 'next/image';
import { IContent } from '../typings/types';

function Content({
	sectionClass,
	contentPositionClass,
	leftBoxClass,
	titleClass,
	titleText,
	paragraphClass,
	// paragraphText,
	rightBoxClass,
	figureClass,
	imageClass,
	image,
}: IContent) {
	return (
		<>
			<section className={sectionClass}>
				<div className={contentPositionClass}>
					<div className={leftBoxClass}>
						<h2 className={titleClass}>{titleText}</h2>
						<div className={paragraphClass}>
							<p>
								Sheer Elegance, Errolable Bo, Errolable, Enrrollable Translúcida, Enrrollable Blackout,
								Enrrollable Semi Translúcida, PVC Vertical, Panel Japonés, Romana, Papel Tapíz
							</p>
						</div>
					</div>
					<div className={rightBoxClass}>
						<figure className={figureClass}>
							<Image className={imageClass} src={image} alt="Persianas" width={500} height={500} />
						</figure>
					</div>
				</div>
			</section>
		</>
	);
}

export default Content;
