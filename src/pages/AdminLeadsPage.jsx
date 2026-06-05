import { RefreshCw, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import {
  fetchLeads,
  formatLeadDate,
  formatLeadValue,
  leadDetailFields,
  leadFieldLabels,
  leadListFields,
} from '../services/supabaseLeads.js';

const leadsAdminEnabled = import.meta.env.VITE_ENABLE_LEADS_ADMIN === 'true';

function LeadValue({ field, value }) {
  const displayValue = field === 'createdAt' ? formatLeadDate(value) : formatLeadValue(value);
  return <>{displayValue}</>;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState([]);
  const [selectedLead, setSelectedLead] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const sortedLeads = useMemo(() => leads || [], [leads]);

  const loadLeads = async () => {
    if (!leadsAdminEnabled) return;

    setLoading(true);
    setError('');
    try {
      const data = await fetchLeads();
      setLeads(Array.isArray(data) ? data : []);
    } catch {
      setError('线索加载失败，请检查 Supabase 环境变量和表权限配置。');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (leadsAdminEnabled) {
      loadLeads();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <main className="admin-page">
      <section className="admin-shell">
        <div className="admin-heading">
          <div>
            <p className="eyebrow">Leads Admin</p>
            <h1>客户线索后台</h1>
            <p>查看方案建议页同步的商务礼酒需求。当前后台需通过环境变量启用，后续可接入登录保护。</p>
          </div>
          <button className="soft-link dark admin-refresh" type="button" onClick={loadLeads} disabled={!leadsAdminEnabled}>
            <RefreshCw size={17} />
            刷新线索
          </button>
        </div>

        {error && <div className="admin-alert">{error}</div>}

        <div className="admin-table-card">
          {!leadsAdminEnabled ? (
            <div className="admin-empty">后台线索查看未启用。</div>
          ) : loading ? (
            <div className="admin-empty">正在加载客户线索...</div>
          ) : sortedLeads.length === 0 ? (
            <div className="admin-empty">当前还没有客户线索。</div>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    {leadListFields.map((field) => (
                      <th key={field}>{leadFieldLabels[field]}</th>
                    ))}
                    <th>操作</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedLeads.map((lead) => (
                    <tr key={lead.id || `${lead.createdAt}-${lead.contact}`}>
                      {leadListFields.map((field) => (
                        <td key={field}>
                          <LeadValue field={field} value={lead[field]} />
                        </td>
                      ))}
                      <td>
                        <button className="admin-detail-button" type="button" onClick={() => setSelectedLead(lead)}>
                          查看详情
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {selectedLead && (
        <div className="lead-detail-backdrop" role="presentation" onClick={() => setSelectedLead(null)}>
          <aside className="lead-detail-panel" role="dialog" aria-modal="true" aria-label="线索详情" onClick={(event) => event.stopPropagation()}>
            <div className="lead-detail-head">
              <div>
                <p className="eyebrow">Lead Detail</p>
                <h2>线索详情</h2>
              </div>
              <button className="menu-toggle detail-close" type="button" aria-label="关闭详情" onClick={() => setSelectedLead(null)}>
                <X size={20} />
              </button>
            </div>
            <dl className="lead-detail-list">
              {leadDetailFields.map((field) => (
                <div key={field}>
                  <dt>{leadFieldLabels[field]}</dt>
                  <dd>
                    <LeadValue field={field} value={selectedLead[field]} />
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      )}
    </main>
  );
}
