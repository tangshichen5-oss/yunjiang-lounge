---
name: yunjiang-project-governance
description: Use this skill before adding features, modifying Yunjiang Lounge pages, editing src/styles.css, changing forms, Supabase lead submission or reading logic, data structures, recommendation rules, customer lead fields, mobile navigation, CTAs, cards, or admin/security behavior; also use it for recurring project governance reviews after every 2-3 feature iterations.
---

# Yunjiang Project Governance Skill

## Purpose

用于防止云酱会客厅官网在持续使用 AI / Codex 修改过程中出现代码失控、样式污染、重复组件、表单字段混乱、Supabase 映射混乱、后台安全边界模糊等问题。

## When to use this skill

在以下场景必须使用：

1. 新增功能前。
2. 修改首页、预约页、方案建议页、后台线索页前。
3. 修改 `src/styles.css` 前。
4. 修改表单字段、表单选项、Supabase 提交或读取逻辑前。
5. 新增组件、抽离组件、重构组件前。
6. 新增数据结构、推荐规则、客户线索字段前。
7. 每 2-3 次功能迭代后做项目体检时。
8. 涉及移动端布局、导航栏、CTA、卡片、表单时。
9. 涉及后台线索、安全、环境变量、日志输出时。

## Core rules

1. 每次只处理一个明确区域，避免全站散改。
2. 修改前必须读取相关 JSX、CSS、data、service 文件。
3. 修改前必须说明计划影响哪些文件。
4. 不允许未经确认进行大范围重构。
5. 不允许重复创建同类组件。
6. 不允许把所有新样式继续堆进全局选择器。
7. 不允许新增全局 `h1/p/input/button/a` 等基础规则，除非明确说明必要性。
8. 不允许引入 Next.js / TypeScript / Tailwind 结构假设。
9. 不允许引入新依赖解决纯样式或小交互问题，除非先说明必要性。
10. 保持官网定位为“高端商务会客厅 + 酱香商务礼酒解决方案”，避免电商卖酒页、招商页、低价促销页风格。

## Directory boundaries

1. 页面文件放在 `src/pages`。
2. 复用组件放在 `src/components`。
3. 品牌内容、首页模块数据、产品体系、FAQ 等优先放在 `src/data.js`。
4. 表单选项放在 `src/data/formOptions.js`。
5. Supabase 提交和读取逻辑放在 `src/services/supabaseLeads.js`。
6. 图片资源放在 `src/assets/images/v3`。
7. 不要随意创建空目录或无用途目录。
8. 如需新增文件，先说明原因、职责和替代方案。

## CSS governance

当前 `src/styles.css` 已超过 3600 行，是项目主要复杂度来源。修改 CSS 时必须遵守：

1. 优先限定选择器范围，避免全局污染。
2. 避免继续增加无边界的全局基础选择器。
3. 避免重复创建相似卡片、按钮、表单、CTA 样式。
4. 修改响应式规则时，必须检查已有 `@media (max-width: 1040px)` 和 `@media (max-width: 700px)` 覆盖关系。
5. 不要用 `overflow-x: hidden` 掩盖布局错误。
6. 移动端必须重点检查 360px-430px 宽度。
7. 导航栏、CTA、横向卡片、表单、最终 CTA 是高风险区域。
8. 保持暖胡桃木、深棕、暖象牙、酱金、玻璃质感、柔和光影的视觉方向。
9. Liquid Glass 效果要轻、透、悬浮，避免白色实体块。
10. 不为单次微调制造大量新类名，除非能减少重复或提升边界清晰度。

## Page and component governance

1. `Home.jsx` 是首页滚动叙事核心，不要随意破坏模块顺序。
2. `CustomPage.jsx` 涉及预约表单和商务转化，修改时必须检查表单体验。
3. `ConsultPage.jsx` 已接近 400 行，推荐规则和结果渲染继续增长时，应考虑抽离业务规则或局部组件。
4. `AdminLeadsPage.jsx` 涉及客户线索，修改前必须考虑访问控制和敏感信息。
5. 组件应保持单一职责，不要出现 `FinalForm`、`NewForm2`、`RealFinalForm` 这类重复命名。
6. 新增组件前，先检查是否已有 `BrandSelect`、`ProductCard`、`ImageCard`、`HorizontalRail`、`Revealer` 等可复用组件。

## Data and form governance

1. 表单字段改动必须同步检查 `src/data/formOptions.js`。
2. 表单字段改动必须同步检查 `src/services/supabaseLeads.js`。
3. 不允许随意新增 `phone2`、`type_new`、`real_phone` 这类混乱字段。
4. 字段命名必须稳定、清晰、可长期维护。
5. 推荐规则不要无限堆在页面 JSX 中。
6. 如果推荐规则继续扩大，优先考虑抽离到独立配置或工具函数。
7. 文案位置要清楚：通用内容优先放 `data.js`，强页面绑定内容可放页面局部常量。
8. 不要让 UI JSX 同时承担大量数据配置、业务判断和渲染逻辑。

## Supabase and security governance

1. 不允许在前端暴露敏感 Key、私钥、Token。
2. 不允许把 `.env` 内容写入代码或文档。
3. 修改后台线索页前，必须检查认证状态、RLS 预期和 anon key 权限。
4. 如果 `adminAuthEnabled = false`，必须明确这是演示状态还是生产状态。
5. 不允许在生产环境日志中输出完整客户线索、手机号、微信号等敏感信息。
6. 修改 `supabaseLeads.js` 后必须检查提交、读取、错误处理和字段映射。
7. 涉及客户数据时，默认按敏感信息处理。

## Required workflow before edits

实际修改代码前，必须先输出：

1. 本次修改目标。
2. 计划读取的文件。
3. 计划修改的文件。
4. 是否涉及样式。
5. 是否涉及表单。
6. 是否涉及 Supabase。
7. 是否涉及移动端。
8. 是否涉及后台线索或安全。
9. 潜在风险。
10. 是否需要先让用户确认。

## Required checks after edits

实际修改代码后，必须运行并汇报：

1. `git status --short --branch`
2. `git diff --stat`
3. `npm run build`

如果只是新增或修改 Skill / 文档，可以不运行 build，但必须说明原因。

默认不要 commit，不要 push，除非用户明确要求。

## Final response format after using this skill

每次使用本 Skill 后，最终输出：

1. 读取了哪些文件。
2. 修改了哪些文件。
3. 具体改了什么。
4. 是否影响样式 / 表单 / Supabase / 移动端 / 后台安全。
5. 检查命令和结果。
6. 是否建议 commit。
7. 是否建议下一步继续治理或修复。
