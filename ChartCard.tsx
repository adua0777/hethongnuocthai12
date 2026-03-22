import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { Download, FileText, Table as TableIcon } from "lucide-react";
import { data } from "../data/mockData";

export default function Data() {
  const contentRef = useRef<HTMLDivElement>(null);

  const exportPDF = () => {
    if (!contentRef.current) return;
    
    const element = contentRef.current;
    const opt = {
      margin: 10,
      filename: 'bao-cao-moi-truong.pdf',
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dữ liệu & Báo cáo</h1>
          <p className="text-slate-500">Xem chi tiết số liệu và xuất báo cáo định dạng PDF.</p>
        </div>
        <button 
          onClick={exportPDF}
          className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-slate-200"
        >
          <Download size={20} />
          Xuất báo cáo PDF
        </button>
      </div>

      <div ref={contentRef} id="content" className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-6">
          <div className="p-3 bg-blue-600 rounded-xl text-white">
            <FileText size={24} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Báo cáo tổng hợp chất thải</h2>
            <p className="text-sm text-slate-400">Ngày tạo: {new Date().toLocaleDateString('vi-VN')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="overflow-x-auto rounded-2xl border border-slate-100">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Loại chất thải</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Khối lượng (Tấn)</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Tỷ lệ</th>
                  <th className="px-6 py-4 text-sm font-bold text-slate-500 uppercase tracking-wider">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {data.map((item, idx) => {
                  const total = data.reduce((acc, curr) => acc + curr.value, 0);
                  const percentage = ((item.value / total) * 100).toFixed(1);
                  return (
                    <tr key={idx} className="hover:bg-slate-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-slate-800 flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-slate-600 font-mono">{item.value}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full" 
                              style={{ width: `${percentage}%`, backgroundColor: item.color }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold text-slate-400 w-10">{percentage}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold uppercase">
                          Đạt chuẩn
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <TableIcon size={18} className="text-blue-600" />
            Ghi chú hệ thống
          </h4>
          <p className="text-sm text-slate-500 leading-relaxed">
            Dữ liệu trên được tổng hợp từ các cảm biến IoT tại trạm xử lý trung tâm. Các chỉ số đều nằm trong ngưỡng an toàn theo quy chuẩn QCVN 40:2011/BTNMT về nước thải công nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
}
