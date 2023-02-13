import AboutMe from './components/About Me/AboutMe';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import './styles/main.css';

function App() {
  return(
      <div className="flex flex-1 flex-col items-center justify-start bg-galaxy-gif bg-cover bg-no-repeat h-screen max-w-[1780px] py-10">
          <Header />
        <div className="flex flex-col items-center justify-start my-16">
          <Navbar />
        </div>
        <AboutMe />
      </div>
  );
}

export default App
