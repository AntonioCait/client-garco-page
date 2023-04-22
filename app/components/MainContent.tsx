import { IContent } from '../typings/types';
import Image from 'next/image';

function MainContent({
	sectionClass,
	contentPositionClass,
	leftBoxClass,
	titleClass,
	titleText,
	paragraphClass,
	paragraphText,
	rightBoxClass,
	figureClass,
	imageClass,
	image,
}: IContent) {
	return (
		<>
			<section className={sectionClass}>
				<main className={contentPositionClass}>
					<div className={leftBoxClass}>
						<h1 className={titleClass}>{titleText}</h1>
						<p className={paragraphClass}>{paragraphText}</p>
					</div>
					<div className={rightBoxClass}>
						<figure className={figureClass}>
							<Image className={imageClass} src={image} alt="Persianas" width={500} height={500} />
						</figure>
					</div>
				</main>
			</section>
		</>
	);
}

export default MainContent;
