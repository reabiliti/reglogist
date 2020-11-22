import PostRow from './PostRow/PostRow'
import usePosts from './usePosts'

const Posts = () => {
  const { posts } = usePosts()

  return (
    <div className='posts'>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>

        <tbody>
          {posts.map((post) => (
            <PostRow key={post.id} post={post} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Posts
