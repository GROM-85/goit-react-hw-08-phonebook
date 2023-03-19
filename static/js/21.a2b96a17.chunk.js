"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[21],{3021:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ae}});var r=n(1552),o=n(2791),i=n(9434),a=n(1846),s={getContacts:function(e){return e.phoneBook.contacts},getIsLoading:function(e){return e.phoneBook.isLoading},getIsLoadingForm:function(e){return e.phoneBook.isLoadingForm},getIsLoadingDelete:function(e){return e.phoneBook.isLoadingDelete},getError:function(e){return e.phoneBook.error},getFilter:function(e){return e.phoneBook.filter},getActiveId:function(e){return e.phoneBook.activeId}},d=n(7181),c=n(184),l=function(){var e=(0,i.v9)(s.getFilter),t=(0,i.I0)();return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d.Z,{variant:"outlined",label:"Filter by name",type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,a.Tv)(n))}})})},u=n(4942),p=n(1413),m=n(9439),f=n(5377),h=n(8966),v="Form_form__psS5c",x="Form_form__btn__i2SCd",g=n(6382),Z=n(9012),b=n(3466),y=n(6151),C=(0,n(9201).Z)((0,c.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"}),"AccountCircle"),w=n(5223),j=n(1538),S=n(5218),R={name:"",number:"",info:""},A=function(){var e=(0,o.useState)(R),t=(0,m.Z)(e,2),n=t[0],r=t[1],a=(0,i.v9)(s.getContacts),l=(0,i.v9)(s.getIsLoadingForm),A=(0,i.I0)(),I=function(e){var t=e.target,o=t.name,i=t.value;r((0,p.Z)((0,p.Z)({},n),{},(0,u.Z)({},o,i)))},_=function(){r(R)};return(0,c.jsx)("form",{className:v,onSubmit:function(e){e.preventDefault(),a.some((function(e){return e.name===n.name}))?(0,S.Am)("\u26d4\ufe0f ".concat(n.name," is already in contacts!")):(A(f.uK((0,p.Z)((0,p.Z)({},n),{},{id:(0,g.x0)(),createdAt:(new Date).toDateString()}))),_())},children:(0,c.jsxs)(Z.Z,{sx:{gap:2,width:"100%"},children:[(0,c.jsx)(d.Z,{variant:"standard",type:"text",name:"name",label:"Fullname",value:n.name,onChange:I,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",required:!0,InputProps:{startAdornment:(0,c.jsx)(b.Z,{position:"start",children:(0,c.jsx)(C,{})})}}),(0,c.jsx)(d.Z,{required:!0,variant:"standard",label:"Phone",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:n.number,onChange:I,InputProps:{startAdornment:(0,c.jsx)(b.Z,{position:"start",children:(0,c.jsx)(w.Z,{})})}}),(0,c.jsx)(d.Z,{variant:"standard",label:"Info",type:"text",name:"info",value:n.info,onChange:I,InputProps:{startAdornment:(0,c.jsx)(b.Z,{position:"start",children:(0,c.jsx)(j.Z,{})})}}),(0,c.jsxs)(y.Z,{className:x,type:"submit",children:["Add contact",l&&(0,c.jsx)(h.s5,{strokeColor:"white",strokeWidth:"5",animationDuration:"0.75",width:"20",visible:!0})]})]})})},I="Contacts_contact__list__5N9sf",_="Contacts_contact__item__-R2S5",E="Contacts_contact__btn__iU6Vd",N="Contacts_contact__title__S69IC",k=n(7462),M=n(3366),z=n(8182),L=n(4419),D=n(3794),P=n(1046),B=n(5878),F=n(1217);function T(e){return(0,F.Z)("MuiAccordionDetails",e)}(0,B.Z)("MuiAccordionDetails",["root"]);var G=["className"],q=(0,D.ZP)("div",{name:"MuiAccordionDetails",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(1,2,2)}})),W=o.forwardRef((function(e,t){var n=(0,P.Z)({props:e,name:"MuiAccordionDetails"}),r=n.className,o=(0,M.Z)(n,G),i=n,a=function(e){var t=e.classes;return(0,L.Z)({root:["root"]},T,t)}(i);return(0,c.jsx)(q,(0,k.Z)({className:(0,z.Z)(a.root,r),ref:t,ownerState:i},o))})),H=n(3701);var V=o.createContext({});function K(e){return(0,F.Z)("MuiAccordionSummary",e)}var J=(0,B.Z)("MuiAccordionSummary",["root","expanded","focusVisible","disabled","gutters","contentGutters","content","expandIconWrapper"]),O=["children","className","expandIcon","focusVisibleClassName","onClick"],U=(0,D.ZP)(H.Z,{name:"MuiAccordionSummary",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,n=e.theme,r=e.ownerState,o={duration:n.transitions.duration.shortest};return(0,k.Z)((t={display:"flex",minHeight:48,padding:n.spacing(0,2),transition:n.transitions.create(["min-height","background-color"],o)},(0,u.Z)(t,"&.".concat(J.focusVisible),{backgroundColor:(n.vars||n).palette.action.focus}),(0,u.Z)(t,"&.".concat(J.disabled),{opacity:(n.vars||n).palette.action.disabledOpacity}),(0,u.Z)(t,"&:hover:not(.".concat(J.disabled,")"),{cursor:"pointer"}),t),!r.disableGutters&&(0,u.Z)({},"&.".concat(J.expanded),{minHeight:64}))})),$=(0,D.ZP)("div",{name:"MuiAccordionSummary",slot:"Content",overridesResolver:function(e,t){return t.content}})((function(e){var t=e.theme,n=e.ownerState;return(0,k.Z)({display:"flex",flexGrow:1,margin:"12px 0"},!n.disableGutters&&(0,u.Z)({transition:t.transitions.create(["margin"],{duration:t.transitions.duration.shortest})},"&.".concat(J.expanded),{margin:"20px 0"}))})),Q=(0,D.ZP)("div",{name:"MuiAccordionSummary",slot:"ExpandIconWrapper",overridesResolver:function(e,t){return t.expandIconWrapper}})((function(e){var t=e.theme;return(0,u.Z)({display:"flex",color:(t.vars||t).palette.action.active,transform:"rotate(0deg)",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})},"&.".concat(J.expanded),{transform:"rotate(180deg)"})})),X=o.forwardRef((function(e,t){var n=(0,P.Z)({props:e,name:"MuiAccordionSummary"}),r=n.children,i=n.className,a=n.expandIcon,s=n.focusVisibleClassName,d=n.onClick,l=(0,M.Z)(n,O),u=o.useContext(V),p=u.disabled,m=void 0!==p&&p,f=u.disableGutters,h=u.expanded,v=u.toggle,x=(0,k.Z)({},n,{expanded:h,disabled:m,disableGutters:f}),g=function(e){var t=e.classes,n=e.expanded,r=e.disabled,o=e.disableGutters,i={root:["root",n&&"expanded",r&&"disabled",!o&&"gutters"],focusVisible:["focusVisible"],content:["content",n&&"expanded",!o&&"contentGutters"],expandIconWrapper:["expandIconWrapper",n&&"expanded"]};return(0,L.Z)(i,K,t)}(x);return(0,c.jsxs)(U,(0,k.Z)({focusRipple:!1,disableRipple:!0,disabled:m,component:"div","aria-expanded":h,className:(0,z.Z)(g.root,i),focusVisibleClassName:(0,z.Z)(g.focusVisible,s),onClick:function(e){v&&v(e),d&&d(e)},ref:t,ownerState:x},l,{children:[(0,c.jsx)($,{className:g.content,ownerState:x,children:r}),a&&(0,c.jsx)(Q,{className:g.expandIconWrapper,ownerState:x,children:a})]}))})),Y=n(890),ee=n(1131),te=n(4506),ne=(n(8457),n(6752)),re=n(1314),oe=n(4999),ie=n(3967),ae=n(2071);function se(e){return(0,F.Z)("MuiCollapse",e)}(0,B.Z)("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);var de=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ce=(0,D.ZP)("div",{name:"MuiCollapse",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.orientation],"entered"===n.state&&t.entered,"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&t.hidden]}})((function(e){var t=e.theme,n=e.ownerState;return(0,k.Z)({height:0,overflow:"hidden",transition:t.transitions.create("height")},"horizontal"===n.orientation&&{height:"auto",width:0,transition:t.transitions.create("width")},"entered"===n.state&&(0,k.Z)({height:"auto",overflow:"visible"},"horizontal"===n.orientation&&{width:"auto"}),"exited"===n.state&&!n.in&&"0px"===n.collapsedSize&&{visibility:"hidden"})})),le=(0,D.ZP)("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:function(e,t){return t.wrapper}})((function(e){var t=e.ownerState;return(0,k.Z)({display:"flex",width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),ue=(0,D.ZP)("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:function(e,t){return t.wrapperInner}})((function(e){var t=e.ownerState;return(0,k.Z)({width:"100%"},"horizontal"===t.orientation&&{width:"auto",height:"100%"})})),pe=o.forwardRef((function(e,t){var n=(0,P.Z)({props:e,name:"MuiCollapse"}),r=n.addEndListener,i=n.children,a=n.className,s=n.collapsedSize,d=void 0===s?"0px":s,l=n.component,p=n.easing,m=n.in,f=n.onEnter,h=n.onEntered,v=n.onEntering,x=n.onExit,g=n.onExited,Z=n.onExiting,b=n.orientation,y=void 0===b?"vertical":b,C=n.style,w=n.timeout,j=void 0===w?re.x9.standard:w,S=n.TransitionComponent,R=void 0===S?ne.ZP:S,A=(0,M.Z)(n,de),I=(0,k.Z)({},n,{orientation:y,collapsedSize:d}),_=function(e){var t=e.orientation,n=e.classes,r={root:["root","".concat(t)],entered:["entered"],hidden:["hidden"],wrapper:["wrapper","".concat(t)],wrapperInner:["wrapperInner","".concat(t)]};return(0,L.Z)(r,se,n)}(I),E=(0,ie.Z)(),N=o.useRef(),D=o.useRef(null),B=o.useRef(),F="number"===typeof d?"".concat(d,"px"):d,T="horizontal"===y,G=T?"width":"height";o.useEffect((function(){return function(){clearTimeout(N.current)}}),[]);var q=o.useRef(null),W=(0,ae.Z)(t,q),H=function(e){return function(t){if(e){var n=q.current;void 0===t?e(n):e(n,t)}}},V=function(){return D.current?D.current[T?"clientWidth":"clientHeight"]:0},K=H((function(e,t){D.current&&T&&(D.current.style.position="absolute"),e.style[G]=F,f&&f(e,t)})),J=H((function(e,t){var n=V();D.current&&T&&(D.current.style.position="");var r=(0,oe.C)({style:C,timeout:j,easing:p},{mode:"enter"}),o=r.duration,i=r.easing;if("auto"===j){var a=E.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(a,"ms"),B.current=a}else e.style.transitionDuration="string"===typeof o?o:"".concat(o,"ms");e.style[G]="".concat(n,"px"),e.style.transitionTimingFunction=i,v&&v(e,t)})),O=H((function(e,t){e.style[G]="auto",h&&h(e,t)})),U=H((function(e){e.style[G]="".concat(V(),"px"),x&&x(e)})),$=H(g),Q=H((function(e){var t=V(),n=(0,oe.C)({style:C,timeout:j,easing:p},{mode:"exit"}),r=n.duration,o=n.easing;if("auto"===j){var i=E.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(i,"ms"),B.current=i}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[G]=F,e.style.transitionTimingFunction=o,Z&&Z(e)}));return(0,c.jsx)(R,(0,k.Z)({in:m,onEnter:K,onEntered:O,onEntering:J,onExit:U,onExited:$,onExiting:Q,addEndListener:function(e){"auto"===j&&(N.current=setTimeout(e,B.current||0)),r&&r(q.current,e)},nodeRef:q,timeout:"auto"===j?null:j},A,{children:function(e,t){return(0,c.jsx)(ce,(0,k.Z)({as:l,className:(0,z.Z)(_.root,a,{entered:_.entered,exited:!m&&"0px"===F&&_.hidden}[e]),style:(0,k.Z)((0,u.Z)({},T?"minWidth":"minHeight",F),C),ownerState:(0,k.Z)({},I,{state:e}),ref:W},t,{children:(0,c.jsx)(le,{ownerState:(0,k.Z)({},I,{state:e}),className:_.wrapper,ref:D,children:(0,c.jsx)(ue,{ownerState:(0,k.Z)({},I,{state:e}),className:_.wrapperInner,children:i})})}))}}))}));pe.muiSupportAuto=!0;var me=pe,fe=n(5527),he=n(8744);function ve(e){return(0,F.Z)("MuiAccordion",e)}var xe=(0,B.Z)("MuiAccordion",["root","rounded","expanded","disabled","gutters","region"]),ge=["children","className","defaultExpanded","disabled","disableGutters","expanded","onChange","square","TransitionComponent","TransitionProps"],Ze=(0,D.ZP)(fe.Z,{name:"MuiAccordion",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,u.Z)({},"& .".concat(xe.region),t.region),t.root,!n.square&&t.rounded,!n.disableGutters&&t.gutters]}})((function(e){var t,n=e.theme,r={duration:n.transitions.duration.shortest};return t={position:"relative",transition:n.transitions.create(["margin"],r),overflowAnchor:"none","&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:(n.vars||n).palette.divider,transition:n.transitions.create(["opacity","background-color"],r)},"&:first-of-type":{"&:before":{display:"none"}}},(0,u.Z)(t,"&.".concat(xe.expanded),{"&:before":{opacity:0},"&:first-of-type":{marginTop:0},"&:last-of-type":{marginBottom:0},"& + &":{"&:before":{display:"none"}}}),(0,u.Z)(t,"&.".concat(xe.disabled),{backgroundColor:(n.vars||n).palette.action.disabledBackground}),t}),(function(e){var t=e.theme,n=e.ownerState;return(0,k.Z)({},!n.square&&{borderRadius:0,"&:first-of-type":{borderTopLeftRadius:(t.vars||t).shape.borderRadius,borderTopRightRadius:(t.vars||t).shape.borderRadius},"&:last-of-type":{borderBottomLeftRadius:(t.vars||t).shape.borderRadius,borderBottomRightRadius:(t.vars||t).shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},!n.disableGutters&&(0,u.Z)({},"&.".concat(xe.expanded),{margin:"16px 0"}))})),be=o.forwardRef((function(e,t){var n=(0,P.Z)({props:e,name:"MuiAccordion"}),r=n.children,i=n.className,a=n.defaultExpanded,s=void 0!==a&&a,d=n.disabled,l=void 0!==d&&d,u=n.disableGutters,p=void 0!==u&&u,f=n.expanded,h=n.onChange,v=n.square,x=void 0!==v&&v,g=n.TransitionComponent,Z=void 0===g?me:g,b=n.TransitionProps,y=(0,M.Z)(n,ge),C=(0,he.Z)({controlled:f,default:s,name:"Accordion",state:"expanded"}),w=(0,m.Z)(C,2),j=w[0],S=w[1],R=o.useCallback((function(e){S(!j),h&&h(e,!j)}),[j,h,S]),A=o.Children.toArray(r),I=(0,te.Z)(A),_=I[0],E=I.slice(1),N=o.useMemo((function(){return{expanded:j,disabled:l,disableGutters:p,toggle:R}}),[j,l,p,R]),D=(0,k.Z)({},n,{square:x,disabled:l,disableGutters:p,expanded:j}),B=function(e){var t=e.classes,n={root:["root",!e.square&&"rounded",e.expanded&&"expanded",e.disabled&&"disabled",!e.disableGutters&&"gutters"],region:["region"]};return(0,L.Z)(n,ve,t)}(D);return(0,c.jsxs)(Ze,(0,k.Z)({className:(0,z.Z)(B.root,i),ref:t,ownerState:D,square:x},y,{children:[(0,c.jsx)(V.Provider,{value:N,children:_}),(0,c.jsx)(Z,(0,k.Z)({in:j,timeout:"auto"},b,{children:(0,c.jsx)("div",{"aria-labelledby":_.props.id,id:_.props["aria-controls"],role:"region",className:B.region,children:E})}))]}))})),ye=n(5747),Ce=n(2073),we={onscreen:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},offscreen:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},je=function(e){var t=e.name,n=void 0===t?"":t,r=e.number,d=void 0===r?"":r,l=e.id,u=void 0===l?"":l,p=(0,i.I0)(),v=(0,o.useState)(),x=(0,m.Z)(v,2),g=x[0],Z=x[1],b=(0,i.v9)(s.getIsLoadingDelete),C=(0,i.v9)(s.getActiveId);return(0,c.jsx)(Ce.E.li,{className:_,variants:we,whileHover:{scale:1.03},whileTap:{scale:.95},children:(0,c.jsxs)(be,{expanded:g===u,onChange:function(e){return function(t,n){Z(!!n&&e)}}(u),children:[(0,c.jsxs)(X,{expandIcon:(0,c.jsx)(ee.Z,{}),"aria-controls":"panel1bh-content",id:u,children:[(0,c.jsx)(Y.Z,{sx:{width:"33%",flexShrink:0},children:n}),(0,c.jsx)(Y.Z,{sx:{color:"text.secondary"},children:d})]}),(0,c.jsxs)(W,{children:[(0,c.jsx)(Y.Z,{children:"Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam."}),(0,c.jsx)(y.Z,{className:E,variant:"contained",onClick:function(){p(f.GK(u)),p((0,a.HZ)(u))},children:b&&C.includes(u)?(0,c.jsx)(h.g4,{height:"20",width:"20",radius:"10",color:"white",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}):(0,c.jsx)(ye.Z,{})})]})]})})},Se={onscreen:{opacity:1,transition:{staggerChildren:.15,delayChildren:.05}},offscreen:{opacity:0,transition:{staggerChildren:.05,staggerDirection:-1}}},Re=function(e){var t=e.title,n=e.contacts,r=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(Y.Z,{className:N,component:"h3",variant:"h5",children:t}),r]}),(0,c.jsx)(Ce.E.ul,{className:I,variants:Se,initial:"offscreen",animate:"onscreen",viewport:{once:!0,amount:.8},children:n.map((function(e){return(0,c.jsx)(je,{name:e.name,number:e.number,id:e.id},e.id)}))})]})},Ae=function(){var e=(0,i.I0)(),t=(0,i.v9)(s.getContacts),n=(0,i.v9)(s.getFilter),a=(0,i.v9)(s.getIsLoading);return(0,o.useEffect)((function(){e(f.yF())}),[e]),(0,c.jsxs)(r.W,{children:[(0,c.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",marginTop:"20px",marginBottom:"auto"},children:[(0,c.jsx)(Y.Z,{component:"h3",variant:"h5",style:{marginBottom:"20px"},children:"PhoneBook"}),(0,c.jsx)(A,{})]}),(0,c.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",marginTop:"20px",marginBottom:"auto"},children:0!==t.length||a?(0,c.jsx)(Re,{contacts:function(){var e=n.trim().toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),title:"Contacts",children:(0,c.jsx)(l,{})}):(0,c.jsx)(Y.Z,{component:"h3",variant:"h5",children:"Kindly add you first contact!"})})]})}},5747:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm3.17-6.41a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0L12 12.59l1.41-1.41c.39-.39 1.02-.39 1.41 0s.39 1.02 0 1.41L13.41 14l1.41 1.41c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0L12 15.41l-1.41 1.41c-.39.39-1.02.39-1.41 0a.9959.9959 0 0 1 0-1.41L10.59 14l-1.42-1.41zM18 4h-2.5l-.71-.71c-.18-.18-.44-.29-.7-.29H9.91c-.26 0-.52.11-.7.29L8.5 4H6c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1z"}),"DeleteForeverRounded");t.Z=a},1131:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.Z=a},1538:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded");t.Z=a},5223:function(e,t,n){var r=n(4836);t.Z=void 0;var o=r(n(5649)),i=n(184),a=(0,o.default)((0,i.jsx)("path",{d:"m4.78 15.27 2.54-.29c.61-.07 1.21.14 1.64.57l1.84 1.84c2.83-1.44 5.15-3.75 6.59-6.59l-1.85-1.85c-.43-.43-.64-1.03-.57-1.64l.29-2.52c.12-1.01.97-1.77 1.99-1.77h1.73c1.13 0 2.07.94 2 2.07-.53 8.54-7.36 15.36-15.89 15.89-1.13.07-2.07-.87-2.07-2v-1.73c-.01-1.01.75-1.86 1.76-1.98z"}),"PhoneEnabledRounded");t.Z=a}}]);
//# sourceMappingURL=21.a2b96a17.chunk.js.map