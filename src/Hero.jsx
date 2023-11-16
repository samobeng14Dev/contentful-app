import heroImg from "./assets/hero.svg";
const Hero = () => {
	return (
		<section className='hero'>
			<div className='hero-center'>
				<div className='hero-title'>
					<h1>Contenful CMS</h1>
					<p>
						Austin freegan marxism semiotics direct trade gastropub. Portland
						adaptogen organic mlkshk jawn blog. Deep v enamel pin schlitz, kogi
						aesthetic lo-fi live-edge cliche ugh meh keytar skateboard.
						Vibecession roof party truffaut pour-over affogato brunch helvetica
						chia, kale chips tote bag subway tile. Jawn everyday carry hashtag
						DSA wolf man braid.
					</p>
				</div>
				<div className='image-container'>
					<img
						src={heroImg}
						alt='woman and the browser'
						className='img'
					/>
				</div>
			</div>
		</section>
	);
};

export default Hero;
