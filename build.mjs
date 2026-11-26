import {mkdir,writeFile,copyFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {projects} from './projects.mjs';
export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const origin='https://bxfzzti.github.io/';
const publicGroups=[
 {key:'tool',badge:'第 1 类 · 点开网页直接用',title:'免费在线小工具',desc:'打开浏览器就能算房贷、做抽签，不用下载安装，数据全留在你自己电脑里。'},
 {key:'skill',badge:'第 2 类 · 复制一句话发给 AI 用',title:'AI 效率说明书（Skills）',desc:'不用自己琢磨怎么写复杂提示词。点「复制给 AI」发给你的 AI 助手，它就会按现成专业流程一步步帮你搞定。'}
];
const header=(home='../../')=>`<header class="nav"><a class="brand" href="${home}"><span class="brand-dot">b.</span>实用工具箱<span class="slash">/</span><span class="brand-sub">网页工具 &amp; AI Skills</span></a><nav><a href="${home}#tools">网页工具</a><a href="${home}#skills">AI Skills</a><a href="${home}#how">怎么用</a><a href="https://github.com/bxfzzti" target="_blank" rel="noreferrer">GitHub ↗</a></nav></header>`;
const footer=`<footer class="footer"><span>bxfzzti 实用工具箱</span><span>全部免费 · 隐私留在本地</span><a href="https://github.com/bxfzzti">GitHub ↗</a></footer>`;
function shell(title,description,body,prefix='./'){
 return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f5f5f7"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="icon" href="${prefix}assets/icon.svg"><link rel="stylesheet" href="${prefix}assets/styles.css"></head><body>${body}<script src="${prefix}assets/app.js" defer></script></body></html>`;
}
function visual(p){return `<div class="visual ${p.tone}" aria-label="${esc(p.name)}功能示意"><div class="mock-window"><div class="window-dots"><i></i><i></i><i></i><span>${esc(p.name)}</span></div><div class="mock-content">${p.visual}</div></div></div>`;}
function card(p){
 const primaryAction=p.kind==='tool'
  ?`<a class="card-btn primary" href="${p.url}">打开直接用 ↗</a>`
  :p.prompt
  ?`<button class="card-btn primary" type="button" data-copy-text="${esc(p.prompt)}">一键复制给 AI</button>`
  :`<a class="card-btn" href="projects/${p.id}/">查看介绍 ↗</a>`;
 return `<article class="project-card" id="card-${p.id}" data-kind="${p.kind}"><a class="card-art" href="projects/${p.id}/" aria-label="了解${esc(p.name)}">${visual(p)}</a><div class="card-copy"><div class="card-meta"><span>${esc(p.tag)}</span><span class="status ${p.kind}">${esc(p.status)}</span></div><h3><a href="projects/${p.id}/">${esc(p.name)}</a></h3>${p.pain?`<p class="pain-line">${esc(p.pain)}</p>`:''}<p class="card-summary">${esc(p.summary)}</p><div class="card-links">${primaryAction}<a class="card-more" href="projects/${p.id}/">详细用法 <span>↗</span></a></div><p class="inline-copy-status" role="status" aria-live="polite"></p></div></article>`;
}
function index(){
 const publicProjects=projects.filter(p=>p.kind!=='private');
 const privateProjects=projects.filter(p=>p.kind==='private');
 const counts={all:publicProjects.length,tool:projects.filter(p=>p.kind==='tool').length,skill:projects.filter(p=>p.kind==='skill').length};
 const quickPills=publicProjects.map(p=>`<a class="quick-pill" href="#card-${p.id}"><span class="pill-icon ${p.tone}">${p.symbol}</span>${esc(p.tag)}</a>`).join('');
 const sections=publicGroups.map(g=>{
  const list=projects.filter(p=>p.kind===g.key);
  const anchor=g.key==='tool'?'tools':'skills';
  return `<div class="group-block" id="${anchor}" data-group="${g.key}"><div class="group-head"><div><span class="group-badge ${g.key}">${g.badge}</span><h3>${g.title} <small>${list.length} 个</small></h3></div><p>${g.desc}</p></div><div class="project-grid">${list.map(card).join('')}</div></div>`;
 }).join('');
 const privateLinks=privateProjects.map(p=>`<a href="projects/${p.id}/">${esc(p.name)}（${esc(p.status)}）↗</a>`).join('');
 const body=header('./')+`<main><section class="hero"><p class="eyebrow"><span class="live-dot"></span> 免费实用工具箱 · 无需注册</p><h1>遇到麻烦事？<br><span>直接拿现成的工具解决。</span></h1><p class="hero-desc">算房贷、开会抽签、查家里千兆宽带为什么慢、改一页纸简历、找写作选题——<strong>点下面你现在需要的场景，直接上手用。</strong></p><div class="quick-pills" aria-label="按场景快速直达">${quickPills}</div></section>
 <section class="section guide-section" id="how"><div class="guide-strip two-col"><article><span class="guide-tag tool">用法 1 · 网页小工具（${counts.tool} 个）</span><h3>点开链接就能直接算、直接抽</h3><p>不需要下载安装，也不需要登录账号。数据只留在你自己的浏览器里，关掉网页不留痕。</p></article><article><span class="guide-tag skill">用法 2 · AI 说明书 / Skills（${counts.skill} 个）</span><h3>一键复制指令，粘贴发给你的 AI 助手</h3><p>不知道怎么让 AI 干专业活？点卡片上的<strong>「一键复制给 AI」</strong>，发给 Antigravity、Claude、Codex 或 Cursor，它会按步骤带你完成。</p></article></div></section>
 <section class="projects section" id="projects"><div class="filters" role="group" aria-label="按使用方式筛选"><button aria-pressed="true" data-filter="all">全部可用 <b>${counts.all}</b></button><button aria-pressed="false" data-filter="tool">点开就能用 <b>${counts.tool}</b></button><button aria-pressed="false" data-filter="skill">复制给 AI 用 <b>${counts.skill}</b></button></div><p id="filter-status" class="sr-only" role="status">显示${counts.all}个项目</p>${sections}</section>
 <section class="section more-section" id="about"><details class="more-box"><summary>更多内容：开源学习 Fork、未公开思路与作者仓库</summary><div class="more-inner"><div class="more-col"><h4>开源学习（Fork / 保留原作者归属）</h4><ul><li><a href="https://github.com/bxfzzti/codex-auto-resume">Codex Auto Resume ↗</a> <span class="muted">（上游：<a href="https://github.com/progressrdx/codex-auto-resume">progressrdx</a>）</span></li><li><a href="https://github.com/bxfzzti/hangzhou_house_knowledge">杭州购房知识 ↗</a> <span class="muted">（上游：<a href="https://github.com/houshanren/hangzhou_house_knowledge">houshanren</a>）</span></li></ul></div><div class="more-col"><h4>私有项目思路与历史仓库</h4><p class="muted">以下为不对外开放的个人工作台思路介绍或历史空仓库：</p><div class="more-links">${privateLinks}${['bxfzzti','yanxuanone.github.io','yanxuanone'].map(r=>`<a href="https://github.com/bxfzzti/${r}">${r} ↗</a>`).join('')}</div></div></div></details></section></main>`+footer;
 return shell('实用工具箱 · 网页小工具与 AI 效率手册','免费实用工具与 AI Skills：买房算账、团队抽签、家庭网络排障、一页纸简历、内容创作流、AI 搜索路由。',body);
}
function detail(p,standalone=false){
 const prefix=standalone?'./':'../../';
 const home=standalone?origin:'../../';
 const repo=p.repo?'https://github.com/bxfzzti/'+p.repo:null;
 const call=p.kind==='tool'?`<a class="button" href="${p.url}">打开工具直接用 <span>↗</span></a>`:p.prompt?'<a class="button" href="#start">一键复制给 AI <span>↓</span></a>':'<a class="button" href="#features">看看它能干嘛 <span>↓</span></a>';
 const body=header(home)+`<main class="detail"><section class="detail-hero section"><div class="detail-text"><a class="back" href="${home}#projects">← 返回工具箱首页</a><p class="eyebrow">${esc(p.status)} · ${esc(p.tag)}</p><p class="product-name"><span class="product-icon ${p.tone}">${p.symbol}</span>${esc(p.name)}</p><h1>${esc(p.headline).replace('\n','<br>')}</h1><p class="hero-desc">${esc(p.summary)}</p><div class="hero-actions">${call}${repo?`<a class="quiet-link" href="${repo}">查看开源地址 ↗</a>`:''}</div></div>${visual(p)}</section>
 <section id="features" class="section feature-section"><p class="eyebrow">能帮你解决什么</p><h2>用它能省下哪些麻烦？</h2><div class="feature-grid">${p.features.map(([h,t],i)=>`<article><span class="step-number">0${i+1}</span><h3>${esc(h)}</h3><p>${esc(t)}</p></article>`).join('')}</div></section>
 <section id="start" class="section start-section"><div><p class="eyebrow">怎么上手</p><h2>${p.kind==='private'?'说明':'跟着这 3 步就能用。'}</h2><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div><div class="start-card">${p.prompt?`<div class="start-card-header"><span>复制下面这段话，直接发给你的 AI</span><button class="copy" data-copy="install-prompt">一键复制</button></div><pre id="install-prompt">${esc(p.prompt)}</pre><p class="copy-hint">适用于 Antigravity、Claude Code、Codex、Cursor 等支持 Skill 的 AI 助手。</p><p class="copy-status" role="status"></p>`:p.kind==='tool'?`<span class="product-icon ${p.tone}">${p.symbol}</span><h3>现在就能直接用。</h3><p>不需要注册，所有数据都在你自己的浏览器里算，关掉即走。</p><a class="button" href="${p.url}">打开${esc(p.name)} ↗</a>`:`<span class="product-icon slate">▦</span><h3>仅分享功能思路。</h3><p>源码和真实数据保持私有，没有公共后台或登录入口。</p>`}</div></section>
 <section class="section boundary"><div><h3>需要注意</h3><p>${esc(p.boundary)}</p></div><div><h3>你的数据安全吗</h3><p>${esc(p.privacy)}</p></div></section><section class="section bottom-cta"><h2>还需要解决别的麻烦？</h2><a href="${home}#projects" class="button">回到工具箱首页 <span>↗</span></a></section></main>`+footer;
 return shell(p.name+' · 实用工具箱',p.summary,body,prefix);
}
const dist=resolve('dist');
async function assets(dir){await mkdir(join(dir,'assets'),{recursive:true});for(const name of ['styles.css','app.js','icon.svg'])await copyFile(join('assets',name),join(dir,'assets',name));}
await assets(dist);await writeFile(join(dist,'index.html'),index());await writeFile(join(dist,'.nojekyll'),'');
for(const p of projects){const dir=join(dist,'projects',p.id);await mkdir(dir,{recursive:true});await writeFile(join(dir,'index.html'),detail(p));}
if(process.argv.includes('--export-root')){
 const target=resolve(process.argv[process.argv.indexOf('--export-root')+1]);
 for(const p of projects.filter(p=>p.kind==='skill')){const dir=join(target,p.repo,'site');await assets(dir);await writeFile(join(dir,'index.html'),detail(p,true));}
}
console.log(`Built portfolio + ${projects.length} project pages.`);
