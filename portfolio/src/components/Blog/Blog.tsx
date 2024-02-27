import Post from './Post/Post';

function Blog() {
    console.log(`App version: ${import.meta.env.REACT_APP_VERSION}`);
    return (
        <div className='Blog'>
            <h1>My Blog section</h1>
            <Post />
        </div>
    );
}

export default Blog;
