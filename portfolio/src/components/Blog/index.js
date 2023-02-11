import Post from './Post'
import './index.scss'
import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
const content = `\`\`\`python 
console.log("hello"); 
\`\`\``
SyntaxHighlighter.registerLanguage('python', python)
const Blog = () => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="logo">
            <strong>My Blog Tutorials</strong>
          </div>
        </div>
      </header>
      <main className="main">
        <Post />
        {/* <ReactMarkdown>```js console.log("hello"); ```</ReactMarkdown> */}
      </main>
    </>
  )
}

export default Blog
