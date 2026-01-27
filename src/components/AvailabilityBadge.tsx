const AvailabilityBadge = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="relative flex items-center justify-center">
        <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-primary opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
      </div>
      <span className="text-foreground/80 font-medium">Available for Project</span>
    </div>
  );
};

export default AvailabilityBadge;
