import React from 'react';
import './Home.css';
import Search from '../components/Search';
import { Link } from 'react-router-dom';
import { Apps } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

const Home = () => {
	return (
		<div className="home">
			<div className="home_header">
				<div className="home_left">
					<Link to="/about">About</Link>
					<Link to="/about">Store</Link>
				</div>

				<div className="homeheader_right">
					<Link to="/about">Gmail</Link>
					<Link to="/about">Images</Link>
					<Apps />
					<Avatar />
				</div>
			</div>

			{/* home body  🏡*/}

			<div className="home_body">
				<img
					src="https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
					alt=""
				/>
			</div>
			<div className="home_searchbody">
				<div className="home_inputContainer">
					<Search />
				</div>
			</div>
		</div>
	);
};

export default Home;
