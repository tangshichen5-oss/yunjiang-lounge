import businessReception from './assets/images/v3/business-reception.webp';
import clientSigning from './assets/images/v3/client-signing.webp';
import comingSoon from './assets/images/v3/coming-soon.webp';
import corporateGifting from './assets/images/v3/corporate-gifting.webp';
import customBottle from './assets/images/v3/custom-bottle.webp';
import distillationWine from './assets/images/v3/distillation-wine.jpg';
import distilleryAerial from './assets/images/v3/distillery-aerial.webp';
import fermentationPits from './assets/images/v3/fermentation-pits.webp';
import finishedWine from './assets/images/v3/finished-wine.webp';
import heroLounge from './assets/images/v3/hero-lounge.webp';
import jarCellar from './assets/images/v3/jar-cellar.webp';
import leesTurning from './assets/images/v3/lees-turning.webp';
import loungeBar from './assets/images/v3/lounge-bar.webp';
import premiumGiftBox from './assets/images/v3/premium-gift-box.webp';
import quMaking from './assets/images/v3/qu-making.webp';
import rawPrep from './assets/images/v3/raw-prep.webp';
import sorghumAerial from './assets/images/v3/sorghum-aerial.webp';
import sorghumHarvest from './assets/images/v3/sorghum-harvest.webp';
import steaming from './assets/images/v3/steaming.webp';
import tastingEvent from './assets/images/v3/tasting-event.webp';

export const imageAssets = {
  businessReception,
  clientSigning,
  comingSoon,
  corporateGifting,
  customBottle,
  distillationWine,
  distilleryAerial,
  fermentationPits,
  finishedWine,
  heroLounge,
  jarCellar,
  leesTurning,
  loungeBar,
  premiumGiftBox,
  quMaking,
  rawPrep,
  sorghumAerial,
  sorghumHarvest,
  steaming,
  tastingEvent,
};

export const navItems = [
  { label: '会客厅', to: '/', hash: 'lounge' },
  { label: '商务场景', to: '/scenes' },
  { label: '酿造故事', to: '/', hash: 'craft' },
  { label: '酒厂实力', to: '/', hash: 'strength' },
  { label: '企业定制', to: '/custom' },
  { label: '方案建议', to: '/consult' },
];

export const businessScenes = [
  {
    title: '企业客户接待',
    label: '来访 / 洽谈 / 考察',
    copy: '用于客户来访、商务洽谈、合作考察和宴请接待。酒在这里承担的不是推销，而是让接待更有分寸、更有来处。',
    role: '体面接待',
    image: businessReception,
  },
  {
    title: '客户答谢',
    label: '维护 / 回访 / 关系经营',
    copy: '用于老客户维护、合作伙伴感谢、年度回访和重点客户关系经营。礼酒的价值，是把感谢表达得稳妥、郑重。',
    role: '关系维护',
    image: corporateGifting,
  },
  {
    title: '节庆礼赠',
    label: '春节 / 中秋 / 年终',
    copy: '用于春节、中秋、年终答谢和企业批量礼赠。重点不是堆包装，而是让预算、数量、礼盒和祝福表达统一。',
    role: '批量礼赠',
    image: premiumGiftBox,
  },
  {
    title: '签约宴请',
    label: '签约 / 达成 / 纪念',
    copy: '用于项目签约、合作达成和重要节点纪念。酒承担的是仪式感，让关系在关键节点被记住。',
    role: '仪式节点',
    image: clientSigning,
  },
  {
    title: '商协会活动',
    label: '年会 / 论坛 / 圈层社交',
    copy: '用于商会年会、企业家交流、行业论坛和圈层社交。以品鉴和礼赠方案进入场景，而不是简单摆货。',
    role: '圈层认同',
    image: tastingEvent,
  },
  {
    title: '商务拜访',
    label: '正式拜访 / 渠道沟通',
    copy: '用于重点客户拜访、渠道沟通和日常关系维护。把来源、包装、预算和交付说清楚，让拜访更有分寸。',
    role: '日常分寸',
    image: loungeBar,
  },
  {
    title: '商务品鉴会',
    label: '沙龙 / 选品 / 信任建立',
    copy: '用小型沙龙和品鉴沟通降低新品牌信任成本，先建立口感、来源和服务认知。',
    role: '信任建立',
    image: finishedWine,
  },
];

export const craftSteps = [
  {
    kicker: '01',
    title: '原料预处理',
    subtitle: '对粮食进行筛选、粉碎与润料，为蒸煮和发酵打下基础。',
    image: rawPrep,
    tone: 'grain',
  },
  {
    kicker: '02',
    title: '制曲',
    subtitle: '制备发酵所需曲块，曲香与微生物在这里成为酒体风味的开端。',
    image: quMaking,
    tone: 'wheat',
  },
  {
    kicker: '03',
    title: '蒸煮',
    subtitle: '通过蒸汽将粮食蒸熟糊化，让淀粉更易转化。',
    image: steaming,
    tone: 'steam',
  },
  {
    kicker: '04',
    title: '摊凉拌曲',
    subtitle: '蒸熟后的粮食降温后拌入曲粉，进入下一阶段的风味塑造。',
    image: leesTurning,
    tone: 'steam',
  },
  {
    kicker: '05',
    title: '入窖发酵',
    subtitle: '粮醅入窖密闭发酵，时间、温度与微生物共同作用。',
    image: fermentationPits,
    tone: 'ferment',
  },
  {
    kicker: '06',
    title: '蒸馏摘酒',
    subtitle: '从发酵完成的酒醅中蒸馏出原浆酒，并分段摘取更合适的酒体部分。',
    image: distillationWine,
    tone: 'steam',
  },
  {
    kicker: '07',
    title: '陈酿勾调',
    subtitle: '经过储存老熟与勾调，酒体逐渐稳定，形成更完整的口感表达。',
    image: jarCellar,
    tone: 'cellar',
  },
];

export const strengthStats = [
  { value: 48, suffix: '口', label: '标准酱香窖池', note: '4m x 2.5m x 2.9m' },
  { value: 577, suffix: '', label: '吨级储酒能力', note: '多规格储酒罐合计约577吨' },
  { value: 3, suffix: '', label: '年以上陈放周期', note: '酱香白酒老熟与勾调周期' },
  { value: 2800, suffix: '', label: '万元级\n年综合投入', note: '覆盖粮食、人工、储酒、运营等综合成本' },
];

export const products = [
  {
    title: '商务礼盒酒',
    label: '企业客户维护 / 节庆礼赠 / 正式拜访',
    copy: '降低礼赠选择成本，让企业在春节、中秋、客户答谢和商务拜访中更体面、更完整。',
    fit: '企业客户维护、节庆采购、正式拜访',
    scene: '春节、中秋、客户答谢、商务拜访',
    value: '降低礼赠选择成本，让礼赠更体面、更完整。',
    image: premiumGiftBox,
  },
  {
    title: '企业定制酒',
    label: '企业专属 / 场景定制 / 批量交付',
    copy: '先判断赠送对象和使用场景，再确定酒体、标签文案、礼盒方向和整体交付方案。',
    fit: '企业礼赠、商协会、周年纪念、项目签约',
    scene: '签约纪念、年会伴手礼、客户答谢、专属渠道礼赠',
    value: '让企业元素自然进入礼酒，而不是简单把 logo 印在瓶身上。',
    image: customBottle,
  },
  {
    title: '品鉴标准酒',
    label: '到店品鉴 / 样品试单 / 方案确认',
    copy: '作为客户入门和样品确认产品，帮助企业先判断口感、预算带与采购方向。',
    fit: '首次接触客户、样品试单、品鉴会',
    scene: '需求沟通、内部选品、礼酒方案确认',
    value: '先建立口感信任，再讨论批量礼赠或企业定制。',
    image: tastingEvent,
  },
  {
    title: '收藏纪念酒',
    label: '周年纪念 / 重要节点 / 合作留念',
    copy: '用于周年庆、项目达成、合作纪念和重要客户留念，让礼酒承接更强的仪式感。',
    fit: '周年庆、合作纪念、重要客户维护',
    scene: '企业周年、项目达成、合作签约、客户答谢',
    value: '把时间节点做成可以被保存、被回忆的商务礼遇。',
    image: jarCellar,
  },
];

export const loungeSpaces = [
  {
    title: '主厅',
    copy: '酒柜、木质墙面、暖色灯光和商务座席，承担第一眼的品牌信任。',
    image: heroLounge,
  },
  {
    title: '吧台',
    copy: '用接近高端酒店与威士忌会所的吧台体验，降低传统酒铺的距离感。',
    image: loungeBar,
  },
  {
    title: '洽谈区',
    copy: '围绕预算、数量、包装和交付周期，完成企业礼酒方案沟通。',
    image: businessReception,
  },
  {
    title: '品鉴区',
    copy: '通过小型品鉴会建立口感认知、客户档案和复购线索。',
    image: tastingEvent,
  },
  {
    title: '礼盒展示区',
    copy: '商务礼盒与定制酒瓶是未来真实产品替换的重点展示位。',
    image: premiumGiftBox,
  },
  {
    title: '企业接待区',
    copy: '企业客户在这里完成拜访、答谢、签约和长期关系维护。',
    image: clientSigning,
  },
];

export const processSteps = [
  '需求沟通',
  '场景判断',
  '酒体建议',
  '包装方向',
  '样品确认',
  '批量交付',
];

export const faqs = [
  {
    question: '云酱会客厅和普通烟酒店有什么不同？',
    answer: '普通门店通常先卖产品，云酱会客厅先理解企业接待、礼赠、答谢或定制场景，再给出合适的礼酒方案。',
  },
  {
    question: '企业定制可以定制哪些内容？',
    answer: '可围绕瓶身元素、标签文案、企业 logo、礼盒设计、祝福语、纪念编号和场景化外包装沟通，具体以方案确认和交付条件为准。',
  },
  {
    question: '数字化系统是不是线上卖酒平台？',
    answer: '不是。它服务线下会客厅，用于扫码选品、需求收集、订单进度、客户档案和复购提醒。',
  },
  {
    question: '是否支持小批量商务礼赠？',
    answer: '可以先沟通使用场景、预算和数量，再判断适合标准礼盒、品鉴样品还是进入定制流程。',
  },
  {
    question: '没有明确预算，能不能先沟通方案？',
    answer: '可以。顾问会先了解赠送对象、商务场合和交付时间，再帮助收敛到合适的预算区间。',
  },
  {
    question: '多久可以交付？',
    answer: '标准礼盒和定制酒的周期不同，建议提前沟通数量、包装复杂度和使用日期，预留样品确认时间。',
  },
];
