import Post from './Post/Post'
import './index.scss'

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
      </main>
    </>
  )
}

export default Blog
