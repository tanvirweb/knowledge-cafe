import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import { useState } from 'react';

function App() {
	const [bookmarks, setBookmarks] = useState([]);
	const [readingTime, setReadingTime] = useState(0);

	const handleAddBookmark = (bookmark) => {
		const newBookmarks = [...bookmarks, bookmark];
		setBookmarks(newBookmarks);
	}

	const handleMarkRead = (time) => {
		const newTime = readingTime + time;
		setReadingTime(newTime);
	}

	return (
		<>
			<Navigation></Navigation>
			<div className='md:flex max-w-7xl gap-8 px-4 mx-auto mb-5'>
				<main className='md:w-8/12 space-y-12'>
					<Blogs handleAddBookmark={handleAddBookmark} handleMarkRead={handleMarkRead} ></Blogs>
				</main>
				<aside className='md:w-4/12'>
					<Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
				</aside>
			</div>
		</>
	)
}

export default App
