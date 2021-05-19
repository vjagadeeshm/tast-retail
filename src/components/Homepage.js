import React from 'react';
import { BrowserRouter as Router,NavLink, Route} from "react-router-dom";
import Trendingmovies from "./Movies/Trendingmovies";
import Popularmovies from "./Movies/Popularmovies";
import Upcomingmovies from "./Movies/Upcomingmovies"; 

class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Router>
                <NavLink to={"/Homepage/Trendingmovies"} exact={true} strict >Trendingmovies</NavLink>
                <NavLink to={"/Homepage/Popularmovies"} exact={true} strict > Popularmovies</NavLink>
                <NavLink to={"/Homepage/Upcomingmovies"} exact={true} strict >Upcomingmovies</NavLink>

                
                <Route path={"/Homepage/Trendingmovies"} component={Trendingmovies} exact={true} strict></Route>
                <Route path={"/Homepage/Popularmovies"} component={Popularmovies} exact={true} strict></Route>
                <Route path={"/Homepage/Upcomingmovies"} component={Upcomingmovies} exact={true} strict></Route>

                </Router>
            </div>
        )
    }
}

export default Homepage
