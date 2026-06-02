import businessReception from './assets/images/v3/business-reception.webp';
import clientSigning from './assets/images/v3/client-signing.webp';
import comingSoon from './assets/images/v3/coming-soon.webp';
import corporateGifting from './assets/images/v3/corporate-gifting.webp';
import customBottle from './assets/images/v3/custom-bottle.webp';
import distilleryAerial from './assets/images/v3/distillery-aerial.webp';
import fermentationPits from './assets/images/v3/fermentation-pits.webp';
import heroLounge from './assets/images/v3/hero-lounge.webp';
import jarCellar from './assets/images/v3/jar-cellar.webp';
import leesTurning from './assets/images/v3/lees-turning.webp';
import premiumGiftBox from './assets/images/v3/premium-gift-box.webp';
import quMaking from './assets/images/v3/qu-making.webp';
import sorghumAerial from './assets/images/v3/sorghum-aerial.webp';
import sorghumHarvest from './assets/images/v3/sorghum-harvest.webp';
import tastingEvent from './assets/images/v3/tasting-event.webp';

export const imageAssets = {
  businessReception,
  clientSigning,
  comingSoon,
  corporateGifting,
  customBottle,
  distilleryAerial,
  fermentationPits,
  heroLounge,
  jarCellar,
  leesTurning,
  premiumGiftBox,
  quMaking,
  sorghumAerial,
  sorghumHarvest,
  tastingEvent,
};

export const navItems = [
  { label: '会客厅', to: '/', hash: 'lounge' },
  { label: '商务场景', to: '/', hash: 'scenes' },
  { label: '酿造故事', to: '/', hash: 'craft' },
  { label: '酒厂实力', to: '/', hash: 'strength' },
  { label: '企业定制', to: '/custom' },
  { label: '预约品鉴', to: '/custom', hash: 'booking' },
];

export const businessScenes = [
  {
    title: '企业商务接待',
    copy: '在温暖克制的会客空间里，把一瓶酒变成一次体面的商务沟通。',
    image: businessReception,
  },
  {
    title: '商务品鉴会',
    copy: '用小型沙龙和预约品鉴降低新品牌信任成本，先建立口感与来源认知。',
    image: tastingEvent,
  },
  {
    title: '企业礼赠',
    copy: '服务节庆采购、客户答谢和商协会活动，强调预算可控、包装体面。',
    image: corporateGifting,
  },
  {
    title: '客户签约场景',
    copy: '在关键商务节点，用有产地背书的礼酒承接合作关系。',
    image: clientSigning,
  },
];

export const craftSteps = [
  {
    title: '高粱种植',
    subtitle: '产区原料，是酱香故事的第一层底色。',
    image: sorghumAerial,
  },
  {
    title: '高粱收割',
    subtitle: '从田间颗粒开始，保留真实农业与时间感。',
    image: sorghumHarvest,
  },
  {
    title: '制曲',
    subtitle: '曲块、温度、湿度与等待，共同塑造酒体基础。',
    image: quMaking,
  },
  {
    title: '翻酒糟',
    subtitle: '蒸汽与颗粒翻涌，是酿造现场最有力量的瞬间。',
    image: leesTurning,
  },
  {
    title: '发酵窖池',
    subtitle: '48口标准酱香窖池，构成长期供应能力的核心基础。',
    image: fermentationPits,
  },
  {
    title: '陈藏',
    subtitle: '陶坛与储酒体系，让酒体在时间里稳定、老熟、成形。',
    image: jarCellar,
  },
];

export const strengthStats = [
  { value: 48, suffix: '口', label: '标准酱香窖池', note: '4m x 2.5m x 2.9m' },
  { value: 577, suffix: '吨', label: '不锈钢储酒能力', note: '多规格储酒罐合计约577吨' },
  { value: 3, suffix: '年以上', label: '自然陈放周期', note: '酱香白酒老熟与勾调周期' },
  { value: 2800, suffix: '万元', label: '满负荷年综合投入', note: '试点模型估算，不构成收益承诺' },
];

export const products = [
  {
    title: '商务礼盒酒',
    label: '节庆礼赠 / 客户拜访',
    copy: '用于企业节庆采购、客户维护和商协会活动，强调体面、稳定、可解释来源。',
    image: premiumGiftBox,
  },
  {
    title: '企业定制酒',
    label: '品牌专属 / 场景定制',
    copy: '围绕企业名称、标签、礼盒、数量与交付时间，形成专属礼酒方案。',
    image: customBottle,
  },
  {
    title: '收藏纪念酒',
    label: '周年纪念 / 重要节点',
    copy: '为周年庆、合作纪念、客户答谢保留更具仪式感的包装与表达空间。',
    image: jarCellar,
  },
  {
    title: '品鉴标准酒',
    label: '到店品鉴 / 样品试单',
    copy: '作为客户入门和样品试单产品，先验证口感、价格带与采购意向。',
    image: tastingEvent,
  },
];

export const loungeSpaces = [
  {
    title: '会客厅主空间',
    copy: '酒柜、木质墙面、暖色灯光和商务座席，承担第一眼的品牌信任。',
    image: heroLounge,
  },
  {
    title: '企业洽谈',
    copy: '围绕预算、数量、包装和交付周期，完成企业礼酒方案沟通。',
    image: businessReception,
  },
  {
    title: '品鉴活动',
    copy: '通过小型品鉴会建立口感认知、客户档案和复购线索。',
    image: tastingEvent,
  },
  {
    title: '礼盒展示',
    copy: '商务礼盒与定制酒瓶是未来真实产品替换的重点展示位。',
    image: premiumGiftBox,
  },
];

export const processSteps = [
  '需求沟通',
  '预算确认',
  '酒款建议',
  '包装方案',
  '样品确认',
  '生产交付',
  '售后回访',
];

export const faqs = [
  {
    question: '云酱会客厅和普通烟酒店有什么不同？',
    answer: '云酱会客厅重点不是被动零售，而是通过品鉴、定制、团购转化和客户档案管理，服务本地企业礼赠与渠道合作。',
  },
  {
    question: '企业定制可以定制哪些内容？',
    answer: '当前规划包含标签、礼盒、文案、数量、预算、使用场景和交付周期沟通，具体范围以后续试点结果和供应端能力为准。',
  },
  {
    question: '数字化系统是不是线上卖酒平台？',
    answer: '不是。它服务线下会客厅，用于扫码选品、需求收集、订单进度、客户档案和复购提醒。',
  },
];
