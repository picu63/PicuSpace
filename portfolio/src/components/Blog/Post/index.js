import { useState, useEffect } from 'react'
import './index.css'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'

SyntaxHighlighter.registerLanguage('python', python)

const Post = () => {
  const [postContent, setPostcontent] = useState('')
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    import('./GettingStarted.md').then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    )
  }, [])

  const MarkdownComponents = {}

  return (
    <div className="article-wrapper">
      <article>
        <header>
          <div className="article__cover">
            {/* <img src={cover} alt="my-cover" /> */}
          </div>
        </header>
        <main>
          <ReactMarkdown components={MarkdownComponents}>
            {postContent}
          </ReactMarkdown>
        </main>
      </article>
    </div>
  )
}

export default Post
