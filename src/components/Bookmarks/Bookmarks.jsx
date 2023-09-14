import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <>
            <p className='bg-slate-200 rounded-md p-3 mb-3 font-bold text-center text-red-700'>Total reading time: {readingTime}</p>
            <div className='bg-slate-200 rounded-md space-y-3 p-3'>
                <h3 className='text-center font-bold'>Display Bookmarks</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;