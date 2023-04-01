import Markdown from 'markdown-to-jsx';

function Post() {
    return (
        <div className='Post'>
            <Markdown>
                # First header from post This is content from first header
            </Markdown>
        </div>
    );
}

export default Post;
