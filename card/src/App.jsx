import { NeonGradientCard } from './components/ui/neon-gradient-card';

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-purple-800 space-x-6">
      {/* First Neon Gradient Card */}
      <NeonGradientCard className="max-w-md mx-auto text-center p-1 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h1 className="bg-clip-text text-5xl text-white font-extrabold">
            Premium
          </h1>
        </div>
        <div className="space-y-1 mb-10">
          <p className="text-6xl text-white font-bold mb-4">$99.99/yr</p>
          <p className="text-white text-xl">12 months access</p>
        </div>
        <div className="text-left space-y-3 mb-9 border-b-2">
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
              <span className="text-white font-semibold">Access to all AI models</span>
            </li>
            <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Unlimited Credits</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">No Watermarks</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full rounded-lg" checked readOnly />
           <span className="text-white font-semibold">Higher resolution outputs</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Priority image processing</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Priority cutomer support</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Access to Fee Credits Tools</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Access to all flux Models</span>
         </li>
          </ul>
        </div>
        <div>
          <button className="w-full rounded-lg px-8 py-3 text-lg font-semibold text-white shadow-md hover:opacity-90 focus:outline-none">
            Login to Buy Subscription
          </button>
        </div>
      </NeonGradientCard>

     {/* 2nd card */}
      <NeonGradientCard className="max-w-md mx-auto text-center p-1 space-y-6">
        <div className="text-center space-y-2 mb-6">
          <h1 className="bg-clip-text text-5xl text-white font-extrabold">
            Premium
          </h1>
        </div>
        <div className="space-y-1 mb-10">
          <p className="text-6xl text-white font-bold mb-4">$199.99/yr</p>
          <p className="text-white text-xl">12 months access</p>
        </div>
        <div className="text-left space-y-3 mb-9 border-b-2">
          <ul className="space-y-2">
            <li className="flex items-center">
              <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
              <span className="text-white font-semibold">Access to all AI models</span>
            </li>
        
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Unlimited Credits</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">No Watermarks</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full rounded-lg" checked readOnly />
           <span className="text-white font-semibold">Higher resolution outputs</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Priority image processing</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Priority cutomer support</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Access to Fee Credits Tools</span>
         </li>
         <li className="flex items-center">
           <input type="checkbox" className="mr-3 w-5 h-5 accent-green-400 rounded-full" checked readOnly />
           <span className="text-white font-semibold">Access to all flux Models</span>
         </li>
     
          </ul>
        </div>
        <div>
          <button className="w-full rounded-lg px-8 py-3 text-lg font-semibold text-white shadow-md hover:opacity-90 focus:outline-none">
            Login to Buy Subscription
          </button>
        </div>
      </NeonGradientCard>
    </div>
  );
}

export default App;
