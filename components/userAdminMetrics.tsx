type RoleMetric = {
  _count: number;
  role: string;
};

type Props = {
  totalUsers: number;
  newUsers: {
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
  userByRole: RoleMetric[];
  totalAdmins: number;
  newAdmins: {
    today: number;
    thisWeek: number;
    thisMonth: number;
  };
  adminsByRole: RoleMetric[];
};

const formatRole = (role: string) =>
  role
    .toLowerCase()
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

const KpiCard = ({ label, value }: { label: string; value: string | number }) => (
  <div className="rounded-xl border bg-white p-4 shadow-sm transition hover:shadow-md">
    <p className="text-md text-center font-semibold text-gray-500">{label}</p>
    <p className="mt-1 text-center text-2xl font-bold text-gray-800">{value}</p>
  </div>
);

const RoleList = ({ title, items }: { title: string; items: RoleMetric[] }) => (
  <div className="rounded-xl border bg-white p-6 shadow-sm">
    <h4 className="mb-4 text-center text-xl font-semibold text-gray-700">{title}</h4>
    <ul className="space-y-2 text-sm text-gray-800">
      {items.map((item) => (
        <li
          key={item.role}
          className="flex justify-between border-b border-b-white hover:border-b hover:border-b-gray-500"
        >
          <span>{formatRole(item.role)}</span>
          <span className="font-medium">{item._count}</span>
        </li>
      ))}
    </ul>
  </div>
);

const UserAdminMetrics: React.FC<Props> = ({
  totalUsers,
  newUsers,
  userByRole,
  totalAdmins,
  newAdmins,
  adminsByRole,
}) => {
  return (
    <div className="mt-10 space-y-12 px-4 md:px-8">
      <section>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          <KpiCard label="Total Users" value={totalUsers} />
          <KpiCard label="New Users This Week" value={newUsers.thisWeek} />
          <KpiCard label="Total Admins" value={totalAdmins} />
          <KpiCard label="New Admins This Week" value={newAdmins.thisWeek} />
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <RoleList title="User Roles" items={userByRole} />
          <RoleList title="Admin Roles" items={adminsByRole} />
        </div>
      </section>
    </div>
  );
};

export default UserAdminMetrics;
