import React, { useState } from 'react';
import { motion } from 'https://esm.sh/framer-motion@11.0.6';
import { Sparkles, Sword, Loader2, CheckCircle, XCircle } from 'https://esm.sh/lucide-react@0.363.0';

const App: React.FC = () => {
  const [isInjecting, setIsInjecting] = useState(false);
  const [injectionStatus, setInjectionStatus] = useState<'idle' | 'success' | 'failed' | 'loading'>('idle');

  const handleInjectSkin = () => {
    setIsInjecting(true);
    setInjectionStatus('loading');
    // Simulate injection process
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% chance of success for demonstration
      if (success) {
        setInjectionStatus('success');
      } else {
        setInjectionStatus('failed');
      }
      setIsInjecting(false);
    }, 3000); // Simulate a 3-second injection
  };

  const getButtonContent = () => {
    if (isInjecting) {
      return (
        <>
          <Loader2 className="animate-spin mr-2" size={20} />
          <span>Injecting Skin...</span>
        </>
      );
    }
    switch (injectionStatus) {
      case 'success':
        return (
          <>
            <CheckCircle className="mr-2" size={20} />
            <span>Injection Successful!</span>
          </>
        );
      case 'failed':
        return (
          <>
            <XCircle className="mr-2" size={20} />
            <span>Injection Failed. Retry?</span>
          </>
        );
      default:
        return (
          <>
            <Sparkles size={20} />
            <span>Activate Skin</span>
          </>
        );
    }
  };

  const getStatusMessage = () => {
    switch (injectionStatus) {
      case 'success':
        return <p className="text-green-400 mt-4 flex items-center justify-center"><CheckCircle className="mr-2" /> Thamuz Dark Lord skin assets prepared for deployment.</p>;
      case 'failed':
        return <p className="text-red-400 mt-4 flex items-center justify-center"><XCircle className="mr-2" /> Failed to process skin assets. Please try again.</p>;
      case 'loading':
        return <p className="text-blue-400 mt-4 flex items-center justify-center"><Loader2 className="animate-spin mr-2" /> Preparing skin assets...</p>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 to-black flex flex-col items-center justify-center p-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mb-8 text-center"
      >
        Thamuz Dark Lord Injector
      </motion.h1>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative w-full max-w-lg bg-zinc-900 rounded-lg shadow-2xl overflow-hidden border border-zinc-700"
      >
        <img
          src="https://source.unsplash.com/random/800x600/?fantasy,demon,dark"
          alt="Thamuz Dark Lord Skin"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>

        <div className="p-6 relative z-10">
          <h2 className="text-3xl font-semibold mb-2 flex items-center text-white">
            <Sword className="mr-3 text-red-500" size={30} />
            Thamuz: Lord of Gehenna
          </h2>
          <p className="text-zinc-300 mb-4">
            Unleash the true power of Thamuz with the exclusive Dark Lord skin. 
            Experience enhanced visuals and a menacing presence on the battlefield.
          </p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInjectSkin}
            disabled={isInjecting}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {getButtonContent()}
          </motion.button>

          {getStatusMessage()}

          <div className="mt-6 text-center text-zinc-500 text-sm">
            <p>Ready to deploy the custom Thamuz experience.</p>
            <p>For support, visit <a href="https://yanna-chatbot-ai.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">yanna-chatbot-ai.netlify.app</a></p>
          </div>
        </div>
      </motion.div>

      <footer className="mt-12 text-zinc-500 text-sm text-center">
        Powered by ChatMonkey
      </footer>
    </div>
  );
};

export default App;
