
import './App.css';
import Card from './Component/Card';
import Sidebar from './Component/Sidebar';
import company1 from "./Assest/card1.png"
import notification from "./Assest/notification 03.png"
import setting from "./Assest/Vector.png"
import profile from "./Assest/profile.png"

function App() {
  return (
    <div className="App " >
    <div className='flex justify-between px-[20px] py-[10px] bg-[#fff]'>
            <div>
            </div>
            <div className='flex items-center gap-[10px]'>
              <img src={notification} alt='' style={{height:"18px",width:"18px"}}/>
              <img src={setting} alt='' style={{height:"18px",width:"18px"}}/>
              <img src={profile} alt='' style={{height:"34px",width:"34px"}}/>
            </div>
          </div>
      <div className='flex flex-col sm:flex-row md:flex-row  w-full bg-[#f4f6f8] gap-[3px] '>
        <div className='w-full sm:w-5/12 md:w-5/12 rounded-r-[10px]'>
          <Sidebar/>
        </div>
        <div className='bg-[#f4f6f8]'>
          <div className='p-[30px]'>
            <div className='flex justify-between pb-[20px]'>
              <p className='font-[600] text-[24px]'>Projects</p>
              <button className='bg-gradient-to-r text-[14px] from-blue-500 to-cyan-500 text-[#fff] rounded-md p-[10px]'>+ Add Project</button>
            </div>
            <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              <Card name="Glenmark" img={company1} />
              <Card name="Glenmark" img={company1}/>
              <Card name="Glenmark" img={company1}/>
              <Card name="Glenmark" img={company1}/>
              <Card name="Glenmark" img={company1}/>
              <Card name="Glenmark" img={company1}/>
              <Card name="Glenmark" img={company1}/>
              <Card name="Glenmark" img={company1}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
