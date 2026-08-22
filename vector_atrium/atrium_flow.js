const fs=require("fs");const path=require("path");
const DIR=path.join(__dirname,"vectors");
function run(tick=0){
  const items=fs.readdirSync(DIR).filter(f=>f.endsWith(".va")).map(f=>{
    const t=fs.readFileSync(path.join(DIR,f),"utf8");
    return parseFloat((t.match(/magnitude:\s*([\d.]+)/)||[])[1]||0.5);
  });
  const avg=items.reduce((a,b)=>a+b,0)/Math.max(1,items.length);
  console.log(`[vector] tick=${tick}  magnitude=${avg.toFixed(3)}  n=${items.length}`);
  return {magnitude:+avg.toFixed(3),n:items.length};
}
module.exports={run};
if(require.main===module)for(let t=0;t<3;t++)run(t);
