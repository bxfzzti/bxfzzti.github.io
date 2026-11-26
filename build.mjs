import {mkdir,writeFile,copyFile} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {projects} from './projects.mjs';
export const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const origin='https://bxfzzti.github.io/';
const groups=[
 {key:'tool',badge:'01 · 点开就能用',title:'在线工具',desc:'打开网页就能直接算、直接抽，不需要安装软件，也不上传你的数据。'},
 {key:'skill',badge:'02 · 复制给 AI 用',title:'AI Skills 与工作流',desc:'不是传统网页，而是写给 AI 助手的“操作手册”。点进项目复制提示词发给 AI，它就会按专业流程帮你干活。'},
 {key:'private',badge:'03 · 思路展示',title:'私有项目介绍',desc:'仅分享脱敏后的功能结构与工作流思路，不对外开放登录或源码。'}
];
const header=(home='../../')=>`<header class="nav"><a class="brand" href="${home}"><span class="brand-dot">b.</span>bxfzzti<span class="slash">/</span><span class="brand-sub">项目与 Skills</span></a><nav><a href="${home}#guide">怎么用</a><a href="${home}#projects">全部项目</a><a href="${home}#about">关于</a><a href="https://github.com/bxfzzti" target="_blank" rel="noreferrer">GitHub ↗</a></nav></header>`;
const footer=`<footer class="footer"><span>bxfzzti · 个人项目</span><span>让想法落地，让工具有用。</span><a href="https://github.com/bxfzzti">GitHub ↗</a></footer>`;
function shell(title,description,body,prefix='./'){
 return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#f5f5f7"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="icon" href="${prefix}assets/icon.svg"><link rel="stylesheet" href="${prefix}assets/styles.css"></head><body>${body}<script src="${prefix}assets/app.js" defer></script></body></html>`;
}
function visual(p){return `<div class="visual ${p.tone}" aria-label="${esc(p.name)}功能示意"><div class="mock-window"><div class="window-dots"><i></i><i></i><i></i><span>${esc(p.name)}</span></div><div class="mock-content">${p.visual}</div></div></div>`;}
function card(p){
 const primaryLink=p.kind==='tool'?`<a class="card-cta" href="${p.url}">直接打开使用 ↗</a>`:p.kind==='skill'?`<a class="card-cta" href="projects/${p.id}/#start">复制给 AI 用 ↗</a>`:`<a class="card-cta muted-cta" href="projects/${p.id}/">查看介绍 ↗</a>`;
 return `<article class="project-card" data-kind="${p.kind}"><a class="card-art" href="projects/${p.id}/" aria-label="了解${esc(p.name)}">${visual(p)}</a><div class="card-copy"><div class="card-meta"><span>${esc(p.tag)}</span><span class="status ${p.kind}">${esc(p.status)}</span></div><h3><a href="projects/${p.id}/">${esc(p.name)}</a></h3>${p.audience?`<p class="audience-chip">适合：${esc(p.audience)}</p>`:''}<p class="card-summary">${esc(p.summary)}</p><div class="card-links"><a href="projects/${p.id}/">了解详情 <span>↗</span></a>${primaryLink}</div></div></article>`;
}
function index(){
 const counts={all:projects.length,tool:projects.filter(p=>p.kind==='tool').length,skill:projects.filter(p=>p.kind==='skill').length,private:projects.filter(p=>p.kind==='private').length};
 const sections=groups.map(g=>{
  const list=projects.filter(p=>p.kind===g.key);
  if(!list.length)return '';
  return `<div class="group-block" data-group="${g.key}"><div class="group-head"><div><span class="group-badge ${g.key}">${g.badge}</span><h3>${g.title} <small>${list.length}</small></h3></div><p>${g.desc}</p></div><div class="project-grid ${list.length===1?'single':''}">${list.map(card).join('')}</div></div>`;
 }).join('');
 const body=header('./')+`<main><section class="hero"><p class="eyebrow"><span class="live-dot"></span> 来自真实问题的个人项目与 AI Skills</p><h1>把想法，<br>做成<span>用得上的工具。</span></h1><p class="hero-desc">这里收录两类东西：<strong>点开就能用的小网页</strong>，和<strong>发给 AI 就能照着干活的 Skill 手册</strong>。无论是不是程序员，都能 30 秒看懂怎么用。</p><div class="hero-actions"><a class="button" href="#projects">浏览全部 ${counts.all} 个项目 <span>↓</span></a><a class="quiet-link" href="#guide">第一次来？先看怎么用 ↓</a></div><div class="hero-index"><span>生活决策</span><i></i><span>团队协作</span><i></i><span>网络排障</span><i></i><span>求职表达</span><i></i><span>内容创作</span></div><div class="hero-orbit" aria-hidden="true"><span>⌂</span><span>◈</span><span>▤</span><span>✦</span></div></section>
 <section class="section guide-section" id="guide"><div class="guide-strip"><article><span class="guide-tag tool">在线工具 · ${counts.tool} 个</span><h3>像普通网页一样点开就用</h3><p>不需要安装软件，也不用注册账号。所有计算都在你自己的浏览器里完成。</p></article><article><span class="guide-tag skill">AI Skills · ${counts.skill} 个</span><h3>复制一段话，交给 AI 帮你干活</h3><p>Skill 是写给 AI 的专业流程手册。点进任意 Skill 页面复制提示词，发给 Antigravity、Claude、Codex 或 Cursor 即可使用。</p></article><article><span class="guide-tag private">私有介绍 · ${counts.private} 个</span><h3>只分享思路，不公开源码</h3><p>部分自用工作台涉及个人流程，仅在这里展示脱敏后的功能结构，方便交流灵感。</p></article></div></section>
 <section class="projects section" id="projects"><div class="section-heading"><div><p class="eyebrow">SELECTED PROJECTS</p><h2>各有用处。<br><span>按使用方式分好了类。</span></h2></div><p class="section-aside">想直接上手，看「在线工具」。<br>想让 AI 按套路干活，看「AI Skills」。</p></div><div class="filters" role="group" aria-label="筛选项目"><button aria-pressed="true" data-filter="all">全部项目 <b>${counts.all}</b></button><button aria-pressed="false" data-filter="tool">在线工具 <b>${counts.tool}</b></button><button aria-pressed="false" data-filter="skill">AI Skills <b>${counts.skill}</b></button><button aria-pressed="false" data-filter="private">私有介绍 <b>${counts.private}</b></button></div><p id="filter-status" class="sr-only" role="status">显示${counts.all}个项目</p>${sections}</section>
 <section class="section fork-section"><div class="section-heading small"><div><p class="eyebrow">LEARNING IN THE OPEN</p><h2>也向好的开源项目学习。</h2></div><span class="muted">Fork / 原作者作品</span></div><div class="fork-grid"><article><span class="fork-label">FORK · progressrdx</span><h3>Codex Auto Resume</h3><p>本地长任务续跑工具。公开页面保留上游归属；兼容范围以原项目说明为准。</p><a href="https://github.com/bxfzzti/codex-auto-resume">我的 Fork ↗</a><a href="https://github.com/progressrdx/codex-auto-resume">原项目 ↗</a></article><article><span class="fork-label">FORK · houshanren</span><h3>杭州购房知识</h3><p>源于2017年的购房经验资料，作为历史阅读材料；当期政策需要重新核验。</p><a href="https://github.com/bxfzzti/hangzhou_house_knowledge">我的 Fork ↗</a><a href="https://github.com/houshanren/hangzhou_house_knowledge">原项目 ↗</a></article></div></section>
 <section id="about" class="section about"><p class="eyebrow">ABOUT THIS COLLECTION</p><h2>工具不用很大，<br>能解决一个问题就好。</h2><p>这里是 bxfzzti 的个人项目集合。记录一些从真实生活和工作需求出发、逐步做成的网页工具和 AI Skills。每个入口都会用大白话说清楚它能做什么、适合谁、怎么开始，以及边界在哪里。</p><a class="quiet-link" href="https://github.com/bxfzzti">查看 GitHub 主页 ↗</a><details class="archives"><summary>历史仓库与空项目</summary><p>以下仓库目前没有可展示的产品内容，保留原链接。</p>${['bxfzzti','yanxuanone.github.io','yanxuanone'].map(r=>`<a href="https://github.com/bxfzzti/${r}">${r} ↗</a>`).join('')}</details></section></main>`+footer;
 return shell('bxfzzti · 把想法做成用得上的工具','个人项目与 AI Skills 导航：买房小账本、团队抽签、家庭网络排障、一页纸简历、内容创作流、搜索路由与私有项目介绍。',body);
}
function detail(p,standalone=false){
 const prefix=standalone?'./':'../../';
 const home=standalone?origin:'../../';
 const repo=p.repo?'https://github.com/bxfzzti/'+p.repo:null;
 const call=p.kind==='tool'?`<a class="button" href="${p.url}">打开工具 <span>↗</span></a>`:p.prompt?'<a class="button" href="#start">复制给 AI 用 <span>↓</span></a>':'<a class="button" href="#features">了解这个项目 <span>↓</span></a>';
 const body=header(home)+`<main class="detail"><section class="detail-hero section"><div class="detail-text"><a class="back" href="${home}#projects">← 返回全部项目</a><p class="eyebrow">${esc(p.status)} · ${esc(p.tag)}</p><p class="product-name"><span class="product-icon ${p.tone}">${p.symbol}</span>${esc(p.name)}</p><h1>${esc(p.headline).replace('\n','<br>')}</h1>${p.audience?`<p class="audience-chip detail-audience">适合人群：${esc(p.audience)}</p>`:''}<p class="hero-desc">${esc(p.summary)}</p><div class="hero-actions">${call}${repo?`<a class="quiet-link" href="${repo}">查看 GitHub 源码 ↗</a>`:''}</div></div>${visual(p)}</section>
 <section id="features" class="section feature-section"><p class="eyebrow">WHY THIS PROJECT</p><h2>它能帮你解决什么问题。</h2><div class="feature-grid">${p.features.map(([h,t],i)=>`<article><span class="step-number">0${i+1}</span><h3>${esc(h)}</h3><p>${esc(t)}</p></article>`).join('')}</div></section>
 <section id="start" class="section start-section"><div><p class="eyebrow">GET STARTED</p><h2>${p.kind==='private'?'关于展示内容':'三步开始使用。'}</h2><ol>${p.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div><div class="start-card">${p.prompt?`<div class="start-card-header"><span>一键复制，发给你的 AI 助手</span><button class="copy" data-copy="install-prompt">复制这段话</button></div><pre id="install-prompt">${esc(p.prompt)}</pre><p class="copy-hint">支持 Antigravity、Claude Code、Codex、Cursor 等支持 Skill 的 AI 工具。</p><p class="copy-status" role="status"></p>`:p.kind==='tool'?`<span class="product-icon ${p.tone}">${p.symbol}</span><h3>现在就可以试试。</h3><p>打开网页后按实际需要填写即可。本站不会替你上传名单或家庭信息。</p><a class="button" href="${p.url}">打开${esc(p.name)} ↗</a>`:`<span class="product-icon slate">▦</span><h3>只分享思路与功能。</h3><p>源码和真实运行数据保持私有。这是项目介绍，没有公共后台或登录入口。</p>`}</div></section>
 <section class="section boundary"><div><h3>使用边界</h3><p>${esc(p.boundary)}</p></div><div><h3>数据与隐私</h3><p>${esc(p.privacy)}</p></div></section><section class="section bottom-cta"><h2>再看看别的项目。</h2><a href="${home}#projects" class="button">返回项目集 <span>↗</span></a></section></main>`+footer;
 return shell(p.name+' · bxfzzti 的个人项目',p.summary,body,prefix);
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
