import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';
const ImageList = (props) => {
	const zdjecia = props.zdjecia.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return (
		<div>
			<div>Znaleziono: {props.zdjecia.length} zdjęć.</div>
			<div className="image-list">{zdjecia}</div>
		</div>
	);
};

export default ImageList;
