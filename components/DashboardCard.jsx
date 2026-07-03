// Reusable dashboard statistics card component
export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="card-bg border-soft hover-card overflow-hidden rounded-2xl shadow-sm">
      {/* Top blue line */}
      <div className="h-1 bg-blue-600"></div>

      <div className="flex items-center justify-between p-5">
        <div>
          {/* Card title */}
          <p className="text-muted text-sm font-medium">
            {title}
          </p>

          {/* Card value */}
          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>
        </div>

        {/* Card icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
          {icon}
        </div>
      </div>
    </div>
  );
}