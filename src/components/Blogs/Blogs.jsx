import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddBookmark, handleMarkRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, []);

    return (
        <>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleAddBookmark={handleAddBookmark}
                    handleMarkRead={handleMarkRead}
                ></Blog>)
            }
        </>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired
}

export default Blogs;