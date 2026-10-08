import test from 'node:test';
import assert from 'node:assert/strict';
class Element {constructor(id){this.id=id;this.style={};this.hidden=false;this.dataset={};this.tagName='DIV';this.handlers={};this._html='';this.disabled=false;}set innerHTML(s){this._html=s;for(const match of s.matchAll(/id="([^"]+)"/g))get(match[1]);}get innerHTML(){return this._html}addEventListener(n,f){this.handlers[n]=f}click(){if(!this.disabled)this.onclick?.()}getBoundingClientRect(){return {left:0,top:0,width:1000,height:700}}getContext(){return new Proxy({}, {get:(o,k)=>k==='createRadialGradient'?()=>({addColorStop(){}}):()=>{},set:()=>true})}}
const els=new Map(),get=id=>{if(!els.has(id))els.set(id,new Element(id));return els.get(id)};
globalThis.document={getElementById:get,querySelectorAll:()=>[],addEventListener(){},hidden:false};const storage=new Map();globalThis.localStorage={getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,v)};let frame;globalThis.requestAnimationFrame=f=>{frame=f};globalThis.window={};
await import('./app.mjs');
test('frontend initializes, starts, selects a pad via pointer, pauses, help/cancel/restart',()=>{
 assert.equal(get('gold').textContent,315);get('begin').click();assert.equal(get('intro').hidden,true);
 get('map').handlers.pointerdown({clientX:120,clientY:245});assert.equal(get('selection-title').textContent,'建造格 1');
 get('next').click();assert.match(get('wave').innerHTML,/1<small>/);frame(100);frame(180);
 get('pause').click();assert.equal(get('pause').textContent,'繼續');const before=JSON.parse(storage.get('emberpass-save')).wave;
 get('next').click();assert.equal(JSON.parse(storage.get('emberpass-save')).wave,before);
 get('help').click();assert.match(get('overlay-content').innerHTML,/守望者手冊/);get('close-help').click();assert.equal(get('overlay').hidden,true);
 get('restart').click();get('cancel-restart').click();assert.equal(get('overlay').hidden,true);
 get('restart').click();get('confirm-restart').click();assert.match(get('wave').innerHTML,/0<small>/);assert.equal(get('gold').textContent,315);
 get('speed').click();assert.equal(get('speed').textContent,'2× 速度');frame(260);
});
