import React from 'react';

const ImageList = (props) => {
	console.log(props.zdjecia);
	return <div>Znaleziono: {props.zdjecia.length} zdjęć.</div>;
};

export default ImageList;
