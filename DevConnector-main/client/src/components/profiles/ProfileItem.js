import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
    profile: {
        
        status,
        company,
        location,
        skills, 
        user
      }
  }) => {
    // console.log(user);
    // console.log("user");
  return (
    
    <div className='profile bg-light'>
      {user ? <img src={user.avatar} alt='' className='round-img' />: <div></div>} 
      <div>
         {user ? <h2>{user.name}</h2> : <div></div>}
        <p>
          {status} {company && <span> at {company}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        {user ?
        <Link to={`/profile/${user._id}`} className='btn btn-primary'>
          View Profile
        </Link>
        : <div></div>}
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check' /> {skill}
          </li>
        ))}
      </ul>
    </div>
    // <div>Profiles</div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;