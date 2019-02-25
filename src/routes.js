import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PostList from './containers/post-list'
import PostForm from './containers/post-form'
import Post from './containers/post'
import NotFound from './components/notFound'

class Routes extends Component {
    render() {
        return (
            <Router>
              <div>
                <Switch>
                    <Route path="/" exact component={PostList} />
                    <Route path="/create-post" exact component={PostForm} />
                    <Route path="/post/:id" exact component={Post} />
                    <Route component={NotFound} />
                </Switch>
              </div>
            </Router>
          )
    }
}

export default Routes;