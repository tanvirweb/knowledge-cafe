import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navigation from './components/Navigation/Navigation'

function App() {
	return (
		<>
			<Navigation></Navigation>
			<div className='flex max-w-7xl px-4 mx-auto'>
				<main className='w-9/12'>
					<Blogs></Blogs>
				</main>
				<aside className='w-3/12'>

				</aside>
			</div>
		</>
	)
}

export default App
