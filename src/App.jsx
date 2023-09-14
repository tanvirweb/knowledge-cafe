import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navigation from './components/Navigation/Navigation'

function App() {
	return (
		<>
			<Navigation></Navigation>
			<div className='md:flex max-w-7xl gap-8 px-4 mx-auto'>
				<main className='md:w-8/12 space-y-12'>
					<Blogs></Blogs>
				</main>
				<aside className='md:w-4/12'>

				</aside>
			</div>
		</>
	)
}

export default App
