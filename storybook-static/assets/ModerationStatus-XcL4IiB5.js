import{j as o}from"./jsx-runtime-CexXSJP5.js";import{T as s}from"./theme-ui-components.esm-Cq1N8tMa.js";const i=e=>{const{contentType:t,sx:a}=e;let{status:r}=e;if("accepted"===r)return null;"event"===t&&(r="draft"!==r?r:"awaiting-moderation");let i="";switch(r){case"rejected":i="library"===t?"Needs to improve to be accepted":"Rejected";break;case"draft":i="Draft";break;default:i="Awaiting moderation"}return o.jsx(s,{sx:{...a,display:"inline-block",color:"rejected"===r?"red":"black",fontSize:1,whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",background:"accent.base",padding:1,borderRadius:1,borderBottomRightRadius:1},"data-cy":`moderationstatus-${r}`,children:i})};try{i.displayName="ModerationStatus",i.__docgenInfo={description:"",displayName:"ModerationStatus",props:{status:{defaultValue:null,description:"",name:"status",required:!0,type:{name:"string"}},contentType:{defaultValue:null,description:"",name:"contentType",required:!0,type:{name:"enum",value:[{value:'"event"'},{value:'"library"'},{value:'"research"'},{value:'"question"'}]}},sx:{defaultValue:null,description:"",name:"sx",required:!1,type:{name:"ThemeUIStyleObject"}}}}}catch{}export{i as M};