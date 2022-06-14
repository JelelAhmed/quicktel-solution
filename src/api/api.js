import axios from "axios";


const QuicktelApi = axios.create({
  baseURL: 'https://dry-depths-52278.herokuapp.com/',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': ''
	},
});

export default QuicktelApi;




