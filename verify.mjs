import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,dirname,join} from 'node:path';
import {projects} from './projects.mjs';
import assert from 'node:assert/strict';
const root=resolve('dist');
async function walk(dir){let files=[];for(const item of await readdir(dir,{withFileTypes:true})){const p=join(dir,item.name);files.push(...(item.isDirectory()?await walk(p):[p]));}return files;}
const files=await walk(root);let checked=0;
for(const file of files.filter(f=>f.endsWith('.html'))){const html=await readFile(file,'utf8');assert.match(html,/<title>[^<]+<\/title>/);assert.match(html,/name="viewport"/);assert(!html.includes('/Users/'));assert(!html.includes('localhost:'));
 for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){const url=match[1];if(url.startsWith('https://'))continue;assert(!url.includes(':'),'Unexpected protocol: '+url);const path=url.split('#')[0];if(!path)continue;let target=resolve(dirname(file),path);assert(target.startsWith(root));if((await stat(target)).isDirectory())target=join(target,'index.html');await stat(target);checked++;}
}
assert.equal(projects.length,6);assert.equal(projects.filter(p=>p.kind==='private').length,1);
for(const p of projects.filter(p=>p.kind==='private')){assert.equal(p.repo,undefined);assert.equal(p.url,undefined);assert.equal(p.prompt,undefined);}
const index=await readFile(join(root,'index.html'),'utf8');for(const parent of ['progressrdx','houshanren'])assert(index.includes(parent));
console.log('PASS: 7 pages, '+checked+' local links/assets, private project has no repository or live entry, forks attributed.');
