import { useCallback, useEffect, useState } from 'react'
import client from '../../utils/client'
import { POSTS_API } from '../../constants/api'

const usePosts = () => {
  const [posts, setPosts] = useState([])

  const getPosts = useCallback(async () => {
    try {
      const { data } = await client.get(POSTS_API)
      setPosts(data)
    } catch (e) {
      console.log('Something went wrong')
    }
  }, [])

  useEffect(() => {
    getPosts().then()
  }, [getPosts])

  return {
    posts,
  }
}

export default usePosts
