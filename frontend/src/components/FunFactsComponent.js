import React from 'react'

function FunFactsComponent() {
  return (
		<section className="container max-w-7xl mx-auto bg-black w-full">
			<div className="w-full mx-auto text-center">
				<h2 className="text-3xl text-white uppercase py-12 md:pt-24 md:pb-12 mx-auto font-oswald">
					Three Fun Facts
				</h2>
			</div>
			<div className="flex flex-col lg:grid lg:grid-flow-row lg:grid-cols-3 lg:gap-8 lg:px-12 md:w-full md:mx-auto space-y-4 md:space-y-8 lg:space-y-0 lg:w-full">
				<div className="mx-12 lg:mx-0 border-[1px] border-mmpurple px-4 py-16 flex flex-row justify-center lg:col-span-3">
					<div className="flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-col lg:grid-cols-9 lg:justify-center lg:items-center">
						<p className="block font-oswald text-white text-4xl uppercase lg:px-8  font-extrabold lg:col-span-3">
							I used to be a therapist
						</p>
						<p className="text-mmpink font-robotoslab text-md normal-case text-left lg:col-span-6 lg:px-12">
							I earned my MA in Mental Health Counseling from
							Loyola Marymount University in 2014; for my
							practicum I worked providing therapy to low-income
							children and adults.
						</p>
					</div>
				</div>
				<div className="mx-12 lg:mx-0 border-[1px] border-mmpurple px-4 py-16 flex flex-row justify-center lg:col-span-3">
					<div className="flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-col lg:grid-cols-9 lg:justify-center lg:items-center">
						<p className="block font-oswald text-white text-4xl uppercase lg:px-8  font-extrabold lg:col-span-3">
							I'm a pattern tester
						</p>
						<p className="text-mmpink font-robotoslab text-md normal-case text-left lg:col-span-6 lg:px-12">
							Primarily, I test foundation paper piecing patterns,
							but I've tested some traditionally pieced quilts as
							well. See my art blelow!
						</p>
					</div>
				</div>
				<div className="mx-12 lg:mx-0 border-[1px] border-mmpurple px-4 py-16 flex flex-row justify-center lg:col-span-3">
					<div className="flex flex-col space-y-8 lg:space-y-0 lg:grid lg:grid-flow-col lg:grid-cols-9 lg:justify-center lg:items-center">
						<p className="block font-oswald text-white text-4xl uppercase lg:px-8  font-extrabold lg:col-span-3">
							I love making stuff
						</p>
						<p className="text-mmpink font-robotoslab text-md normal-case text-left lg:col-span-6 lg:px-12">
							I'm primarily a quilter, foundation paper piecing is
							my favorite, but creating in general is my jam. From
							improved processes to IKEA furniture I am happiest
							when I'm making.
						</p>
					</div>
				</div>
			</div>
		</section>
  );
}

export default FunFactsComponent