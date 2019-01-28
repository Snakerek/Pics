import React from 'react';

const ImageList = (props) => {
	const zdjecia = props.zdjecia.map(({ id, description, urls }) => {
		return <img key={id} src={urls.small} alt={description} />;
	});
	return (
		<div>
			<div>Znaleziono: {props.zdjecia.length} zdjęć.</div>
			<div>{zdjecia}</div>
		</div>
	);
};

export default ImageList;
