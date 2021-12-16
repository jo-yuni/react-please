import propTypes, { array } from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div className={styles.all}>
            <img src={coverImg} alt={title} />
            <div className={styles.introduce}>
                <h2>
                    <Link to={`/${id}`}>{title}</Link>
                </h2>
                <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul>
                    {genres.map((g) => (
                        <li key={g}>{array.length > 2 ? `${array(2)}...` : g}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;