const Blog = ({blog}) => {
    const {title, cover_img, author, author_img, tags, reading_time, posted_date, category} = blog;
    return (
        <article>
            <img src={cover_img} alt="" />
            <h2></h2>
        </article>
    );
};

export default Blog;