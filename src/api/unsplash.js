import Axios from 'axios';

export default Axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 793fc22d4fe4c54b0fe155d839e34a095b3cbffba59dc706bb01b6a71c7d7f77'
	}
});
