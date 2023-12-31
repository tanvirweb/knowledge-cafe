import user from '../../assets/user.jpeg';
const Navigation = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl px-4 py-3 mb-5 mx-auto border-b border-t-cyan-950'>
            <h1 className='text-3xl font-bold'>Knowledge Cafe</h1>
            <img className='rounded-full' src={user} alt="User Profile" width='50' />
        </header>
    );
};

export default Navigation;