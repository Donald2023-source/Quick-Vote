export const Pending = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="h-3 w-3 bg-primary/50 rounded-full" />
      <h2 className="font-medium">Pending</h2>
    </div>
  );
};

export const Completed = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="h-3 w-3 bg-primary rounded-full" />
      <h2 className="font-medium">Completed</h2>
    </div>
  );
};
