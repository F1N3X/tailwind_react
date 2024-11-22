import './App.css';
import Catalogs from './components/Catalogs';
import CreateCatalogCard from './components/cards/CreateCatalogCard';
import InfoCard from './components/cards/InfoCard';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex-auto flex text-black w-full phone:flex-col">
          <div className="aside p-30 bg-1">
            <Title title="TAILWIND" />
          </div>
          <div className="bg-2 flex-1">
            <div className='p-16 border-2 border-5'>
              <Catalogs />
            </div>
            <div className='m-8 flex flex-wrap gap-2.5'>
              <CreateCatalogCard />
              <InfoCard title="Christmas 2024" labels={["Sneakers", "boots"]} date="12.27.2024" numberProducts="254" />
              <InfoCard title="A very big title for a catalog with many thing" labels={["Sneakers", "boots", "Belt", "Socks", "+3"]} date="12.27.2024" numberProducts="254" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
