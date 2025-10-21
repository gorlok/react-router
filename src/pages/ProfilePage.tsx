import { useParams } from "react-router-dom";

export default function ProfilePage() {

    const { profileId } = useParams<{ profileId: string }>();

    return (
        <div>
            <p>This is the profile page of the user {profileId}.</p>
        </div>
    );
}