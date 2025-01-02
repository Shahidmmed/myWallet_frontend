import viteLogo from "/vite.svg";

const Dashboard = () => {
  return (
    <div className="flex-col w-full text-gray-500  justify-between items-center">
      <div>
        <div className=" w-full ">
          {/* card1 */}
          <div className="bg-white rounded-2xl py-10 flex flex-col lg:flex-row h-[80vh] ">
            <div className=" border-b-2 lg:border-r-2 flex-grow border-gray-100 p-10">
              <h4>Expenses v Savings</h4>
              Graph here
            </div>
            <div className=" px-10 h-full">
              <div className="flex flex-col justify-between h-full">
                <div className="pt-8 lg:pt-0">
                  <form className="max-w-sm mx-auto">
                    <select
                      id="countries"
                      className="shadow-md border-t-2 font-medium border-[#FFCC00] text-gray-900 outline-none cursor-pointer text-sm rounded-lg block w-full p-2.5"
                    >
                      <option defaultValue="Date Range">Date Range</option>
                      <option value="day">1 day</option>
                      <option value="week">1 week</option>
                      <option value="month">1 month</option>
                      <option value="year">1 year</option>
                    </select>
                  </form>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold">200</div>
                  <div className="text-sm font-medium  pt-2">Goals</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium  pt-2">
                    Transaction history
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
