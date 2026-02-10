import { useState } from 'react';
import { FlowerScene } from '@/app/components/FlowerScene';
import { DanceScene } from '@/app/components/DanceScene';

export default function App() {
  const [scene, setScene] = useState<'flower' | 'dance'>('flower');

  const handleFlowerClick = () => {
    setScene('dance');
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {scene === 'flower' && <FlowerScene onFlowerClick={handleFlowerClick} />}
      {scene === 'dance' && <DanceScene />}
    </div>
  );
}
