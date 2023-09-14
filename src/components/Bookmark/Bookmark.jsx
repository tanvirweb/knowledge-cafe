import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    return (
        <h3 className='bg-slate-50 rounded-md p-3'>{bookmark.title}</h3>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;