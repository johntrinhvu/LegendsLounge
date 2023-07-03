import React, { Component } from 'react';
import { BiTrash } from 'react-icons/bi';
import * as postsAPI from '../../utilities/posts-api';

export default class EditPostForm extends Component {


  state = {
    editedPost: {
      category: this.props.post.category,
      title: this.props.post.title,
      content: this.props.post.content,
      id: this.props.post._id
    },
    titleHeight: 'auto',
    contentHeight: 'auto',
    showConfirmation: false, // track whether to show delete confirm or not
  };

  titleRef = React.createRef();
  contentRef = React.createRef();

  // changes height and width of content depending on how long it is
  adjustContentHeight =() => {
    this.adjustElementSize(this.contentRef);
  }

  componentDidMount() {
    this.adjustElementSize(this.titleRef);
    this.adjustElementSize(this.contentRef);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(
        (prevState) => ({
            editedPost: { ...prevState.editedPost, [name]: value },
        }),
        () => {
            if (name === 'title') {
                this.adjustElementSize(this.titleRef);
        
            } else if (name === 'content') {
                this.adjustContentHeight();
        
            }
        }
    );
  };

  handleDelete = () => {
    this.setState({ showConfirmation: true });
  }

  handleDeleteConfirm = async () => {
    // Make API call to delete post
    await postsAPI.deletePost(this.props.post.id);
    this.props.handleCancel();

  }

  handleDeleteCancel = () => {
    this.setState({ 
        showConfirmation: false },
        this.adjustContentHeight
     );

  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { editedPost } = this.state;

    try {
        // Make API call to update post
        const updatedPost = await postsAPI.updatePost(editedPost);

        this.props.updatePost(updatedPost);
    } catch(error) {
        console.error(error);
    }
  };

  adjustElementSize = ref => {
    const element = ref.current;
    element.style.height = 'auto';
    element.style.height = `${element.scrollHeight}px`;
  }

  onCancel = () => {
    this.props.handleCancel();
  }

  render() {
    const { editedPost, titleHeight, contentHeight, showConfirmation } = this.state;

    if (showConfirmation) {
        return (
            <div className="delete-confirmation-overlay">
                <div className="delete-confirmation-dialog">
                    <p className="delete-confirmation-paragraph">Are you sure you want to delete?</p>
                    <div className="delete-confirmation-buttons">
                        <button className="delete-confirm-button" onClick={this.handleDeleteConfirm}>
                            Yes, Delete
                        </button>
                        <button className="delete-cancel-button" onClick={this.handleDeleteCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
          );
    } else {

        return (
            <div className="edit-post-form-container">
            <form className="edit-post-form" onSubmit={this.handleSubmit}>
                <div className="edit-category-div">
                    <div className="edit-field-category">
                        <label className="edit-category">Category: </label>
                    </div>
                    <select name="category" className="edit-category-option" value={editedPost.category} onChange={this.handleChange}>
                        <option value="top">Top Lane</option>
                        <option value="jungle">Jungle</option>
                        <option value="mid">Mid Lane</option>
                        <option value="adc">ADC</option>
                        <option value="support">Support</option>
                    </select>
                    <button className="delete-post-button" title="Delete post" onClick={this.handleDelete}>
                        <BiTrash />
                    </button>
                </div>

                <div className="edit-title-div">
                    <div className="edit-field-title">
                        <label className="edit-title">Title: </label>
                    </div>
                    <input 
                        ref={this.titleRef}
                        style={{ height: titleHeight }}
                        type="text" 
                        className="edit-title-text" 
                        name="title" 
                        value={editedPost.title} 
                        onChange={this.handleChange} 
                        />
                </div>

                <div className="edit-content-div">
                    <div className="edit-field-content">
                        <label className="edit-content">Content: </label>
                    </div>
                    <textarea 
                        ref={this.contentRef}
                        style={{ height: contentHeight }}
                        className="edit-content-text" 
                        name="content" 
                        value={editedPost.content} 
                        onChange={this.handleChange} 
                        />
                </div>

                <div className="save-button-edit">
                    <button type="submit" className="save-changes-button">
                        Save Changes
                    </button>
                    <button type="button" className="cancel-button" onClick={this.onCancel}>
                        Cancel
                    </button>
                </div>

            </form>
        </div>
    );
    }
  }
}