import axios, { AxiosResponse } from 'axios';
import { showNotification } from '@/utils/notification';

export const getApi = async (url: string): Promise<AxiosResponse | null> => {
	const options = {
		method: 'GET',
		url,
		headers: {
			'X-CSRFToken': document.cookie.replace(
				/(?:(?:^|.*;\s*)csrftoken\s*\=\s*([^;]*).*$)|^.*$/,
				'$1'
			), // Extract CSRF token from cookies
			pragma: 'no-cache',
			'cache-control': 'no-cache',
		},
	};

	try {
		const response = await axios.request(options);
		return response;
	} catch (error: any) {
		const status = error?.response?.status || 0;
		const errorMessage = `
      <strong>${
				error.response?.statusText || 'Error'
			} - <i>${status}!</i></strong>
      ${error?.response?.data?.errors || ''}
      <br /><br />If this problem persists, please contact support at info@example.com.
    `;
		showNotification(errorMessage, 'error');
		return null;
	}
};
