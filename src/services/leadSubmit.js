export const sheetColumns = [
  '提交时间',
  '跟进状态',
  '联系人姓名',
  '联系方式',
  '公司名称',
  '所在城市',
  '使用场景',
  '赠送对象',
  '预算范围',
  '预计数量',
  '定制需求',
  '期望交付',
  '其他说明',
  '初步推荐方案',
  '需求判断',
  '酒体方向',
  '包装方向',
  '沟通重点',
  '注意事项',
];

export function buildLeadData(demand, result, createdAt = new Date().toLocaleString('zh-CN', { hour12: false })) {
  return {
    createdAt,
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
    communicationFocus: result?.focus || [],
    warnings: result?.notes || [],
    followStatus: '新线索',
  };
}

export function leadDataToSheetRow(leadData) {
  return {
    提交时间: leadData.createdAt,
    跟进状态: leadData.followStatus,
    联系人姓名: leadData.name,
    联系方式: leadData.contact,
    公司名称: leadData.company,
    所在城市: leadData.city,
    使用场景: leadData.scene,
    赠送对象: leadData.recipient,
    预算范围: leadData.budget,
    预计数量: leadData.quantity,
    定制需求: leadData.customization,
    期望交付: leadData.deliveryTime,
    其他说明: leadData.note,
    初步推荐方案: leadData.recommendedPlan,
    需求判断: leadData.reason,
    酒体方向: leadData.liquorSuggestion,
    包装方向: leadData.packageSuggestion,
    沟通重点: Array.isArray(leadData.communicationFocus) ? leadData.communicationFocus.join('；') : leadData.communicationFocus,
    注意事项: Array.isArray(leadData.warnings) ? leadData.warnings.join('；') : leadData.warnings,
  };
}

export async function submitLeadToSheet(leadData) {
  const directWebhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL;
  const endpoint = directWebhookUrl || '/api/leads';
  const payload = {
    columns: sheetColumns,
    row: leadDataToSheetRow(leadData),
    leadData,
  };

  if (import.meta.env.DEV && !directWebhookUrl) {
    console.info('[云酱会客厅线索提交预览]', payload);
    return { ok: true, preview: true };
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = new Error('LEAD_SUBMIT_FAILED');
    error.status = response.status;
    throw error;
  }

  return response.json().catch(() => ({ ok: true }));
}
