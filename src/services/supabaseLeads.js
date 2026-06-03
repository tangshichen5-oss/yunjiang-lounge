export const leadFieldLabels = {
  createdAt: '提交时间',
  followStatus: '跟进状态',
  name: '联系人姓名',
  contact: '联系方式',
  company: '公司名称 / 单位名称',
  city: '所在城市',
  scene: '使用场景',
  recipient: '赠送或接待对象',
  budget: '预算范围',
  quantity: '预计采购数量',
  customization: '包装或定制需求',
  deliveryTime: '期望交付时间',
  note: '其他补充说明',
  recommendedPlan: '初步推荐方案',
  reason: '需求判断',
  liquorSuggestion: '酒体方向',
  packageSuggestion: '包装方向',
  communicationFocus: '沟通重点',
  warnings: '注意事项',
};

export const leadListFields = [
  'createdAt',
  'followStatus',
  'name',
  'contact',
  'company',
  'city',
  'recommendedPlan',
  'budget',
  'quantity',
];

export const leadDetailFields = [
  'createdAt',
  'followStatus',
  'name',
  'contact',
  'company',
  'city',
  'scene',
  'recipient',
  'budget',
  'quantity',
  'customization',
  'deliveryTime',
  'note',
  'recommendedPlan',
  'reason',
  'liquorSuggestion',
  'packageSuggestion',
  'communicationFocus',
  'warnings',
];

export const followStatuses = ['新线索', '已联系', '已报价', '已成交', '暂缓', '无效'];

function getSupabaseConfig() {
  return {
    url: import.meta.env.VITE_SUPABASE_URL,
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    table: import.meta.env.VITE_SUPABASE_LEADS_TABLE || 'leads',
  };
}

function getHeaders(anonKey, extra = {}) {
  return {
    apikey: anonKey,
    Authorization: `Bearer ${anonKey}`,
    'Content-Type': 'application/json',
    ...extra,
  };
}

function formatArrayValue(value) {
  if (Array.isArray(value)) return value;
  if (!value) return [];
  return String(value).split('；').filter(Boolean);
}

export function formatLeadValue(value) {
  if (Array.isArray(value)) return value.join('；');
  if (!value) return '未填写';
  if (typeof value === 'string') return value;
  return String(value);
}

export function formatLeadDate(value) {
  if (!value) return '未填写';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString('zh-CN', { hour12: false });
}

export function buildLeadData(demand, result, createdAt = new Date().toISOString()) {
  return {
    createdAt,
    followStatus: '新线索',
    name: demand.name?.trim() || '',
    contact: demand.contact?.trim() || '',
    company: demand.company?.trim() || '',
    city: demand.city?.trim() || '',
    scene: demand.scene?.trim() || '',
    recipient: demand.recipient?.trim() || '',
    budget: demand.budget?.trim() || '',
    quantity: demand.quantity?.trim() || '',
    customization: demand.customization?.trim() || '',
    deliveryTime: demand.delivery || '暂不确定',
    note: demand.note?.trim() || '',
    recommendedPlan: result?.primary?.title || '',
    reason: result?.reason || '',
    liquorSuggestion: result?.wine || '',
    packageSuggestion: result?.package || '',
    communicationFocus: formatArrayValue(result?.focus),
    warnings: formatArrayValue(result?.notes),
  };
}

async function supabaseRequest(path, options = {}) {
  const { url, anonKey, table } = getSupabaseConfig();

  if (!url || !anonKey) {
    if (import.meta.env.DEV && options.allowDevPreview) {
      return options.devPreviewValue;
    }
    throw new Error('SUPABASE_CONFIG_MISSING');
  }

  const response = await fetch(`${url.replace(/\/$/, '')}/rest/v1/${table}${path}`, {
    ...options,
    headers: getHeaders(anonKey, options.headers),
  });

  if (!response.ok) {
    const error = new Error('SUPABASE_REQUEST_FAILED');
    error.status = response.status;
    throw error;
  }

  return response.json().catch(() => null);
}

export async function submitLead(leadData) {
  if (import.meta.env.DEV && (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY)) {
    console.info('[云酱会客厅 Supabase 线索预览]', leadData);
    return { ok: true, preview: true };
  }

  const result = await supabaseRequest('', {
    method: 'POST',
    headers: {
      Prefer: 'return=representation',
    },
    body: JSON.stringify(leadData),
  });

  return { ok: true, data: result?.[0] || null };
}

export async function fetchLeads() {
  return supabaseRequest('?select=*&order=createdAt.desc', {
    method: 'GET',
    allowDevPreview: true,
    devPreviewValue: [],
  });
}
