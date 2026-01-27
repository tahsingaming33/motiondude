const AvailabilityBadge = () => {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 shadow-soft">
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary shadow-glow"></span>
      </div>
      <span className="text-sm text-foreground font-medium">Available for Project</span>
    </div>
  );
};

export default AvailabilityBadge;
