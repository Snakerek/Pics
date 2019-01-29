import React, { Component } from 'react';

export default class ImageCard extends Component {
	constructor(props) {
		super(props);
		this.imageRef = React.createRef(); //utworzenie referencji do obiektu modelu DOM
		this.state = { spans: 0 };
	}
	componentDidMount() {
		this.imageRef.current.addEventListener('load', this.setSpans); //załadowanie obiektu powoduje wywołanie eventListenera 'load'
		//console.log(this.imageRef.current.clientHeight);
	}

	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		const spans = Math.ceil(height / 10);
		this.setState({ spans });
	};
	render() {
		const { description, urls } = this.props.image;
		return (
			<div style={{ gridRowEnd: `span ${this.state.spans}` }}>
				<img ref={this.imageRef} alt={description} src={urls.regular} />
			</div>
		);
	}
}