import IncomeChart from "@components/IncomeChart";

const transactionsData = [
  { amount: 720, date: "Jan", id: "1" },
  { amount: 560, date: "Dec", id: "2" },
  { amount: 980, date: "Dec", id: "3" },
  { amount: 720, date: "Jan", id: "1" },
  { amount: 560, date: "Dec", id: "2" },
  { amount: 980, date: "Dec", id: "3" },
];

const Income = () => {
  const total = transactionsData.reduce((prev, curr) => prev + curr.amount, 0);
  return (
    <div className="h-full px-6">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold">Income</h1>
        <p className="text-xs text-textGray">
          Last <span className="underline font-semibold">30 hours</span>
        </p>
        <p className="text-3xl font-bold">${total}</p>
      </div>
      <div className="h-52 mt-8">
        <IncomeChart data={transactionsData} />
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="font-bold tracking-wide">Your transactions (6)</p>
        <p className="text-xs">
          Last <span className="underline">30 hours</span>
        </p>
      </div>
      <div className="flex flex-col gap-2 mt-4 overflow-scroll h-1/3">
        {transactionsData.map((data) => (
          <div className="flex bg-white p-4 items-center justify-between gap-4 rounded-lg">
            <span className="text-lg font-semibold tracking-wide">
              ${data.amount}
            </span>
            <span className="text-sm text-textGray">{data.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Income;
