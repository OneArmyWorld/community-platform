import{j as r,a as e}from"./jsx-runtime-913be41c.js";import{U as o}from"./Username-8771a1c3.js";import{u as p}from"./emotion-element-6a883da9.browser.esm-becb4ad2.js";import{F as a,b as n,H as x}from"./theme-ui-components.esm-784287e5.js";const s=i=>{const{author:l,children:c,contributors:t}=i,m=p();return r(a,{sx:{flexDirection:"column",alignItems:"center"},children:[r(n,{variant:"body",sx:{fontSize:2},children:["Made by",e(o,{user:l,sx:{ml:1}})]}),t&&t.length?r(n,{"data-testid":"ArticleCallToAction: contributors",variant:"quiet",sx:{display:"block",mt:2,textAlign:"center",fontSize:2},children:["With contributions from:"," ",t.map((u,d)=>e(o,{user:u,sx:{mr:1}},d))]}):null,e(x,{sx:{my:4},children:"Like what you see? 👇"}),e(a,{sx:{gap:2,[`@media screen and (max-width: ${m.breakpoints[0]})`]:{flexDirection:"column"}},children:c})]})};try{s.displayName="ArticleCallToAction",s.__docgenInfo={description:"",displayName:"ArticleCallToAction",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"User"}},contributors:{defaultValue:null,description:"",name:"contributors",required:!1,type:{name:"User[]"}}}}}catch{}export{s as A};
//# sourceMappingURL=ArticleCallToAction-0a53192e.js.map
