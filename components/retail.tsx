type Props = {
  data: {
    [key: string]: number;
  };
};

const retail: React.FC<Props> = ({ data }) => {
  const cardStyle = `
    flex flex-col items-start justify-center
    rounded-xl border border-gray-200 bg-white p-6
    shadow-sm hover:shadow-md transition hover:bg-blue-50
  `;

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, (c) => c.toUpperCase())
      .replace(/_/g, ' ')
      .trim();
  };

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 md:px-0">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className={cardStyle}>
          <h4 className="text-md font-semibold tracking-wide text-gray-500">{formatKey(key)}</h4>
          <p className="mt-1 text-xl font-bold text-gray-800">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default retail;
