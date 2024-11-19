import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";

function LatestBlog() {
  const LatestBlogsList = [
    {
      title: "Blog Title1",
      time: "9:35AM",
    },
    {
      title: "Blog Title2",
      time: "9:05AM",
    },
    {
      title: "Blog title3",
      time: "8:35AM",
    },
  ];

  const [latestblogs, setLatestBlogs] = useState(LatestBlogsList);

  return (
    <div>
      <ListGroup className="latest-blogs-list">
        {latestblogs.map((latestblog, index) => (
          <ListGroup.Item>
            <h6>
              <span>{latestblog.time}</span> {latestblog.title}
            </h6>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
export default LatestBlog;
