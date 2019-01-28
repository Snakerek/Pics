import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash'; //3rd party wykorzystywane do zapytań dla api przez ajax
import ImageList from './ImageList';
export default class App extends React.Component {
	state = {
		zdjecia: []
	};

	//Aby nie było problemu ze wskazaniem odpowiedniej wartości dla funkcji callback
	//najlepiej jest według mnie używać arrow functions:
	// [nazwa] = ([parametry]) => {[to co do wykonywania]};
	onSearchSubmit = async (term) => {
		//console.log(term); //wyświetlenie w konsoli wartości wyszukiwanej
		const odpowiedz = await unsplash.get('/search/photos', {
			params: { query: term }
		}); /*.then((odpowiedz) => {
			console.log(odpowiedz.data.results);
    });*/
		//console.log(odpowiedz.data.results);
		this.setState({ zdjecia: odpowiedz.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList zdjecia={this.state.zdjecia} />
			</div>
		);
		/* Do komponentu jako właściwość przekazujemy metodę */
	}
}
