import { useEffect, useState } from "react";
import TextImageBlock from "../components/TextImageBlock";

type BlogPost = {
  id: number;
  title: string;
  content: string;
  image_url: string;
  timestamp: string;
};

const BlogFeed = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch("http://localhost:8001/get-blogs")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="w3-content w3-padding-64" style={{ maxWidth: "1200px" }}>
      {posts.map((post, index) => (
        <TextImageBlock
          key={post.id}
          title={post.title}
          text={post.content}
          image={`http://localhost:8001${post.image_url}`} // Replace with dynamic image path if you have one
          reverse={index % 2 === 1}
          background={index % 2 === 1 ? "w3-light-grey" : undefined}
        />
      ))}
    </div>
  );
};

export default BlogFeed;
