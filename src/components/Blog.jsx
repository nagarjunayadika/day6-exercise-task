import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";

function Blog() {
  const BlogsList = [
    {
      image:
        "https://www.sencha.com/wp-content/uploads/2023/08/Screenshot-2023-08-05-at-02.03.26.png",
      title: "Blog Title1",
      subtitle: "Blog Sub Title1",
      date: "09/08/1975",
      userimage: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
    {
      image:
        "https://careercollegeindia.com/blog/wp-content/uploads/2024/09/UI-UX-Designer-scaled.jpg",
      title: "Blog Title2",
      subtitle: "Blog Sub Title2",
      date: "23/10/1979",
      userimage: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
    {
      image:
        "https://www.smart-academy.in/wp-content/uploads/2020/11/SMART-ACADEMY-BLOG-POST-UI-DEVELOPER.jpg",
      title: "Blog title3",
      subtitle: "Blog Sub Title3",
      date: "02/09/1971",
      userimage: "https://cdn-icons-png.flaticon.com/512/919/919851.png",
    },
  ];

  const [blogs, setBlogs] = useState(BlogsList);

  return (
    <div className="profile-list-container">
      <Row>
        {blogs.map((blog, index) => (
          <Col key={index} xs={12}>
            <Card>
              <Card.Body>
                <Card.Img src={blog.image} />
                <Card.Text>
                  <div className="card-sub">
                    <Card.Img src={blog.userimage} />
                    <div className="card-details">
                      <p>{blog.subtitle}</p>
                      <p>{blog.date}</p>
                    </div>
                  </div>
                  <Card.Title>{blog.title}</Card.Title>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
export default Blog;
