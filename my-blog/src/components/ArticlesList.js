import { Link } from "react-router-dom";


export function ArticlesList({ articles }){
    return (
        <>
            {articles.map((article,key) => (
                <Link className="article-list-item" to={`/article/${article.name}`}  key={key}>
                    <h3>{article.title}</h3>
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
            ))}
        </>
    )
}