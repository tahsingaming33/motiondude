const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated floating shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#FBB130]/10 animate-float" 
           style={{ animationDelay: "0s", animationDuration: "8s" }} />
      
      <div className="absolute top-40 right-20 w-24 h-24 rotate-45 bg-[#1BB6F9]/10 animate-float"
           style={{ animationDelay: "1s", animationDuration: "10s" }} />
      
      <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full bg-[#FC787D]/10 animate-float"
           style={{ animationDelay: "2s", animationDuration: "12s" }} />
      
      <div className="absolute top-1/3 right-1/4 w-28 h-28 rotate-12 bg-[#00DAC5]/10 animate-float"
           style={{ animationDelay: "1.5s", animationDuration: "9s" }} />
      
      <div className="absolute bottom-20 right-1/3 w-36 h-36 rounded-full bg-[#FBB130]/10 animate-float"
           style={{ animationDelay: "3s", animationDuration: "11s" }} />
      
      <div className="absolute top-1/2 left-1/3 w-20 h-20 rotate-45 bg-[#1BB6F9]/10 animate-float"
           style={{ animationDelay: "0.5s", animationDuration: "7s" }} />

      {/* Additional shapes for variety */}
      <div className="absolute top-3/4 left-1/2 w-24 h-24 rounded-full bg-[#FC787D]/10 animate-float"
           style={{ animationDelay: "2.5s", animationDuration: "10s" }} />
      
      <div className="absolute top-10 right-1/2 w-32 h-32 rotate-12 bg-[#00DAC5]/10 animate-float"
           style={{ animationDelay: "1s", animationDuration: "13s" }} />
    </div>
  );
};

export default BackgroundShapes;
