

function Eachmovie({movie}) {

    const convertDateToString = (date)=>{
        const dateObj = new Date(date)
        const dateStr = dateObj.toLocaleString("en-us",{
        dateStyle:"long",
        });
        return dateStr;
    }
    console.log(convertDateToString("2022-12-14"))
  return (
    <div className="movie">
        <img src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt ={movie.title} className="movie-img" />
        <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="movie-info-date">{convertDateToString(movie.release_date)}</p>
        <p>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Eachmovie