import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {title, cover_img, author, author_img, tags, reading_time, posted_date} = blog;
    return (
        <article className='space-y-3'>
            <figure className='aspect-video'>
                <img className='rounded-md object-cover w-full h-full' src={cover_img} alt="" />
            </figure>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <img className='rounded-full' src={author_img} alt={author} width='40' />
                    <div>
                        <p className='text-sm font-bold'>{author}</p>
                        <p className='text-xs'>{posted_date}</p>
                    </div>
                </div>
                <p className='text-zinc-600 font-bold'>{reading_time}min to read</p>
            </div>
            <h2 className='text-2xl from-black font-bold'>{title}</h2>
            <p className='text-zinc-600 font-bold'>{ tags.map(tag => `#${tag} `) } </p>
        </article>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;