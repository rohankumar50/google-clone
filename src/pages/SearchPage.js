import React from 'react';
import './SearchPage.css';
import { useStateValue } from '../dataLayer/StateProvider';
import useGoogleSearch from '../googleApi/useGoogleSearch';
import Response from '../googleApi/response';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import NewsIcon from '@material-ui/icons/Announcement';
import ImagesIcon from '@material-ui/icons/Image';
import ShoppingIcon from '@material-ui/icons/LocalOffer';
import MapsIcon from '@material-ui/icons/Map';
import MoreIcon from '@material-ui/icons/More';

const SearchPage = () => {
	const [ { term }, dispatch ] = useStateValue();
	// const { data } = useGoogleSearch(term);

	const data = Response;
	console.log(data);
	return (
		<div className="searchPage">
			<div className="searchPage_header">
				<Link to="/">
					<img
						className="searchPage_logo"
						src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
						alt=""
					/>
				</Link>
				<div className="searchPage_headerbody">
					<Search hideButton />
					<div className="tags">
						<div className="searchPage_optionsLeft">
							<div className="searchPage_options">
								<SearchIcon className="icon" />
								<Link to="/all">All</Link>
							</div>
							<div className="searchPage_options">
								<NewsIcon className="icon" />
								<Link to="/all">News</Link>
							</div>
							<div className="searchPage_options">
								<ImagesIcon className="icon" />
								<Link to="/all">Images</Link>
							</div>
							<div className="searchPage_options">
								<ShoppingIcon className="icon" />
								<Link to="/all">Shooping</Link>
							</div>
							<div className="searchPage_options">
								<MapsIcon className="icon" />
								<Link to="/all">Maps</Link>
							</div>
							<div className="searchPage_options">
								<MoreIcon className="icon" />
								<Link to="/all">More</Link>
							</div>
						</div>
						<div className="searchPage_optionsRight">
							<div className="searchPage_options">
								<Link to="/all">Setting</Link>
							</div>
							<div className="searchPage_options">
								<Link to="/all">Tools</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{true && (
				<div className="searchPage_resultBody">
					<p className="searchPage_resultCount">
						About {data.searchInformation.totalResults} reults ({data.searchInformation.formattedSearchTime}
						seconds)
					</p>
					{data.items.map((item) => (
						<div className="searchPage_results">
							<div>
								<div className="searchPage_resultLink">
									<a href={item.link}>{item.displayLink}</a>
								</div>
								<div className="searchPage_resultTitle">
									<a href={item.link}>
										<h3>{item.title}</h3>
									</a>
								</div>
								<p className="searchPage_resultSnippet">{item.snippet}</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SearchPage;
