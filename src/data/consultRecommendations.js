export const plans = {
  thanks: {
    title: '企业客户答谢型礼盒方案',
    fit: '老客户维护、合作伙伴答谢、节庆礼赠、年度回访。',
    feature: '稳重、体面、适合批量礼赠，不需要过度张扬。',
    direction: '商务礼盒酒 + 企业祝福标签 + 节庆答谢文案 + 批量交付方案。',
    wine: '商务礼盒酒',
    package: '标准商务礼盒，可加入企业祝福标签和节庆答谢文案。',
  },
  reception: {
    title: '高端商务接待型品鉴方案',
    fit: '重要客户来访、商务宴请、会客厅品鉴、合作洽谈。',
    feature: '更重视现场体验、酒体品质、接待氛围和商务分寸。',
    direction: '品鉴标准酒 + 会客厅接待方案 + 专人讲解 + 后续礼盒转化。',
    wine: '品鉴标准酒或高端商务礼盒酒',
    package: '以品鉴体验和接待动线为主，包装不宜过度抢戏。',
  },
  signing: {
    title: '项目签约纪念型定制方案',
    fit: '项目签约、合作达成、周年纪念、重要节点留念。',
    feature: '强调纪念意义、专属编号、定制文案和礼盒仪式感。',
    direction: '企业定制酒 + 纪念编号 + 专属标签 + 签约纪念礼盒。',
    wine: '企业定制酒',
    package: '建议加入纪念编号、专属标签、签约或周年主题文案。',
  },
  association: {
    title: '商协会圈层活动型方案',
    fit: '商会年会、企业家交流、行业论坛、圈层活动、伴手礼。',
    feature: '强调统一形象、圈层认同、活动记忆点和批量展示效果。',
    direction: '活动伴手礼酒 + 统一外包装 + 商协会元素 + 活动主题文案。',
    wine: '商务礼盒酒或活动伴手礼酒',
    package: '统一外包装，适当加入活动主题、商协会元素和伴手礼识别。',
  },
  bulk: {
    title: '预算友好批量礼赠方案',
    fit: '采购数量较大、预算控制明确、节庆批量礼赠、员工福利。',
    feature: '控制成本、统一包装、快速交付、适合大批量使用。',
    direction: '标准品鉴酒或基础商务礼盒 + 简洁标签 + 批量采购方案。',
    wine: '品鉴标准酒或基础商务礼盒',
    package: '建议采用统一标准礼盒或简洁标签，控制复杂定制成本。',
  },
};

const sceneRules = [
  { key: 'thanks', words: ['客户答谢', '老客户', '合作伙伴', '中秋', '春节', '节庆', '年终'] },
  { key: 'reception', words: ['接待', '来访', '宴请', '会客', '品鉴', '洽谈'] },
  { key: 'signing', words: ['签约', '项目', '周年', '纪念', '合作达成', '开业'] },
  { key: 'association', words: ['商会', '协会', '论坛', '活动', '年会', '企业家'] },
  { key: 'bulk', words: ['员工', '福利', '批量', '团购', '数量多', '预算有限'] },
];

function includesAny(text, words) {
  return words.some((word) => text.includes(word.toLowerCase()));
}

function extractNumber(text) {
  const match = text.replace(/,/g, '').match(/\d+/);
  return match ? Number(match[0]) : null;
}

export function analyzeDemand(demand) {
  const allText = Object.values(demand).join(' ').toLowerCase();
  const scores = {
    thanks: 0,
    reception: 0,
    signing: 0,
    association: 0,
    bulk: 0,
  };

  sceneRules.forEach((rule) => {
    if (includesAny(allText, rule.words)) scores[rule.key] += 3;
  });

  const quantity = extractNumber(demand.quantity);
  const budgetNumber = extractNumber(demand.budget);
  const budgetUnknown = includesAny(demand.budget.toLowerCase(), ['暂不确定', '不知道', '未定', '不确定']);
  const customText = demand.customization.toLowerCase();
  const wantsCustom = includesAny(customText, ['logo', '企业元素', '祝福语', '标签', '编号', '礼盒定制']);
  const wantsStandard = includesAny(customText, ['不需要定制', '标准礼盒']);
  const customUnknown = includesAny(customText, ['还不确定', '暂不确定', '不确定']);

  if (quantity !== null) {
    if (quantity <= 10) scores.reception += 2;
    if (quantity > 10 && quantity <= 50) scores.thanks += 2;
    if (quantity > 50 && quantity <= 200) {
      scores.bulk += 2;
      scores.association += 1;
      scores.thanks += 1;
    }
    if (quantity > 200) scores.bulk += 4;
  }

  if (budgetUnknown) {
    scores.thanks += 1;
  } else if (budgetNumber !== null) {
    if (budgetNumber <= 5000 || includesAny(demand.budget.toLowerCase(), ['预算有限', '控制成本'])) scores.bulk += 2;
    if (budgetNumber >= 30000) {
      scores.signing += 2;
      scores.reception += 1;
    }
  }

  if (wantsCustom) scores.signing += 2;
  if (wantsStandard) scores.thanks += 1;
  if (includesAny(demand.recipient.toLowerCase(), ['重要客户', '贵宾', '核心客户'])) scores.reception += 1;

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const primaryKey = ranked[0][1] > 0 ? ranked[0][0] : 'thanks';
  const secondary = ranked
    .filter(([key, score]) => key !== primaryKey && score > 0)
    .slice(0, 2)
    .map(([key]) => plans[key].title);

  const notes = [];
  if (quantity === null) notes.push('你还没有填写明确采购数量，建议后续沟通时先确认数量范围，以便判断酒体和包装方案。');
  if (budgetUnknown || !demand.budget.trim()) notes.push('预算暂不确定时，可以先根据场景和赠送对象判断包装层级，再收敛预算区间。');
  if (demand.delivery === '15天内') notes.push('如果交付时间在15天内，不建议做复杂完整礼盒定制，优先考虑标准礼盒或简洁标签方案。');
  if (customUnknown) notes.push('包装或定制需求还不确定时，可先根据场景、数量和预算给出包装建议。');
  if (wantsCustom) notes.push('你填写了企业元素或定制需求，后续沟通时建议重点确认 logo、标签文案、祝福语和礼盒复杂度。');
  if (!demand.recipient.trim()) notes.push('建议补充赠送或接待对象，例如重要客户、合作伙伴、商协会嘉宾或内部员工。');

  const primary = plans[primaryKey];
  const reasonParts = [];
  if (demand.scene.trim()) reasonParts.push(`你填写的使用场景是“${demand.scene.trim()}”。`);
  if (demand.recipient.trim()) reasonParts.push(`对象偏向“${demand.recipient.trim()}”。`);
  if (quantity !== null) reasonParts.push(`预计数量约为 ${quantity} 瓶。`);
  if (!reasonParts.length) reasonParts.push('你还没有填写非常明确的场景信息，因此先按企业通用礼赠需求给出初步建议。');

  const quantityAdvice = quantity === null
    ? '数量未明确，建议先确认大致采购范围。'
    : quantity <= 10
      ? '数量较少，更适合重要客户接待、品鉴或高规格礼赠。'
      : quantity <= 50
        ? '数量适中，更适合客户答谢、节庆礼赠或合作伙伴维护。'
        : quantity <= 200
          ? '数量偏批量，更适合企业节庆采购、商协会活动或批量礼赠。'
          : '数量较大，更适合统一包装和批量交付方案。';

  const packageAdvice = wantsCustom
    ? '可加入企业标签、祝福语、纪念编号或专属礼盒，但建议先确认交付时间和数量。'
    : wantsStandard
      ? '可优先采用标准商务礼盒或品鉴标准酒，减少复杂定制成本。'
      : primary.package;

  return {
    primary,
    secondary,
    reason: `${reasonParts.join(' ')}这类需求更适合${primary.title}。${quantityAdvice}`,
    wine: primary.wine,
    package: packageAdvice,
    focus: [
      demand.budget.trim() ? '确认预算是否对应整批采购或单次活动总预算。' : '先确认预算范围。',
      quantity === null ? '确认预计采购数量。' : '确认数量是否需要预留样品或备用。',
      '确认赠送对象的重要程度、交付时间和是否需要企业元素。',
    ],
    notes: notes.length ? notes : ['当前信息已较完整，下一步可沟通酒体、包装层级和交付节奏。'],
    cardFocus: `${primary.wine}；${packageAdvice}`,
  };
}
