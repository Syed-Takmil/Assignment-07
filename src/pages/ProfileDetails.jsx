



import { useLoaderData, useParams } from 'react-router';
import ProfileCard from '../Components/ProfileCard';
import EachProfileDetails from '../Components/EachProfileDetails';

const ProfileDetails = () => {
const {id}=useParams();
const Profiles=useLoaderData();

const ExpectedProfile=Profiles.find(profile=>profile.id===Number(id));


    return (
        <div>
           {
          ExpectedProfile ? (
          <EachProfileDetails profile={ExpectedProfile}/>
          ) : (
            <p>Profile not found</p>
          )}
        </div>
    );
};

export default ProfileDetails;