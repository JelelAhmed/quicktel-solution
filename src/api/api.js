import axios from "axios";


const QuicktelApi = axios.create({
  baseURL: 'http://localhost:4000',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': ''
	},
});

export default QuicktelApi;




