const {run:v}=require("../vector_atrium/atrium_flow.js");
const {run:p}=require("../polygon_orchard/orchard_growth.js");
const {run:c}=require("../curve_basilica/basilica_curvature.js");
const {run:s}=require("../surface_loom/loom_weaver.js");
const {run:vol}=require("../volume_crucible/crucible_melt.js");
async function main(){console.log("Anthology Terminal…\n");console.log("Vector:",v(0));console.log("Polygon:",p(0));console.log("Curve:",c(0));console.log("Surface:",s(0));console.log("Volume:",vol(0));}
if(require.main===module)main();
