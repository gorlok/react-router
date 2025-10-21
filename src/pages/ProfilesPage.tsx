import { Link, NavLink, Outlet } from "react-router-dom"

import '../index.css'

export default function ProfilesPage() {

    const profiles = [1, 2, 3, 4, 5]

    return (
        <div>
            <div className="page">
                <div className="profiles">
                    {profiles.map((profileId) => (
                        <NavLink key={profileId} to={`/profiles/${profileId}`}
                            className={({ isActive }) => isActive ? 'profile-link active' : 'profile-link'}
                        >
                            Profile {profileId}
                        </NavLink>
                    ))}
                </div>
                <Outlet />
            </div>
            <Link to={"/"}>Back to home</Link>
        </div>
    );
}
