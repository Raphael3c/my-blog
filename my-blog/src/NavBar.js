import {Link} from 'react-router-dom'

export function Navbar(){
    return(
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/articles-list">Articles</Link>
                    </li>
                </ul>
            </nav>
    )
}