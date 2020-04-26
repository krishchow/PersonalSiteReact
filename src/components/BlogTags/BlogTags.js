import React, { Component } from 'react';

class BlogTags extends Component {
    render() {
        return (
            <div class="post_tag">
                {this.props.tags.map((tag, index) => {
                    if (tag.active) return <div key={`tags ${index}`} className="active">{tag.desc}</div>
                    else return <div key={`tags ${index}`} >{tag.desc}</div>
                })}
            </div>
        );
    }
}

export default BlogTags;