import {Area, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, CartesianGrid} from 'recharts';

const data = [
    { month: 'Январь', profit: 80000 },
    { month: 'Февраль', profit: 90000 },
    { month: 'Март', profit: 100000 },
    { month: 'Апрель', profit: 95000 },
    { month: 'Май', profit: 100000 },
    { month: 'Июнь', profit: 95000 },
    { month: 'Июль', profit: 100000 },
    { month: 'Август', profit: 155311 },
    { month: 'Сентябрь', profit: 100000 },
    { month: 'Октябрь', profit: 90000 },
    { month: 'Ноябрь', profit: 95000 },
    { month: 'Декабрь', profit: 105000 },
];

const ProfitChart = () => {
    return (
        <div className="p-4 bg-white shadow-xl rounded-[30px] space-y-5">
            <div className="flex items-center gap-[5px]">
                <h2 className="text-[30px]">Прибыль</h2>
                <div className="flex items-center">
                    <button className="rounded-[10px] text-[16px] py-1 px-8 border shadow-xl">ГОД</button>
                </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="50%" stopColor="#679689" stopOpacity={0.9}/>
                            <stop offset="95%" stopColor="#306556" stopOpacity={0.4}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false}/>
                    <YAxis axisLine={false} tickLine={false} ticks={[50000, 75000, 100000, 200000]} tickFormatter={(value) => `${value / 1000}k`}/>
                    <Tooltip formatter={(value) => `${value}K`} />
                    <Area type="linear" dataKey="profit" stroke="#2D8069" fillOpacity={1} strokeWidth={3} fill="url(#colorProfit)"  dot={{ fill: '#2D8069', r: 4 }}
                          activeDot={{ r: 6 }} />
                    <Line type="linear" dataKey="profit" stroke="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ProfitChart;
