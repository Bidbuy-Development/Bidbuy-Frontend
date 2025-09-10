const StatsCard = ({
  title,
  value,
  bgColor = "bg-[#89609636]",
  hasNotification,
  notificationCount,
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-8 relative`}>
      {hasNotification && (
        <div className="absolute top-2 right-2">
          {notificationCount ? (
            <div className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center shadow-lg shadow-red-500/50">
              {notificationCount > 99 ? "99+" : notificationCount}
            </div>
          ) : (
            <div className="bg-red-500 rounded-full w-3 h-3"></div>
          )}
        </div>
      )}
      <h3 className="text-md mb-2">{title}</h3>
      <p className="text-2xl">{value}</p>
    </div>
  );
};

export default StatsCard;
