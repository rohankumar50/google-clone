import API_KEY from './keys';
import { useState, useEffect } from 'react';

const CONTEXT_KEY = 'eca6231262f2903c9';

const useGoogleSearch = (term) => {
	const [ data, setdata ] = useState(null);

	useEffect(
		() => {
			const fetchData = async () => {
				fetch(
					`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=${term}`
				)
					.then((response) => response.json())
					.then((result) => {
						setdata(result);
					});
			};

			fetchData();
		},
		[ term ]
	);

	return { data };
};

export default useGoogleSearch;
