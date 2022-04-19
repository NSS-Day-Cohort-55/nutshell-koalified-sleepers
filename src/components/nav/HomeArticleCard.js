import "./Home.css"

export const HomeArticleCard = ({singleArticle}) => {

    return (
      <>
        <div className="card">
          <div className="cardContent">
            <h3>{singleArticle.title}</h3>
            <p>Posted: {singleArticle.timestamp.slice(0, 10)}</p>
            <p>{singleArticle.synopsis}</p>
            <p>{singleArticle.url}</p>
            
          </div>
        </div>
      </>
    )

}