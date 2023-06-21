import React from 'react'

const InterviewSectionComponent = () => {
  return (
		<section className="container max-w-7xl mx-auto bg-black w-full md:pb-24">
			<div className="w-full mx-auto text-center">
				<h2 className="text-3xl text-white uppercase py-12 md:pt-24 md:pb-12 mx-auto font-oswald">
					My Video Interview
				</h2>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/YNHuSh0g7XA"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  className="w-3/4 h-[30rem] flex justify-center items-center align-middle mx-auto"
				></iframe>
			</div>{" "}
		</section>
  );
}

export default InterviewSectionComponent