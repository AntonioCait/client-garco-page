import { IContentContact } from '../typings/types';
import Image from 'next/image';
import { AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai';

function MainContentContact({
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
}: IContentContact) {
	return (
		<>
			<section className={sectionClass}>
				<main className={contentPositionClass}>
					<div className={leftBoxClass}>
						<h1 className={titleClass}>{titleText}</h1>
						<div>
							<a
								className={paragraphClass}
								href="https://www.facebook.com/garco.persianas.trc"
								target="_blank"
							>
								<AiFillFacebook className="text-2xl" />
								Facebook
							</a>
							<a
								className={paragraphClass}
								href="https://www.instagram.com/garco.persianas.trc/"
								target="_blank"
							>
								<AiOutlineInstagram className="text-2xl" />
								Instagram
							</a>
						</div>
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

export default MainContentContact;
