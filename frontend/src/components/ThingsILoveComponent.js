import React from "react";

function ThingsILoveComponent() {
	const sectionTitle = "Things I Love";
	const sectionSubtitle =
		"These are just some of the things that make me feel alive!";

	const thingsILove = [
		{
			src: "/assets/images/image_fabric_store.png",
			srcset: `/assets/images/image_fabric_store.png 500w,
             /assets/images/image_fabric_store@2x.png 1000w,
             /assets/images/image_fabric_store@3x.png 1500w`,
			alt: "A geometric quilt with purple fabric_store.",
			title: "Fabric!",
			description: "Here I am shopping at the famous Mood in New York",
		},
		{
			src: "/assets/images/image_glassblowing.jpg",
			srcset: `/assets/images/image_glassblowing.jpg 500w,
             /assets/images/image_glassblowing@2x.jpg 1000w,
             /assets/images/image_glassblowing@3x.jpg 1500w`,
			alt: "A geometric quilt with purple fabric_store.",
			title: "Glass art!",
			description:
				"In 2021 I sent myself to Glass Camp at Blown Away Studios in Elora, Ont.",
		},
		{
			src: "/assets/images/image_the_dogs.png",
			srcset: `/assets/images/image_the_dogs.png 500w,
             /assets/images/image_the_dogs@2x.png 1000w,
             /assets/images/image_the_dogs@3x.png 1500w`,
			alt: "A geometric quilt with purple fabric_store.",
			title: "My dogs!",
			description:
				"From left to right: Penny, Ladybug and Mr. Spock. These three are my forever audience",
		},
		{
			src: "/assets/images/image_carrots.png",
			srcset: `/assets/images/image_carrots.png 500w,
             /assets/images/image_carrots@2x.png 1000w,
             /assets/images/image_carrots@3x.png 1500w`,
			alt: "A geometric quilt with purple fabric_store.",
			title: "Gardening!",
			description:
				"I grew these rainbow carrots in my terrace container garden. I've learned a lot about plants in the last few years",
		},
	];

	return (
		<section className="container max-w-7xl mx-auto bg-black w-full py-16">
			<div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-center">
				<h2 className="text-5xl text-white lg:text-mmpink uppercase py-12  md:pb-12 px-4 font-oswald lg:mx-8">
					{sectionTitle}
				</h2>
				<p className="text-mmpink text-2xl lg:text-xl lg:text-white px-4 lg:mx-12 font-robotoslab w-full lg:w-3/12 lg:text-right">
					{sectionSubtitle}
				</p>
			</div>
			<div className="grid lg:grid-flow-col lg:grid-cols-8 justify-start items-start lg:mx-8">
				{thingsILove.map((item, index) => (
					<div
						key={index}
						className="flex flex-col justify-center items-center lg:col-span-2"
					>
						<div className="w-10/12 mx-auto mt-24 lg:mt-0 px-12 sm:aspect-w-3 aspect-h-4">
							<img
								className="max-w-full h-auto object-cover"
								src={item.src}
								srcset={item.srcset}
								sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
								alt={item.alt}
								loading="lazy"
							></img>
						</div>
						<h3 className="w-10/12 px-16 lg:px-2 font-robotoslab text-mmpink text-lg lg:text-sm text-center mt-4">
							<span className="font-bold text-2xl lg:text-lg block mb-2">
								{item.title}
							</span>
							{item.description}
						</h3>
					</div>
				))}
			</div>
		</section>
	);
}

export default ThingsILoveComponent;
