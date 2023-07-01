import * as postsAPI from "../../utilities/posts-api";
import NewPostForm from '../../components/NewPostForm/NewPostForm';
import './NewPostPage.css';

export default function NewPostPage() {

  return (
    <>
      <main className="main-new-post">
        <h1 className="new-post-page-header">Create a post</h1>
        <hr />
        <NewPostForm />
      </main>
    </>
  );
}