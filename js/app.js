/* ---- tabs ---- */
document.querySelectorAll('.tab').forEach(t=>{
  t.addEventListener('click',()=>{
    const go=t.dataset.go;
    document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===t));
    ['map','combos','learn','stuck'].forEach(id=>document.getElementById(id).hidden=(id!==go));
    window.scrollTo(0,0);
  });
});

/* ---- sheet ---- */
const sheet=document.getElementById('sheet'),scrim=document.getElementById('scrim'),sbody=document.getElementById('sheet-body');
const UTAG='<span class="utag" title="Not yet re-verified against the official guide — treat with care">unverified</span>';
function showSheet(html){sbody.innerHTML=html;sheet.classList.add('on');scrim.classList.add('on');}
function closeSheet(){sheet.classList.remove('on');scrim.classList.remove('on');}
scrim.addEventListener('click',closeSheet);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeSheet();});

function openSheet(id){
  const c=CTRL[id]; if(!c) return;
  let h=`<div class="stag"><span class="swatch" style="background:${c.color}"></span>${id.startsWith('sf')?'shift function':'control'}</div>`;
  h+=`<h2>${c.name}</h2><div class="ssub mono">${c.sub}</div><div class="sblurb">${c.blurb}</div>`;
  if(c.combos&&c.combos.length){h+=`<div class="scmb">combos</div>`;
    c.combos.forEach(([k,a])=>h+=`<div class="combo"><div class="k">${k}</div><div class="a">${a}</div></div>`);}
  showSheet(h);
}

function openIcon(btn){
  const d=DICONS[btn.dataset.icon]; if(!d) return;
  btn.classList.add('lit');                          // stays lit after the sheet closes
  let h=`<div class="stag"><span class="swatch" style="background:var(--amber)"></span>display icon</div>`;
  h+=`<h2>${d.name}</h2><div class="ssub mono">${d.sub}${d.u?' '+UTAG:''}</div><div class="sblurb">${d.blurb}</div>`;
  showSheet(h);
}
document.querySelectorAll('.dicon').forEach(b=>b.addEventListener('click',e=>{e.stopPropagation();openIcon(b);}));

/* ---- keys: tap = control info · long-press = the boxed shift function ---- */
const LP_MS=500;
document.querySelector('.device').addEventListener('contextmenu',e=>e.preventDefault());
document.querySelectorAll('.device .key').forEach(k=>{
  if(k.hasAttribute('data-noop'))return;
  let timer=null,fired=false;
  if(k.dataset.shift){
    k.addEventListener('pointerdown',()=>{fired=false;timer=setTimeout(()=>{
      fired=true;openSheet(k.dataset.shift);
      if(navigator.vibrate)navigator.vibrate(12);
    },LP_MS);});
    ['pointerup','pointerleave','pointercancel'].forEach(ev=>k.addEventListener(ev,()=>clearTimeout(timer)));
  }
  k.addEventListener('click',e=>{
    if(fired){fired=false;return;}                   // long-press already opened the shift sheet
    if(k.dataset.shift&&e.target.closest('.bot')){openSheet(k.dataset.shift);return;}  // lower cap = shift fn
    openSheet(k.dataset.id);
  });
});

/* ---- combos ---- */
const cats=[...new Set(COMBOS.map(c=>c[0]))]; let activeCat='All';
const chipsEl=document.getElementById('chips');
['All',...cats].forEach(cat=>{
  const b=document.createElement('button');b.className='chip'+(cat==='All'?' on':'');b.textContent=cat;
  b.addEventListener('click',()=>{activeCat=cat;document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('on',c===b));renderCombos();});
  chipsEl.appendChild(b);
});
const qEl=document.getElementById('q'),listEl=document.getElementById('combo-list');
qEl.addEventListener('input',renderCombos);
function renderCombos(){
  const q=qEl.value.trim().toLowerCase();
  let rows=COMBOS.filter(([cat,k,a])=>(activeCat==='All'||cat===activeCat)&&(!q||(cat+' '+k+' '+a).toLowerCase().includes(q)));
  if(!rows.length){listEl.innerHTML=`<div class="empty">Nothing matches "${qEl.value}". Try a plainer word — a button name, or what you want to do.</div>`;return;}
  let h='',cur='';rows.forEach(([cat,k,a,u])=>{if(cat!==cur){h+=`<div class="cathead">${cat}</div>`;cur=cat;}h+=`<div class="combo"><div class="k">${k}</div><div class="a">${a}${u?UTAG:''}</div></div>`;});
  listEl.innerHTML=h;
}
renderCombos();

/* ---- recipes ---- */
const rl=document.getElementById('recipe-list');
RECIPES.forEach((r,i)=>{
  const el=document.createElement('div');el.className='recipe';
  const steps=r.steps.map((s,j)=>`<div class="step"><div class="sn">${j+1}</div><div class="sx">${s[0]}</div></div>`).join('');
  el.innerHTML=`<button aria-expanded="false"><span class="rnum">${String(i+1).padStart(2,'0')}</span><span><span class="rt">${r.t}</span><div class="rs">${r.s}</div></span><span class="caret">›</span></button><div class="steps">${steps}<div class="tip">💡&nbsp;<div>${r.tip}</div></div></div>`;
  el.querySelector('button').addEventListener('click',()=>{const o=el.classList.toggle('open');el.querySelector('button').setAttribute('aria-expanded',o);});
  rl.appendChild(el);
});

/* ---- fixes ---- */
const fl=document.getElementById('fix-list');
FIXES.forEach(f=>{
  const el=document.createElement('div');el.className='fix';
  el.innerHTML=`<button aria-expanded="false"><span>${f.p}</span><span class="caret">›</span></button><div class="body"><div class="cause">${f.c}</div><div class="do">${f.d}</div></div>`;
  el.querySelector('button').addEventListener('click',()=>{const o=el.classList.toggle('open');el.querySelector('button').setAttribute('aria-expanded',o);});
  fl.appendChild(el);
});

/* ---- firmware / content stamp ---- */
const metaEl=document.getElementById('metaline-combos');
if(metaEl) metaEl.innerHTML=`content targets <b>${META.device} · OS ${META.os}</b> · checked ${META.checked}<br>combos can change with firmware updates`;

/* ---- offline (service worker) ---- */
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js').catch(()=>{/* file:// or unsupported — app still works online */});
  });
}
