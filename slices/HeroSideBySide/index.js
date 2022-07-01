import React from 'react'
import { RichText } from 'prismic-reactjs'

const HeroSideBySide = ({ slice }) => (
	<section className="grid md:grid-cols-2 items-center">
		<div className="max-w-screen-sm mx-auto p-8">
			<h1 className="text-xl font-black">
				{RichText.asText(slice.primary.title)}
			</h1>

			<RichText render={slice.primary.description} />
		</div>

		<figure>
			<img src={slice.primary.image.url} alt={slice.primary.image.alt} />
		</figure>
	</section>
)

export default HeroSideBySide
