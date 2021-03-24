import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ArticlesListPage } from './pages/ArticlesListPage';
import { ArticlePage } from './pages/ArticlePage';
import { Navbar } from './NavBar';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div id="page-body">
          <Switch>
            <Route path='/' exact component={HomePage}/> 
            <Route path='/about' component={AboutPage}/> 
            <Route path='/articles-list' component={ArticlesListPage}/>   
            <Route path='/article/:name' component={ArticlePage}/>  
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
