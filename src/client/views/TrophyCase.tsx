import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';



const TrophyCase = () => {
	return (
		<>
			<Navbar />

			<div>
				<h2 className="title m-3 text-center">Your Trophy Case</h2>
			</div>

			<div className='d-flex row m-3 flex-wrap justify-content-center'>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/3DaysInARowTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete Tasks 3 Days in a Row!</h5>
						<p className="card-text">Earned: 8/7/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/3Difficulty3Trophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete 3 Difficulty-3 Tasks!</h5>
						<p className="card-text">Earned: 8/7/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/3DifficultyTaskTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete 3 Difficulty-1 Tasks!</h5>
						<p className="card-text">Earned: 8/8/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/5DaysInARowTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">5 Days in a Row!</h5>
						<p className="card-text">Earned: 8/9/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/5Difficulty3TaskTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete 5 Difficulty-3 Tasks!</h5>
						<p className="card-text">Earned: 8/9/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/5DifficultyTaskTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete 5 Difficulty-1 Tasks!</h5>
						<p className="card-text">Earned: 8/10/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/7DaysInARowTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">7 Days in a Row!</h5>
						<p className="card-text">Earned: 8/11/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/7Difficulty1TaskTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete 7 Difficulty-1 Tasks!</h5>
						<p className="card-text">Earned: 8/11/21</p>
					</div>
				</div>

				<div className="card m-3 col-3" id="trophy-card">
					<img src="../images/7Difficulty3TaskTrophy.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Complete 7 Difficulty-3 Tasks!</h5>
						<p className="card-text">Earned: 8/12/21</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default TrophyCase;
