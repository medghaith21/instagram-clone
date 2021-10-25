import React, { useState, useEffect } from "react"
import Post from "./Post"
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore"
import { db, storage } from "../firebase"

const Posts = () => {
  // const posts = [
  //   {
  //     id: 123,
  //     username: "dsff",
  //     userImg: "https://i.ytimg.com/vi/F21vhc_B0QU/maxresdefault.jpg",
  //     img: "https://i.ytimg.com/vi/F21vhc_B0QU/maxresdefault.jpg",
  //     caption: "creed is the best",
  //   },
  //   {
  //     id: 12,
  //     username: "dsff",
  //     userImg: "https://i.ytimg.com/vi/F21vhc_B0QU/maxresdefault.jpg",
  //     img: "https://i.ytimg.com/vi/F21vhc_B0QU/maxresdefault.jpg",
  //     caption: "creed is the best",
  //   },
  // ]

  const [posts, setPosts] = useState([])
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
