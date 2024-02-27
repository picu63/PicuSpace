import Markdown from 'markdown-to-jsx';

function Post() {
    return (
        <div className='Post'>
            <Markdown># First header from post</Markdown>
            <Markdown>This is description</Markdown>
        </div>
    );
}

export default Post;
