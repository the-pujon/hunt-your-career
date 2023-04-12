import React from "react";

import "./Blog.scss";

const Blog = () => {
  return (
    <div className="blog ">
      <div className="blog__title">Blog</div>
      <div className="question__ans">
        <div className="blog__question">
          1. When you should use Context API?
        </div>
        <div className="blog__ans">
          If I need to pass data to deep component then I should use Context
          API.
        </div>
      </div>
      <div className="question__ans">
        <div className="blog__question">2. What is custom hook?</div>
        <div className="blog__ans">
          If we made our own hook for utilize our project or project source with
          maintaining proper hook rules then this hook called custom hook.
        </div>
      </div>
      <div className="question__ans">
        <div className="blog__question">
          3. What is useRef? What is the usage of it?
        </div>
        <div className="blog__ans">
          UseRef is a built in react hook that give us access a DOM directly.
          <br />
          Specially useRef used for access DOM directly but expect that it also
          used for store a mutable value that does not re-render when updated.
        </div>
      </div>
    </div>
  );
};

export default Blog;
