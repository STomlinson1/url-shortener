import axios from 'axios';

import { ApiData } from '../types';

class ShrtcodeService {
	endpoint: string;

	constructor() {
		this.endpoint = 'https://api.shrtco.de/v2/shorten';
	}

	public async create(url: string) {
		const response = await axios.get(this.endpoint, {
			params: {
				url
			}
		});

		return response.data as ApiData;
	}
}

export default new ShrtcodeService();
