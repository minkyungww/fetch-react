import React, { useCallback, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";

// const App = () => {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((data) => {
//         setPost(data);
//       });
//   }, []);

//   return (
//     <div>
//     {post == null ? (
//       <div>로딩 중...</div>
//     ) : (
//     <Card style={{ width: "18rem" }}>
//       <Card.Header>Post 1 데이터</Card.Header>
//       <ListGroup variant="flush">
//         <ListGroup.Item>{post.userId}</ListGroup.Item>
//         <ListGroup.Item>{post.id}</ListGroup.Item>
//         <ListGroup.Item>{post.title}</ListGroup.Item>
//         <ListGroup.Item>{post.body}</ListGroup.Item>
//       </ListGroup>
//     </Card>
//   )}
//   </div>
//   )
// }
// export default App;

const App = () => {
  const [post, setPost] = useState();
  const [postId, setPostid] = useState(1);

  const test = useCallback(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,{method: "GET"})
      .then((data) => data.json())
      .then((data) => {
        setPost(data);
      });
  }, [postId]);

  useEffect(() => {
    test();
  }, [postId]);

  return (
    <div>
      {post == null ? (
        <div>로딩 중...</div>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Header>Post 1 데이터</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{post.userId}</ListGroup.Item>
            <ListGroup.Item>{post.id}</ListGroup.Item>
            <ListGroup.Item>{post.title}</ListGroup.Item>
            <ListGroup.Item>{post.body}</ListGroup.Item>
          </ListGroup>
        </Card>
      )}
      <button onClick={ () => setPostid((prev)=> (prev)+1)}>다음 글</button>
    </div>
  );
};
export default App;
