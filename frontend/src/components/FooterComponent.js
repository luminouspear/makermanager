import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function FooterComponent() {
  return (
		<section className="container max-w-7xl mx-auto bg-black w-full">
			<div className="w-full h-full relative">
				<img
					className="max-w-full h-auto object-cover"
					src={"/assets/images/image_crayon_bg.png"}
					srcset="/assets/images/image_crayon_bg.png 500w,
                                    /assets/images/image_crayon_bg@2x.png 1000w,
                                    /assets/images/image_crayon_bg@3x.png 1500w"
					sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
					alt="A geometric quilt with purple mountains."
				></img>
				<div className="absolute inset-0 bg-white my-12 lg:my-24 lg:w-8/12 lg:mx-auto shadow-xl">
					<h2 className="text-black font-oswald uppercase text-3xl lg:text-4xl font-bold text-center lg:px-48 mt-12">
						Let's Make Something Great Together
					</h2>
					<div className="flex flex-col justify-center items-center mt-8 lg:mt-16">
						<p className="font-robotoslab">Email Address</p>
						<h3 className="font-oswald text-3xl uppercase cursor-pointer hover:text-mmpink">
							<a href="mailto:Hello@MakerManager.CA">
								Hello@MakerManager.ca
							</a>
						</h3>
					</div>
					<div className="flex flex-col justify-center items-center mt-8 lg:mt-16">
						<p className="font-robotoslab">My Store</p>
						<h3 className="font-oswald text-3xl uppercase cursor-pointer hover:text-mmpink">
							<a href="http://www.simcoestitchcraft.com">
								SimcoeStitchcraft.com
							</a>
						</h3>
					</div>
					<div className="flex flex-col justify-center items-center mt-8 lg:mt-16">
						<p className="font-robotoslab">My Socials</p>
						<div className="flex w-4/12 mt-2 mx-auto space-x-6 items-center justify-center">
							{/* <a
								href="https://www.facebook.com/dummy"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faFacebook}
									className="text-black text-2xl hidden"
									aria-hidden="true"
								/>
							</a> */}
							<a
								href="https://instagram.com/khendylquilts"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faInstagram}
									className="text-black text-2xl"
									aria-hidden="true"
								/>
							</a>
							<a
								href="https://ca.linkedin.com/in/kendallmccollum"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="text-black text-2xl"
									aria-hidden="true"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default FooterComponent