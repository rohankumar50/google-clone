import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import Mic from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { actionType } from '../dataLayer/Reducer';
import { useStateValue } from '../dataLayer/StateProvider';

const Search = ({ hideButton = false }) => {
	const [ {}, dispatch ] = useStateValue();
	const [ input, setInput ] = useState('');
	const history = useHistory();

	const search = (e) => {
		e.preventDefault();
		console.log(input);

		dispatch({
			type: actionType.SET_SEARCH_TERM,
			term: input
		});

		history.push('/search');
	};

	return (
		<form className="search">
			<div className="search_input">
				<SearchIcon className="search_inputicon" />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<Mic className="search_inputicon" />
			</div>

			{!hideButton ? (
				<div className="search_buttons">
					<Button onClick={search} type="submit" variant="contained" color="primary">
						Google Search
					</Button>
					<Button variant="contained" color="primary">
						I'am Feeling Lucky
					</Button>
				</div>
			) : (
				<div className="search_buttons_hidden">
					<Button onClick={search} type="submit" variant="contained" color="primary">
						Google Search
					</Button>
					<Button variant="contained" color="primary">
						I'am Feeling Lucky
					</Button>
				</div>
			)}
		</form>
	);
};

export default Search;
