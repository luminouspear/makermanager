import React from 'react'

function BackgroundComponent() {
  return (
		<section className="container max-w-7xl mx-auto bg-black w-full">
			<div className="w-full mx-auto text-center">
				<h2 className="text-3xl text-white uppercase py-12 md:pt-24 md:pb-12 mx-auto font-oswald">
					A Quick Background
				</h2>
			</div>
			<div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-9 lg:gap-8 lg:px-12 md:w-7/12 md:mx-auto space-y-4 md:space-y-8 lg:space-y-0 lg:w-full">
				<div className="mx-12 lg:mx-0 border-[1px] border-mmpurple p-8 flex justify-center lg:col-span-3">
					<p className="text-white font-oswald text-4xl uppercase text-center px-8 py-8">
						<span className="block font-robotoslab text-mmpink text-xl mb-8 font-extrabold">
							I'm based in
						</span>{" "}
						Barrie, Ontario right by the lake
					</p>
				</div>
				<div className="mx-12 lg:mx-0 border-[1px] border-mmpurple p-8 flex justify-center lg:col-span-3">
					<p className="text-white font-oswald text-4xl uppercase text-center px-8 py-8">
						<span className="block font-robotoslab text-mmpink text-xl mb-8 font-extrabold">
							I worked at
						</span>{" "}
						<span className="inline-block">Lynk Law, Inc</span>
						<span className="inline-block">
							Tumbleweed Day Camp
						</span>
					</p>
				</div>
				<div className="mx-12 lg:mx-0 border-[1px] border-mmpurple p-8 flex justify-center lg:col-span-3">
					<p className="text-white font-oswald text-4xl uppercase text-center px-8 py-8">
						<span className="block font-robotoslab text-mmpink text-xl mb-8 font-extrabold">
							My Roles Were
						</span>{" "}
						Client Manager; Assistant Director
					</p>
				</div>
			</div>
		</section>
  );
}

export default BackgroundComponent