(()=>{"use strict";const e={"My Project One":[{checked:!1,desc:"My Description about this note is null",dueDate:"06/26/2021",noteName:"My Note 1 from P1"},{checked:!1,desc:"My Description about this note is null",dueDate:"06/26/2021",noteName:"My Note 2 from P1"},{checked:!1,desc:"My Description about this note is null",dueDate:"06/26/2021",noteName:"My Note 3 from P1"}],"My Project Two":[{checked:!1,desc:"My Description about this note is null",dueDate:"06/26/2021",noteName:"My Note 1 from P2"}],"My Project Three":[{checked:!1,desc:"My Description about this note is null",dueDate:"06/26/2021",noteName:"My Note 1 from P3"}]},t=function(t,n){if(null===JSON.parse(window.localStorage.getItem("projectTitles"))&&window.localStorage.setItem("projectTitles",JSON.stringify(e)),"set"===t)window.localStorage.setItem("projectTitles",JSON.stringify(n));else if("get"===t)return JSON.parse(window.localStorage.getItem("projectTitles"))},n=function(e){let n=t("get");const o=document.getElementById("noteContents");document.getElementById("selectedProjName").innerText=e;for(let d=0;d<n[e].length;){const c=document.createElement("div");c.setAttribute("class","eachNote"),c.setAttribute("id","note"+d);const l=document.createElement("div");l.setAttribute("class","checkOff");const s=document.createElement("input");s.setAttribute("type","checkbox"),s.setAttribute("id","input"+d),!0===n[e][d].checked?s.checked=!0:s.checked=!1,s.addEventListener("change",(()=>{!0===s.checked?(c.style.opacity="50%",c.style.background="gray",n[e][d-1].checked=!0,t("set",n)):!1===s.checked&&(c.style.opacity="100%",c.style.background="rgb(202, 174, 136)",n[e][d-1].checked=!1,t("set",n))}));const i=document.createElement("div");i.setAttribute("class","noteTitle"),i.innerText=n[e][d].noteName;const a=document.createElement("div");a.setAttribute("class","noteDate"),a.innerText=n[e][d].dueDate;const r=document.createElement("div");r.setAttribute("class","noteDesc"),r.innerText=n[e][d].desc,o.appendChild(c),c.appendChild(l),l.appendChild(s),c.appendChild(i),c.appendChild(a),c.appendChild(r),++d}for(let t=0;t<n[e].length;){const e=document.getElementById("note"+t),n=document.getElementById("input"+t);!0===n.checked?(e.style.opacity="50%",e.style.background="gray"):!1===n.checked&&(e.style.opacity="100%",e.style.background="rgb(202, 174, 136)"),++t}},o=function(e){const t=document.getElementById("projNameInput").value;if(document.getElementById("addNotetitle").value,"title"===e)return t<1&&(document.getElementById("projNameInput").style.boxShadow="0 0 10px 4px red",!0);if("note"===e){let e=["addNotetitle","addNotedesc","addNoteDate"],t=!1;for(let n=0;n<e.length;){let o=document.getElementById(e[n]).value,d=document.getElementById(e[n]);o<1?(d.style.boxShadow="0 0 10px 4px red",t=!0,console.log("inside valid loop")):d.style.boxShadow="",++n}return t}if("clear"===e){let e=["addNotetitle","addNotedesc","addNoteDate","projNameInput"];for(let t=0;t<e.length;)document.getElementById(e[t]).style.boxShadow="",++t}else console.log("error, wrong argument passed for fieldValid")},d=function(){let e=t("get"),d=Object.keys(e);document.getElementById("projNameSubmit").addEventListener("click",(()=>{const e=document.getElementById("projNameInput").value;o("title")||function(e){let n=t("get");if(e in n)return document.getElementById("projNameInput").style.boxShadow="0 0 10px 4px red",!0;n[e]=[],t("set",n)}(e)||function(e){const t=document.getElementById("projectList");let n=document.createElement("li");n.setAttribute("id",e),n.innerText=e,n.addEventListener("click",(()=>{const t=document.getElementById("noteList");document.getElementById("projects"),projects.style.display="none",t.style.display="block",document.getElementById("selectedProjName").innerText=e,loadNotes(e)}));let o=document.createElement("div"),d=document.createElement("img");d.setAttribute("src","img/trashcan.webp"),t.appendChild(n),n.appendChild(o),o.appendChild(d)}(e)}));const c=document.getElementById("projectList");for(let e=0;e<d.length;){let t=document.createElement("li");t.setAttribute("id",d[e]),t.innerText=d[e],t.addEventListener("click",(()=>{const t=document.getElementById("noteList");document.getElementById("projects"),projects.style.display="none",t.style.display="block",n(d[e-1])}));let o=document.createElement("div"),l=document.createElement("img");l.setAttribute("src","img/trashcan.webp"),c.appendChild(t),t.appendChild(o),o.appendChild(l),++e}};!function(){t(),d();const e=document.getElementById("backBtn"),n=document.getElementById("addBackBtn"),c=document.getElementById("noteContents"),l=document.getElementById("addBtn"),s=document.getElementById("addNoteCont"),i=document.getElementById("noteList"),a=document.getElementById("projects");e.addEventListener("click",(()=>{a.style.display="block",i.style.display="none",s.style.display="none",function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}(c),o("clear")})),l.addEventListener("click",(()=>{a.style.display="none",i.style.display="none",s.style.display="block",o("clear")})),n.addEventListener("click",(()=>{a.style.display="none",i.style.display="block",s.style.display="none",o("clear")})),document.getElementById("noteSubmit").addEventListener("click",(()=>{if(console.log(o("note")),!0!==o("note"))if(!1===o("note")){let e=document.getElementById("selectedProjName").innerText;console.log("adding to notes object:   "+e);!function(e,n,o,d){console.log(e);let c=t("get");c[e].push({noteName:n,desc:o,dueDate:d,checked:!1}),t("set",c)}(e,document.getElementById("addNotetitle").value,document.getElementById("addNotedesc").value,document.getElementById("addNoteDate").value)}else console.log("evenlistener bypass")}))}()})();