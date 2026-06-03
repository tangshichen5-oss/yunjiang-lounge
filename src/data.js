import businessReception from './assets/images/v3/business-reception.webp';
import clientSigning from './assets/images/v3/client-signing.webp';
import comingSoon from './assets/images/v3/coming-soon.webp';
import corporateGifting from './assets/images/v3/corporate-gifting.webp';
import customBottle from './assets/images/v3/custom-bottle.webp';
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
  {
    title: '客户拜访',
    copy: '把来源、包装、预算和交付说清楚，让日常拜访更有分寸。',
    image: customBottle,
  },
  {
    title: '商协会活动',
    copy: '以小型品鉴和礼赠方案进入圈层，把需求沉淀为可复购客户档案。',
    image: businessReception,
  },
  {
    title: '年会伴手礼',
    copy: '围绕预算、数量、礼盒和祝福文案，形成企业年会礼酒方案。',
    image: premiumGiftBox,
  },
  {
    title: '客户答谢',
    copy: '用可定制、可解释、可追溯的礼酒，承接长期合作里的温度。',
    image: corporateGifting,
  },
];

export const craftSteps = [
  {
    kicker: '产区 01',
    title: '高粱田 / 产区环境',
    subtitle: '赤水河谷、山地气候与本地糯高粱，构成酱香礼酒的第一层风土。',
    image: sorghumAerial,
    tone: 'sorghum',
  },
  {
    kicker: '产区 02',
    title: '高粱收割',
    subtitle: '从田间颗粒开始，把农业、季节与时间带入酒体叙事。',
    image: sorghumHarvest,
    tone: 'sorghum',
  },
  {
    kicker: '工序 01',
    title: '原料预处理',
    subtitle: '对粮食进行筛选、粉碎与润料，为蒸煮和发酵打下基础。',
    image: rawPrep,
    tone: 'grain',
  },
  {
    kicker: '工序 02',
    title: '制曲',
    subtitle: '制备发酵所需曲块，曲香与微生物在这里成为酒体风味的开端。',
    image: quMaking,
    tone: 'wheat',
  },
  {
    kicker: '工序 03',
    title: '蒸煮',
    subtitle: '通过蒸汽将粮食蒸熟糊化，让淀粉更易转化。',
    image: steaming,
    tone: 'steam',
  },
  {
    kicker: '工序 04',
    title: '摊凉拌曲',
    subtitle: '蒸熟后的粮食降温后拌入曲粉，进入下一阶段的风味塑造。',
    image: leesTurning,
    tone: 'steam',
  },
  {
    kicker: '工序 05',
    title: '入窖发酵',
    subtitle: '粮醅入窖密闭发酵，时间、温度与微生物共同作用。',
    image: fermentationPits,
    tone: 'ferment',
  },
  {
    kicker: '工序 06',
    title: '蒸馏摘酒',
    subtitle: '蒸馏出原浆酒，并通过摘酒工艺保留更合适的酒体部分。',
    image: steaming,
    tone: 'steam',
  },
  {
    kicker: '工序 07',
    title: '陈酿勾调',
    subtitle: '经过储存老熟与勾调，酒体逐渐稳定，形成更完整的口感表达。',
    image: jarCellar,
    tone: 'cellar',
  },
  {
    kicker: '成酒',
    title: '成酒展示',
    subtitle: '成酒进入商务品鉴、礼赠和定制场景，完成从工艺到关系的转译。',
    image: finishedWine,
    tone: 'product',
  },
  {
    kicker: '产品',
    title: '产品体系',
    subtitle: '商务礼盒、企业定制、品鉴标准酒与收藏纪念酒，对应不同企业场景。',
    image: premiumGiftBox,
    tone: 'product',
  },
  {
    kicker: '空间',
    title: '云酱会客厅',
    subtitle: '会客厅把产区、工艺、产品和商务服务放到同一个可体验的空间里。',
    image: heroLounge,
    tone: 'lounge',
  },
];

export const strengthStats = [
  { value: 48, suffix: '口', label: '标准酱香窖池', note: '4m x 2.5m x 2.9m' },
  { value: 577, suffix: '吨', label: '不锈钢储酒能力', note: '多规格储酒罐合计约577吨' },
  { value: 3, suffix: '年以上', label: '自然陈放周期', note: '酱香白酒老熟与勾调周期' },
  { value: 2800, suffix: '万元', label: '满负荷年综合投入', note: '用于测算满负荷生产与运营投入口径' },
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
    title: '品鉴标准酒',
    label: '到店品鉴 / 样品试单',
    copy: '作为客户入门和样品试单产品，先验证口感、价格带与采购意向。',
    image: tastingEvent,
  },
  {
    title: '收藏纪念酒',
    label: '周年纪念 / 重要节点',
    copy: '为周年庆、合作纪念、客户答谢保留更具仪式感的包装与表达空间。',
    image: finishedWine,
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
