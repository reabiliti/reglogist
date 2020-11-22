import { object } from 'prop-types'

const PostRow = ({ post }) => {
  const { id, title, body } = post

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
    </tr>
  )
}

PostRow.propTypes = {
  post: object.isRequired,
}

export default PostRow
