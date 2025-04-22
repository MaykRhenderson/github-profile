import "../styles/userProfile.css";

function UserProfile({ user }) {
	return (
		<div className="user-profile">
			<img src={user.avatar_url} alt={user.name} />
			<div className="info">
				<h2>{user.name}</h2>
				<p>{user.bio}</p>
			</div>
		</div>
	);
}

export default UserProfile;
