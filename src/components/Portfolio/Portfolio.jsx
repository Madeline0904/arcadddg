import LightBox from 'yet-another-react-lightbox'
import { RowsPhotoAlbum } from 'react-photo-album'
import 'react-photo-album/rows.css'
import { useState } from 'react'
import Video from 'yet-another-react-lightbox/plugins/video'
import 'yet-another-react-lightbox/styles.css'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import 'yet-another-react-lightbox/plugins/captions.css'
import { slides } from './slides'
import './portfolio.css'

export default function Portfolio() {
	const [index, setIndex] = useState(-1)
	return (
		<>
			<section id='portfolio' class='portfolio bg-light py-5'>
				<h2 class='section-title'>portfolio</h2>
				<div class='underline'></div>
				<RowsPhotoAlbum
					photos={slides}
					targetRowHeight={150}
					onClick={({ index: current }) => setIndex(current)}
					render={{
						wrapper: ({ style, ...rest }) => (
							<div
								style={{
									...style,
									borderRadius: padding > 2 ? '4px' : 0,
									boxShadow:
										spacing + padding > 0
											? '0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)'
											: 'none',
									transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
								}}
								{...rest}
							/>
						),
					}}
				/>
				<LightBox
					index={index}
					slides={slides}
					open={index >= 0}
					close={() => setIndex(-1)}
					plugins={[Captions, Video]}
					captions={{ showToggle: true, descriptionTextAlign: 'center', descriptionMaxLines: 3 }}
					video={{
						controls: true,
						autoPlay: true,
						loop: false,
						muted: true,
					}}
				/>
			</section>
		</>
	)
}
