import "../styles/searchBox.css";
import { FiSearch } from "react-icons/fi";

function SearchBox({ value, onChange, onSearch }) {
	return (
		<div className="search-box">
			<input
				type="text"
				placeholder="Digite um usuário do Github"
				value={value}
				onChange={onChange}
			/>
			<button onClick={onSearch}>
				<FiSearch size={25} />
			</button>
		</div>
	);
}

export default SearchBox;
