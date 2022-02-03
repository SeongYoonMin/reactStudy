import PropTypes from "prop-types";

function MovieComponent({coverImg, title, summary, genres}) {
    return <div>
    <img src = {coverImg} alt={title}/>
    <h2 style={{fontSize: "40px", color: "rgb(255, 193, 181)"}}>{title}</h2>
    <p style={{color : "gray"}}>{summary}</p>
    <ul>
        <h4>장르</h4>
        {genres.map(g => <p key={g}>- {g}</p>)}
    </ul>
    <hr />
    <br />
</div>
}

MovieComponent.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieComponent;