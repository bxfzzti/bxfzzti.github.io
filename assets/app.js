for(const b of document.querySelectorAll('[data-filter]'))b.addEventListener('click',()=>{
 const key=b.dataset.filter;let count=0;
 for(const g of document.querySelectorAll('[data-group]')){
  g.hidden=key!=='all'&&g.dataset.group!==key;
 }
 for(const p of document.querySelectorAll('[data-kind]')){
  p.hidden=key!=='all'&&p.dataset.kind!==key;
  if(!p.hidden)count++;
 }
 for(const button of document.querySelectorAll('[data-filter]'))button.setAttribute('aria-pressed',String(button===b));
 const status=document.getElementById('filter-status');
 if(status)status.textContent='显示'+count+'个项目';
});
for(const b of document.querySelectorAll('[data-copy]'))b.addEventListener('click',async()=>{
 const text=document.getElementById(b.dataset.copy).textContent,status=b.closest('.start-card').querySelector('.copy-status');
 try{await navigator.clipboard.writeText(text);status.textContent='已复制！直接粘贴发给你的 AI 助手即可。';}catch{status.textContent='当前浏览器无法自动复制，请选中上方文字复制。';}
});
for(const b of document.querySelectorAll('[data-copy-text]'))b.addEventListener('click',async()=>{
 const text=b.dataset.copyText,status=b.closest('.card-copy').querySelector('.inline-copy-status');
 try{
  await navigator.clipboard.writeText(text);
  const old=b.textContent;
  b.textContent='已复制 ✓';
  status.textContent='已复制！直接粘贴发给你的 AI 助手即可使用。';
  setTimeout(()=>{b.textContent=old;},2200);
 }catch{
  status.textContent='无法自动复制，请点右侧「详细用法」手动复制。';
 }
});
