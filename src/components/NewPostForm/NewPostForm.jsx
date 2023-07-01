import { Component } from 'react';
import * as postsAPI from '../../utilities/posts-api';

export default class SignUpForm extends Component {
  state = {
    category: '',
    title: '',
    content: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };
  
  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { category, title, content } = this.state;
    // Perform validation if needed
    if (!category || !title || !content) {
        // Handle validation error
        return;
    }

    try {
        // retrieve user
        const { user } = this.props;
        const postData = { category, title, content, user };
        const createdPost = await postsAPI.createPost(postData);
        const successMessage = createdPost.message;
        console.log(createdPost);
        alert(JSON.stringify(createdPost));
        console.log(successMessage);

        this.setState({
            category: '',
            title: '',
            content: '',
            error: ''
        });

    } catch (error) {
        this.setState({ error: 'Creating post failed - Try Again' });
    }

  };

  render() {
    const { category, title, content } = this.state;

    return (
        <div className="new-post-form-container">
            <form onSubmit={this.handleSubmit} className="new-post-form">
                <div className="new-post-form-group">
                    <select name="category" value={category} onChange={this.handleChange} className="category-select">
                        <option value="">Choose a category</option>
                        <option value="top">Top Lane</option>
                        <option value="jungle">Jungle</option>
                        <option value="mid">Mid Lane</option>
                        <option value="adc">ADC</option>
                        <option value="support">Support</option>
                    </select>
                </div>
                <div className="new-post-form-group">
                    <input type="text" name="title" value={title} onChange={this.handleChange} required placeholder="Title" className="new-post-title" />
                </div>
                <div className="new-post-form-group">
                    <textarea name="content" value={content} onChange={this.handleChange} required className="new-post-content" placeholder="Text" />
                </div>
                <div className="new-post-form-group">
                    <button type="submit" className="create-post-btn">Create your post</button>
                </div>
            </form>
        </div>
    );
  }
}