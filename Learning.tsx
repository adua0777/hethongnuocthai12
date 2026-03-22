import ChartCard from "../components/ChartCard";
import { data } from "../data/mockData";
import { Activity, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  const stats = [
    { label: "Chỉ số AQI", value: "42", status: "Tốt", color: "text-emerald-500", icon: Activity },
    { label: "Hiệu suất xử lý", value: "94%", status: "Ổn định", color: "text-blue-500", icon: ShieldCheck },
    { label: "Năng lượng tiêu thụ", value: "1.2k kWh", status: "Tiết kiệm", color: "text-amber-500", icon: Zap },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 animate-in fade-in duration-500">
      <header className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Môi Trường</h1>
        <p className="text-slate-500">Giám sát thời gian thực hệ thống xử lý chất thải.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-slate-50 ${stat.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500">{stat.label}</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 ${stat.color}`}>
                    {stat.status}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ChartCard data={data} title="Phân tích tỷ lệ chất thải hệ thống" />
      
      <div className="bg-slate-900 text-white p-8 rounded-3xl overflow-hidden relative">
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Mục tiêu bền vững 2026</h2>
          <p className="text-slate-400 mb-6">
            Chúng tôi cam kết giảm thiểu 30% lượng khí thải carbon và tối ưu hóa quy trình xử lý nước thải thông qua công nghệ AI mới nhất.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">
            Xem báo cáo chi tiết
          </button>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl -mr-32 -mt-32 rounded-full"></div>
      </div>
    </div>
  );
}
