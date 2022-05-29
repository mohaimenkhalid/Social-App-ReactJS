import React from 'react';
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import ProfileImage from '../../img/profileImg.jpg'

const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="profileImages">
                <img src={Cover}/>
                <img src={ProfileImage}/>
            </div>
            <div className="profileName">
                <span>Mohaimen Khalid</span>
                <span>Frontend Developer</span>
            </div>
            <div className="followStatus">
                <hr />
                <div>
                    <div className="follow">
                        <span>6,890</span>
                        <span>Following</span>
                    </div>
                    <div className="v-line"></div>
                    <div className="follow">
                        <span>6</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>My Profile</span>
        </div>
    );
};

export default ProfileCard;
