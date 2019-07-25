import React, { Component} from 'react'
import PostData from '../data/posts.json'

class PostList extends Component {
    render () {
        return (
            <div>
                <h1>Agreements</h1>
                {PostData.map((postDetail, index) => {
                    return <div>
                        <h1>{postDetail.title}</h1>
                        <h1>{postDetail.content}</h1>
                    </div>
                })}
            </div>
        )
    }
}

export default PostList