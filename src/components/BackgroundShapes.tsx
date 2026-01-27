const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Radial gradient overlay at top */}
      <div className="absolute inset-0 bg-radial-gradient" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Primary glow orb - top right */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl animate-float"
        style={{ 
          background: 'radial-gradient(circle, hsl(250, 85%, 65%) 0%, transparent 70%)',
          animationDuration: '15s',
        }} 
      />
      
      {/* Secondary glow orb - bottom left */}
      <div 
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl animate-float"
        style={{ 
          background: 'radial-gradient(circle, hsl(280, 75%, 55%) 0%, transparent 70%)',
          animationDuration: '20s',
          animationDelay: '5s',
        }} 
      />
      
      {/* Accent orb - mid section */}
      <div 
        className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl animate-float"
        style={{ 
          background: 'radial-gradient(circle, hsl(250, 85%, 65%) 0%, transparent 70%)',
          animationDuration: '18s',
          animationDelay: '3s',
        }} 
      />

      {/* Small floating dots */}
      <div 
        className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/40 animate-float"
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="absolute top-3/4 right-1/4 w-3 h-3 rounded-full bg-primary/30 animate-float"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />
      <div 
        className="absolute top-1/2 left-1/6 w-1.5 h-1.5 rounded-full bg-primary/50 animate-float"
        style={{ animationDuration: '12s', animationDelay: '4s' }}
      />
    </div>
  );
};

export default BackgroundShapes;
