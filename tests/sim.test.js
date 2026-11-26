const assert=require('node:assert/strict');
const {scenarios,simulate}=require('../sim.js');
let runs=0;
for(const arrivals of Object.values(scenarios))for(const budget of [0,12,24,48,72])for(const policy of ['fixed','feedback']) {
 const r=simulate(arrivals,budget,policy); assert.equal(r.completed+r.backlog,r.arrivals); assert.ok(r.spent<=budget); assert.ok(r.idle>=0); assert.ok(r.history.every(h=>h.backlog>=0&&h.remaining>=0)); assert.deepEqual(r,simulate(arrivals,budget,policy)); runs++;
}
assert.equal(simulate(scenarios.steady,48,'fixed').completed,48);
assert.equal(simulate(scenarios.steady,48,'feedback').completed,48);
assert.equal(simulate(scenarios.burst,48,'feedback').completed,48);
assert.equal(simulate([],48,'fixed').meanWait,null);
assert.throws(()=>simulate([-1])); assert.throws(()=>simulate([1],-1));
console.log(`${runs} scenario-policy-budget combinations + edge-case assertions passed`);
for(const [name,arrivals] of Object.entries(scenarios))for(const p of ['fixed','feedback']) {const {history,...r}=simulate(arrivals,48,p);console.log(name,JSON.stringify(r));}
