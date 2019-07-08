import React, { Component } from 'react'
import { fetchPosts } from '../actions/postActions'
import { connect} from 'react-redux'
import PropTypes from 'prop-types';
 class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        }

    }
    componentDidMount(){
        //出发action操作
        this.props.fetchPosts()
    }
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))

        return (
            <div>
                <h1>POSTs组件</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
  }

const mapStateToProps = state =>({
    posts:state.postsii.items
})
export default connect(mapStateToProps,{fetchPosts})(Posts)