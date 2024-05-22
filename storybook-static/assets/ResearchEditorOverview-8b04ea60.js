import{j as l,a as e,F as g}from"./jsx-runtime-913be41c.js";import{c as b,b as v,a as i}from"./index.esm-f81faee8.js";import{B as o}from"./Button-68b4c09e.js";import{I as s}from"./InternalLink-949536b4.js";import{C as w,H as x,B as c,b as d}from"./theme-ui-components.esm-600c41e5.js";const y=b({isActive:v().required(),title:i().required(),status:i().optional(),slug:i().nullable()}),u=n=>{const{updates:a,sx:h,researchSlug:t,showCreateUpdateButton:m,showBackToResearchButton:p}=n;return l(w,{sx:{p:4,...h},children:[e(x,{as:"h2",mb:3,variant:"small",children:"Research overview"}),a!=null&&a.length?e(c,{as:"ul",sx:{margin:0,mb:4,p:0,pl:3},children:a.filter(r=>y.isValidSync(r)).map((r,f)=>e(c,{as:"li",sx:{mb:1},children:l(d,{variant:"quiet",children:[r.status==="draft"?e(d,{sx:{display:"inline-block",verticalAlign:"middle",color:"black",fontSize:1,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",background:"accent.base",padding:1,borderRadius:1,borderBottomRightRadius:1,mr:1},children:"Draft"}):null,r.isActive?e("strong",{children:r.title}):l(g,{children:[r.title,r.slug?e(s,{to:`/research/${t}/edit-update/${r.slug}`,sx:{display:"inline-block",ml:1},children:"Edit"}):null]})]})},f))}):null,m?e(o,{small:!0,sx:{mr:2},"data-cy":"create-update",children:e(s,{to:`/research/${t}/new-update`,sx:{color:"black"},children:"Create update"})}):null,p?e(o,{small:!0,variant:"outline",children:e(s,{to:`/research/${t}/edit`,sx:{color:"black"},children:"Back to research"})}):null]})};try{u.displayName="ResearchEditorOverview",u.__docgenInfo={description:"",displayName:"ResearchEditorOverview",props:{updates:{defaultValue:null,description:"",name:"updates",required:!0,type:{name:"ResearchEditorOverviewUpdate[]"}},researchSlug:{defaultValue:null,description:"",name:"researchSlug",required:!0,type:{name:"string"}},newItemTitle:{defaultValue:null,description:"",name:"newItemTitle",required:!1,type:{name:"string"}},showCreateUpdateButton:{defaultValue:null,description:"",name:"showCreateUpdateButton",required:!1,type:{name:"boolean"}},showBackToResearchButton:{defaultValue:null,description:"",name:"showBackToResearchButton",required:!1,type:{name:"boolean"}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{u as R};
//# sourceMappingURL=ResearchEditorOverview-8b04ea60.js.map
