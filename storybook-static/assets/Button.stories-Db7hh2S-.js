import{j as e}from"./jsx-runtime-CexXSJP5.js";import{g as Y}from"./Icon-D0SbGKS6.js";import{B as t}from"./Button-C33u2uyw.js";import"./index-BP8_t0zE.js";import"./emotion-styled.browser.esm-Dz2BNYeh.js";import"./extends-CF3RwP-h.js";import"./parseProps-780b287c.browser.esm-DiCerVr_.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-UWD3gXM2.js";import"./contact-DD4r1-LP.js";import"./supporter-D7hp958O.js";import"./icon-arrow-down-CJeToCJe.js";import"./icon-star-active-ClN6U5FF.js";import"./theme-ui-core-jsx-runtime.browser.esm-CH0qhC10.js";import"./hoist-non-react-statics.cjs-CQI8syxn.js";import"./theme-ui-components.esm-BngKL4Rx.js";const pe={title:"Components/Button",component:t},a=[{small:!0,label:"Small"},{label:"Default"},{large:!0,label:"Large"}],o=()=>e.jsx(t,{children:"Button Text"}),s=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{disabled:!0,children:"Disabled"}),e.jsx(t,{icon:"delete",disabled:!0,children:"Disabled"})]}),i=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{icon:"delete",variant:"primary",children:"Primary"}),a.map(((n,r)=>e.jsx(t,{variant:"primary",...n,children:n.label},r)))]}),c=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{icon:"delete",variant:"secondary",children:"Secondary"}),a.map(((n,r)=>e.jsx(t,{variant:"secondary",...n,children:n.label},r)))]}),l=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{icon:"delete",variant:"destructive",children:"Destructive"}),a.map(((n,r)=>e.jsx(t,{variant:"destructive",...n,children:n.label},r)))]}),u=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"subtle",children:"Subtle"}),e.jsx(t,{variant:"subtle",icon:"account-circle",children:"Subtle"}),a.map(((n,r)=>e.jsx(t,{variant:"subtle",...n,children:n.label},r)))]}),d=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"outline",icon:"account-circle",children:"Outline"}),a.map(((n,r)=>e.jsx(t,{variant:"outline",...n,children:n.label},r)))]}),m=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{small:!0,children:"Small Button"}),e.jsx(t,{small:!0,icon:"delete",children:"Small Button with Icon"})]}),p=()=>e.jsxs(e.Fragment,{children:[e.jsx(t,{large:!0,children:"Large Button"}),e.jsx(t,{large:!0,icon:"delete",children:"Large Button with Icon"})]}),B=()=>e.jsx(e.Fragment,{children:e.jsx(t,{large:!0,icon:"delete",showIconOnly:!0,children:"Icon Button with hidden text"})}),v=()=>e.jsx(e.Fragment,{children:a.map((n=>["primary","secondary","outline"].map((r=>Object.keys(Y).map(((a,o)=>e.jsxs(t,{icon:a,...n,variant:r,children:[n.label," with Icon"]},o)))))))});var h,y,x,g,b,j,S,k,O,I,D,w,F,z,L,P,f,_,E,T,C,R,q,A,G,H,J,K,M,N,Q,U,V;o.parameters={...o.parameters,docs:{...null==(h=o.parameters)?void 0:h.docs,source:{originalSource:"() => <Button>Button Text</Button>",...null==(x=null==(y=o.parameters)?void 0:y.docs)?void 0:x.source}}},s.parameters={...s.parameters,docs:{...null==(g=s.parameters)?void 0:g.docs,source:{originalSource:'() => <>\n    <Button disabled>Disabled</Button>\n    <Button icon="delete" disabled>\n      Disabled\n    </Button>\n  </>',...null==(j=null==(b=s.parameters)?void 0:b.docs)?void 0:j.source}}},i.parameters={...i.parameters,docs:{...null==(S=i.parameters)?void 0:S.docs,source:{originalSource:"() => <>\n    <Button variant={'primary'}>Primary</Button>\n    <Button icon=\"delete\" variant={'primary'}>\n      Primary\n    </Button>\n    {sizeOptions.map((v, k) => <Button key={k} variant={'primary'} {...v}>\n        {v.label}\n      </Button>)}\n  </>",...null==(O=null==(k=i.parameters)?void 0:k.docs)?void 0:O.source}}},c.parameters={...c.parameters,docs:{...null==(I=c.parameters)?void 0:I.docs,source:{originalSource:"() => <>\n    <Button variant={'secondary'}>Secondary</Button>\n    <Button icon=\"delete\" variant={'secondary'}>\n      Secondary\n    </Button>\n    {sizeOptions.map((v, k) => <Button key={k} variant={'secondary'} {...v}>\n        {v.label}\n      </Button>)}\n  </>",...null==(w=null==(D=c.parameters)?void 0:D.docs)?void 0:w.source}}},l.parameters={...l.parameters,docs:{...null==(F=l.parameters)?void 0:F.docs,source:{originalSource:"() => <>\n    <Button variant={'destructive'}>Destructive</Button>\n    <Button icon=\"delete\" variant={'destructive'}>\n      Destructive\n    </Button>\n    {sizeOptions.map((v, k) => <Button key={k} variant={'destructive'} {...v}>\n        {v.label}\n      </Button>)}\n  </>",...null==(L=null==(z=l.parameters)?void 0:z.docs)?void 0:L.source}}},u.parameters={...u.parameters,docs:{...null==(P=u.parameters)?void 0:P.docs,source:{originalSource:"() => <>\n    <Button variant={'subtle'}>Subtle</Button>\n    <Button variant={'subtle'} icon=\"account-circle\">\n      Subtle\n    </Button>\n    {sizeOptions.map((v, k) => <Button key={k} variant={'subtle'} {...v}>\n        {v.label}\n      </Button>)}\n  </>",...null==(_=null==(f=u.parameters)?void 0:f.docs)?void 0:_.source}}},d.parameters={...d.parameters,docs:{...null==(E=d.parameters)?void 0:E.docs,source:{originalSource:"() => <>\n    <Button variant={'outline'}>Outline</Button>\n    <Button variant={'outline'} icon=\"account-circle\">\n      Outline\n    </Button>\n    {sizeOptions.map((v, k) => <Button key={k} variant={'outline'} {...v}>\n        {v.label}\n      </Button>)}\n  </>",...null==(C=null==(T=d.parameters)?void 0:T.docs)?void 0:C.source}}},m.parameters={...m.parameters,docs:{...null==(R=m.parameters)?void 0:R.docs,source:{originalSource:'() => <>\n    <Button small={true}>Small Button</Button>\n    <Button small={true} icon="delete">\n      Small Button with Icon\n    </Button>\n  </>',...null==(A=null==(q=m.parameters)?void 0:q.docs)?void 0:A.source}}},p.parameters={...p.parameters,docs:{...null==(G=p.parameters)?void 0:G.docs,source:{originalSource:'() => <>\n    <Button large={true}>Large Button</Button>\n    <Button large={true} icon="delete">\n      Large Button with Icon\n    </Button>\n  </>',...null==(J=null==(H=p.parameters)?void 0:H.docs)?void 0:J.source}}},B.parameters={...B.parameters,docs:{...null==(K=B.parameters)?void 0:K.docs,source:{originalSource:'() => <>\n    <Button large={true} icon="delete" showIconOnly={true}>\n      Icon Button with hidden text\n    </Button>\n  </>',...null==(N=null==(M=B.parameters)?void 0:M.docs)?void 0:N.source}}},v.parameters={...v.parameters,docs:{...null==(Q=v.parameters)?void 0:Q.docs,source:{originalSource:"() => <>\n    {sizeOptions.map(size => ['primary', 'secondary', 'outline'].map(variant => Object.keys(glyphs).map((glyph: any, key) => <Button icon={glyph} key={key} {...size} variant={variant}>\n            {size.label} with Icon\n          </Button>)))}\n  </>",...null==(V=null==(U=v.parameters)?void 0:U.docs)?void 0:V.source}}};const Be=["Basic","Disabled","Primary","Secondary","Destructive","Subtle","Outline","Small","Large","IconOnly","Icons"];export{o as Basic,l as Destructive,s as Disabled,B as IconOnly,v as Icons,p as Large,d as Outline,i as Primary,c as Secondary,m as Small,u as Subtle,Be as __namedExportsOrder,pe as default};