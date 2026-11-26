(function(root){
'use strict';
const scenarios = {
  steady: Array(24).fill(2),
  burst: [0,0,0,0,0,0,5,5,5,5,5,5,0,0,0,0,3,3,3,3,3,3,0,0],
  late: [...Array(18).fill(0),...Array(6).fill(8)]
};
function simulate(arrivals, budget=48, policy='fixed') {
  if (!Array.isArray(arrivals) || !arrivals.every(x=>Number.isSafeInteger(x)&&x>=0) || !Number.isSafeInteger(budget)||budget<0 || !['fixed','feedback'].includes(policy)) throw new Error('invalid simulation inputs');
  let queue=[],remaining=budget, completed=0,totalWait=0,peak=0,idle=0; const history=[];
  arrivals.forEach((count,t)=>{
    for(let j=0;j<count;j++) queue.push(t);
    const desired=policy==='fixed'?2:Math.min(4,queue.length);
    const allocated=Math.min(remaining,desired);
    remaining-=allocated;
    const done=Math.min(allocated,queue.length);
    for(let j=0;j<done;j++) totalWait+=t-queue.shift();
    completed+=done; idle+=allocated-done; peak=Math.max(peak,queue.length);
    history.push({tick:t+1,arrivals:count,allocated,completed,backlog:queue.length,remaining});
  });
  return {policy,arrivals:arrivals.reduce((a,b)=>a+b,0),completed,backlog:queue.length,spent:budget-remaining,idle,peak,meanWait:completed?totalWait/completed:null,history};
}
const api={scenarios,simulate};
if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.FreeBody=api;
})(typeof globalThis!=='undefined'?globalThis:this);
