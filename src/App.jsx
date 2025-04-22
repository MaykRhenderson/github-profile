import { useState } from "react";
import Background from "./components/Background";
import Section from "./components/Section";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import UserProfile from "./components/UserProfile";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";
import axios from "axios";

function App() {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const handleSearch = async () => {
		setLoading(true);

		try {
			setError(false);
			setUserData(null);

			const { data } = await axios.get(`https://api.github.com/users/${username}`);

			if (!data?.name) {
				throw new Error("Perfil inválido");
			}

			setUserData(data);
			setLoading(false);
		} catch {
			setError(true);
			setLoading(false);
		}
	};

	return (
		<Background>
			<Section>
				<Header />
				<SearchBox
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					onSearch={handleSearch}
				/>
				{loading && <Loading />}
				{error && <ErrorMessage />}
				{userData && <UserProfile user={userData} />}
			</Section>
		</Background>
	);
}

export default App;
