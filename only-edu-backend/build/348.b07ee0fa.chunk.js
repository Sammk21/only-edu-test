"use strict";(self.webpackChunkonly_edu_backend=self.webpackChunkonly_edu_backend||[]).push([[348],{80348:(_s,V,s)=>{s.d(V,{ReviewWorkflowsCreatePage:()=>H});var t=s(92132),l=s(21272),k=s(85963),h=s(83997),N=s(43064),A=s(30893),D=s(2129),Y=s(54514),c=s(61535),z=s(54894),i=s(82437),Q=s(17703),X=s(24317),$=s(67269),o=s(49402),I=s(43077),P=s(73179),r=s(45084),O=s(25524),G=s(32326),ls=s(35658),rs=s(56336),is=s(48940),Es=s(12083),ds=s(15126),Ms=s(63299),Ds=s(67014),Ps=s(59080),Os=s(79275),gs=s(14718),fs=s(5790),vs=s(35223),ms=s(5409),hs=s(74930),cs=s(2600),Ls=s(41286),Cs=s(13426),Ts=s(84624),Ws=s(77965),Rs=s(54257),As=s(71210),Is=s(51187),Bs=s(39404),Ks=s(58692),Us=s(501),ys=s(57646),us=s(23120),ws=s(44414),js=s(25962),xs=s(14664),Ss=s(42588),ps=s(90325),Fs=s(62785),Vs=s(87443),ks=s(41032),Ns=s(22957),Ys=s(93179),zs=s(73055),Qs=s(15747),Xs=s(85306),$s=s(26509),Gs=s(32058),Hs=s(81185),Js=s(82261),Zs=s(35581);const H=()=>{const{formatMessage:a}=(0,z.A)(),{push:J}=(0,Q.W6)(),{_unstableFormatAPIError:Z,_unstableFormatValidationErrors:b}=(0,D.wq)(),_=(0,i.wA)(),E=(0,D.hN)(),{collectionTypes:B,singleTypes:K,isLoading:L}=(0,$.u)(),{isLoading:g,meta:U,workflows:f,createWorkflow:q}=(0,G.u)(),{isLoading:C,roles:y}=(0,X.u)(),v=(0,i.d4)(o.s),ss=(0,i.d4)(o.a),n=(0,i.d4)(o.b),u=(0,i.d4)(o.c),[w,d]=l.useState(null),{isLoading:j,getFeature:ts}=(0,I.m)(),[os,es]=l.useState(),[x,T]=l.useState({}),m=ts("review-workflows"),S=m?.[O.C],M=m?.[O.a],p=f?.flatMap(e=>e.contentTypes),F=async()=>{T({});try{const e=await q({data:n});if("error"in e){(0,I.x)(e.error)&&e.error.name==="ValidationError"&&es(b(e.error)),E({type:"warning",message:Z(e.error)});return}E({type:"success",message:{id:"Settings.review-workflows.create.page.notification.success",defaultMessage:"Workflow successfully created"}}),J(`/settings/review-workflows/${e.data.id}`)}catch{E({type:"warning",message:{id:"Settings.review-workflows.create.page.notification.error",defaultMessage:"An error occurred"}})}},as=async()=>{await F()},ns=()=>{T({})},W=(0,c.Wx)({enableReinitialize:!0,initialErrors:os,initialValues:n,async onSubmit(){const e=n.contentTypes?.some(R=>p?.includes(R));U&&S&&U?.workflowCount>=parseInt(S,10)?d("workflow"):n.stages&&M&&n.stages.length>=parseInt(M,10)?d("stage"):e?T(R=>({...R,hasReassignedContentTypes:!0})):F()},validate(e){return(0,o.v)({values:e,formatMessage:a})}});return(0,o.u)(O.R,o.i),l.useEffect(()=>{_((0,o.r)()),!g&&f&&_((0,o.d)({workflows:f})),L||_((0,o.e)({collectionTypes:B,singleTypes:K})),C||_((0,o.f)(y)),_((0,o.g)(L||C)),_((0,o.h)({name:""}))},[B,_,L,C,g,y,K,f]),l.useEffect(()=>{!g&&!j&&n.stages&&m?.[O.a]&&M&&n.stages.length>=parseInt(M,10)&&d("stage")},[j,g,m,n.stages,M]),l.useEffect(()=>{!v&&u?.length===0&&E({blockTransition:!0,type:"warning",message:a({id:"Settings.review-workflows.stage.permissions.noPermissions.description",defaultMessage:"You don\u2019t have the permission to see roles"})})},[a,v,u,E]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.D,{}),(0,t.jsx)(c.QI,{value:W,children:(0,t.jsxs)(c.lV,{onSubmit:W.handleSubmit,children:[(0,t.jsx)(P.H,{navigationAction:(0,t.jsx)(P.B,{href:"/settings/review-workflows"}),primaryAction:(0,t.jsx)(k.$,{startIcon:(0,t.jsx)(Y.A,{}),type:"submit",size:"M",disabled:!ss,children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.review-workflows.create.page.title",defaultMessage:"Create Review Workflow"}),subtitle:a({id:"Settings.review-workflows.page.subtitle",defaultMessage:"{count, plural, one {# stage} other {# stages}}"},{count:n?.stages?.length??0})}),(0,t.jsx)(P.R,{children:(0,t.jsx)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:v?(0,t.jsx)(N.a,{children:a({id:"Settings.review-workflows.page.isLoading",defaultMessage:"Workflow is loading"})}):(0,t.jsxs)(h.s,{alignItems:"stretch",direction:"column",gap:7,children:[(0,t.jsx)(o.W,{}),(0,t.jsx)(o.S,{stages:W.values?.stages})]})})})]})}),(0,t.jsx)(D.TM.Root,{isConfirmButtonLoading:v,isOpen:Object.keys(x).length>0,onToggleDialog:ns,onConfirm:as,children:(0,t.jsx)(D.TM.Body,{children:(0,t.jsxs)(h.s,{direction:"column",gap:5,children:[x.hasReassignedContentTypes&&(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.contentType.body",defaultMessage:"{count} {count, plural, one {content-type} other {content-types}} {count, plural, one {is} other {are}} already mapped to {count, plural, one {another workflow} other {other workflows}}. If you save changes, {count, plural, one {this} other {these}} {count, plural, one {content-type} other {{count} content-types}} will no more be mapped to the {count, plural, one {another workflow} other {other workflows}} and all corresponding information will be removed."},{count:p?.filter(e=>n.contentTypes?.includes(e)).length})}),(0,t.jsx)(A.o,{textAlign:"center",variant:"omega",children:a({id:"Settings.review-workflows.page.delete.confirm.confirm",defaultMessage:"Are you sure you want to save?"})})]})})}),(0,t.jsxs)(r.L.Root,{isOpen:w==="workflow",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]}),(0,t.jsxs)(r.L.Root,{isOpen:w==="stage",onClose:()=>d(null),children:[(0,t.jsx)(r.L.Title,{children:a({id:"Settings.review-workflows.create.page.stages.limit.title",defaultMessage:"You have reached the limit of stages for this workflow in your plan"})}),(0,t.jsx)(r.L.Body,{children:a({id:"Settings.review-workflows.create.page.stages.limit.body",defaultMessage:"Try deleting some stages or contact Sales to enable more stages."})})]})]})}}}]);
