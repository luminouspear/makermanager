import React from "react";

function ShowcaseComponent() {
	return (
		<section className="container max-w-7xl mx-auto bg-black w-full">
			<div className="lg:grid lg:grid-flow-col lg:grid-cols-9 lg:mt-16 lg:mx-4 lg:justify-center ">
				<div className="w-full mx-auto text-center lg:text-left lg:col-span-3 lg:flex lg:justify-center lg:items-center">
					<h2 className="text-5xl text-mmpink uppercase py-12 md:pt-24 md:pb-12 mx-auto font-oswald lg:mx-8">
						Here's a showcase of my creative work{" "}
					</h2>
				</div>
				<div className="mx-8 grid grid-flow-col grid-rows-6 lg:grid-rows-2 lg:col-span-6 lg:grid-flow-row lg:grid-cols-3 gap-8 lg:gap-8">
					<img
						className="max-w-full h-auto object-cover"
						src={"/assets/images/image_mountains.jpg"}
						srcset="/assets/images/image_mountains.jpg 500w,
                                    /assets/images/image_mountains@2x.jpg 1000w,
                                    /assets/images/image_mountains@3x.jpg 1500w"
						sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
						alt="A geometric quilt with purple mountains."
					></img>
					<img
						className="max-w-full h-auto object-cover"
						src={"/assets/images/image_night_lemur.jpg"}
						srcset="/assets/images/image_ 500w,
                                    /assets/images/image_night_lemur@2x.jpg 1000w,
                                    /assets/images/image_night_lemur@3x.jpg 1500w"
						sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
						alt="The night lemur, a foundation paperpiece pillowtop."
					></img>
					<img
						className="max-w-full h-auto object-cover"
						src={"/assets/images/image_rocket.jpg"}
						srcset="/assets/images/image_rocket.jpg 500w,
                                    /assets/images/image_rocket@2x.jpg 1000w,
                                    /assets/images/image_rocket@3x.jpg 1500w"
						sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
						alt="A cute rocketship baby quilt."
					></img>
					<img
						className="max-w-full h-auto object-cover"
						src={"/assets/images/image_leopard.jpg"}
						srcset="/assets/images/image_leopard.jpg 500w,
                                    /assets/images/image_leopard@2x.jpg 1000w,
                                    /assets/images/image_leopard@3x.jpg 1500w"
						sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
						alt="A floral big cats leopard."
					></img>
					<img
						className="max-w-full h-auto object-cover"
						src={"/assets/images/image_cactus.png"}
						srcset="/assets/images/image_cactus.png 500w,
                                    /assets/images/image_cactus@2x.png 1000w,
                                    /assets/images/image_cactus@3x.png 1500w"
						sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
						alt="A patterend cactus and flower quilt in terra cotta orange."
					></img>
					<img
						className="max-w-full h-auto object-cover"
						src={"/assets/images/image_porthole_sewing.jpg"}
						srcset="/assets/images/image_porthole_sewing.jpg 500w,
                                    /assets/images/image_porthole_sewing@2x.jpg 1000w,
                                    /assets/images/image_porthole_sewing@3x.jpg 1500w"
						sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
						alt="A geometric quilt with purple mountains."
					></img>
				</div>
			</div>
		</section>
	);
}

export default ShowcaseComponent;
