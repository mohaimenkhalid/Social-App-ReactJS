import React from 'react';
import './Home.css'
import ProfileSide from "../../components/ProfileSide/profileSide";

const Home = () => {
    return (
        <div className="home">
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="RightSide">Right Side</div>
        </div>
    );
};

export default Home;
