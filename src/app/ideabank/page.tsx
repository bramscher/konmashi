import Sidebar from '@/components/dashboard/Sidebar';
import Canvas from '@/components/dashboard/Canvas';

export default function IdeabankPage() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex flex-1 p-8 gap-6">
        <div className="flex-1 md:w-1/2 h-full flex flex-col items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-2">Ideabank</h1>
            <p className="text-muted-foreground">This feature is coming soon. Stay tuned!</p>
          </div>
        </div>
        <div className="flex-1 md:w-1/2 h-full">
          <Canvas />
        </div>
      </div>
    </div>
  );
} 