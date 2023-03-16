import React from "react";

function HeroComponent() {
	return (
		<section className="container max-w-7xl mx-auto bg-black w-full">
			<div className="flex flex-col lg:flex-row mx-0">
				<div className="  bg-mmpink h-auto w-full lg:w-4/12">
					<div className="w-3/4 lg:w-3/4 mx-auto my-24 lg:my-32">
						<img
							className=" max-w-full h-auto rounded-full object-cover"
							src={"/assets/images/image_kendall_hero.png"}
							srcset="
                                        /assets/images/image_kendall_hero.png 500w,
                                        /assets/images/image_kendall_hero@2x.png 1000w,
                                        /assets/images/image_kendall_hero@3x.png 1500w
                                    "
							sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 1500px"
							alt="Kendall McCollum, Maker Manager"
						></img>
					</div>
				</div>
				<div className="w-full lg:px-16 lg:py-32 lg:w-8/12 font-oswald text-white  font-bold uppercase pt-8 px-4">
					<h1 className="text-4xl md:text-7xl">
						Hi everyone,
						<br /> my name is <br />
						<span className="text-mmpink text-6xl md:text-9xl">
							Kendall <br />
							McCollum
						</span>{" "}
					</h1>
					<p className="font-robotoslab font-extrabold normal-case text-xl md:text-3xl pt-8">
						I'm a Maker Manager, and a Quilter
					</p>
				</div>
			</div>
		</section>
	);
}

export default HeroComponent;
