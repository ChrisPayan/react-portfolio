(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,s){},27:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s(16),i=s.n(a),n=(s(24),s(6)),r=s(7),j=s(9),l=s(8),d=s(13),o=s(17),h=s.n(o),b=(s(27),s(18)),O=s(4),x=s.n(O),m=s(1),u=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.project,t=this.props.data.github,s=this.props.data.name,c=this.props.data.description;return Object(m.jsxs)("header",{id:"home",children:[Object(m.jsx)(b.a,{type:"random",bg:!0}),Object(m.jsxs)("nav",{id:"nav-wrap",children:[Object(m.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(m.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(m.jsxs)("ul",{id:"nav",className:"nav",children:[Object(m.jsx)("li",{className:"current",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#education",children:"Education"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Works"})}),Object(m.jsx)("li",{children:Object(m.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(m.jsx)("div",{className:"row banner",children:Object(m.jsxs)("div",{className:"banner-text",children:[Object(m.jsx)(x.a,{bottom:!0,children:Object(m.jsx)("h1",{className:"responsive-headline",children:s})}),Object(m.jsx)(x.a,{bottom:!0,duration:1200,children:Object(m.jsxs)("h3",{children:[c,"."]})}),Object(m.jsx)("hr",{}),Object(m.jsx)(x.a,{bottom:!0,duration:2e3,children:Object(m.jsxs)("ul",{className:"social",children:[Object(m.jsxs)("a",{href:e,className:"button btn project-btn",children:[Object(m.jsx)("i",{className:"fa fa-book"}),"Project"]}),Object(m.jsxs)("a",{href:t,className:"button btn github-btn",children:[Object(m.jsx)("i",{className:"fa fa-github"}),"Github"]})]})})]})}),Object(m.jsx)("p",{className:"scrolldown",children:Object(m.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(m.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),p=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,c=this.props.data.address.street,a=this.props.data.address.city,i=this.props.data.address.state,n=this.props.data.address.zip,r=this.props.data.phone,j=this.props.data.email;return Object(m.jsx)("section",{id:"about",children:Object(m.jsx)(x.a,{duration:1e3,children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"three columns",children:Object(m.jsx)("img",{className:"profile-pic",src:t,alt:"Nothing yet"})}),Object(m.jsxs)("div",{className:"nine columns main-col",children:[Object(m.jsx)("h2",{children:"About Me"}),Object(m.jsx)("p",{children:s}),Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{children:"Contact Details"}),Object(m.jsxs)("p",{className:"address",children:[Object(m.jsx)("span",{children:e}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{children:[c,Object(m.jsx)("br",{}),a," ",i,", ",n]}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:r}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:j})]})]})})]})]})})})}}]),s}(c.Component),f=s(19),v=s.n(f),N=0,g=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(m.jsx)("div",{className:"columns portfolio-item",children:Object(m.jsxs)("div",{className:"item-wrap",children:[Object(m.jsx)(v.a,{alt:t,src:t}),Object(m.jsx)("div",{style:{textAlign:"center"},children:e.title})]})},N++)}));return Object(m.jsx)("section",{id:"portfolio",children:Object(m.jsx)(x.a,{left:!0,duration:1e3,distance:"40px",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsxs)("div",{className:"twelve columns collapsed",children:[Object(m.jsx)("h1",{children:"Check Out Some of My Works."}),Object(m.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})})}}]),s}(c.Component),w=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"getRandomColor",value:function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}},{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.education.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.school}),Object(m.jsxs)("p",{className:"info",children:[e.degree," ",Object(m.jsx)("span",{children:"\u2022"}),Object(m.jsx)("em",{className:"date",children:e.graduated})]}),Object(m.jsx)("p",{children:e.description})]},e.school)})),t=this.props.data.work.map((function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h3",{children:e.company}),Object(m.jsxs)("p",{className:"info",children:[e.title,Object(m.jsx)("span",{children:"\u2022"})," ",Object(m.jsx)("em",{className:"date",children:e.years})]}),Object(m.jsx)("p",{children:e.description})]},e.company)}));return Object(m.jsxs)("section",{id:"education",children:[Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row education",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Education"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:Object(m.jsx)("div",{className:"row item",children:Object(m.jsx)("div",{className:"twelve columns",children:e})})})]})}),Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row work",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Work"})})}),Object(m.jsx)("div",{className:"nine columns main-col",children:t})]})}),Object(m.jsx)(x.a,{left:!0,duration:1300,children:Object(m.jsxs)("div",{className:"row skill",children:[Object(m.jsx)("div",{className:"three columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Skills"})})}),Object(m.jsx)("div",{className:"nine columns",children:Object(m.jsx)("div",{className:"bgrid-quarters s-bgrid-thirds cf",children:Object(m.jsxs)("ul",{children:[Object(m.jsxs)(x.a,{left:!0,duration:1300,children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-js fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-react fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-npm fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-python fa-5x"})})]}),Object(m.jsxs)(x.a,{right:!0,duration:1300,children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-java fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-html5 fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-css3-alt fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-node-js fa-5x"})})]}),Object(m.jsxs)(x.a,{left:!0,duration:1300,children:[Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-vuejs fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-github fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-git fa-5x"})}),Object(m.jsx)("li",{children:Object(m.jsx)("i",{className:"fab fa-gitlab fa-5x"})})]})]})})})]})})]})}}]),s}(c.Component),y=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("a",{href:e.url,children:Object(m.jsx)("i",{className:e.className})})},e.name)}));return Object(m.jsx)("footer",{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)(x.a,{bottom:!0,children:[Object(m.jsx)("div",{className:"twelve columns",children:Object(m.jsx)("ul",{className:"social-links",children:e})}),Object(m.jsxs)("ul",{className:"copyright",children:[Object(m.jsx)("li",{children:"\xa9 Copyright 2021 Christian Payan"}),Object(m.jsxs)("li",{children:["Powered by"," ",Object(m.jsx)("a",{title:"Styleshout",href:"http://www.styleshout.com/",children:"Styleshout"})," ","and"," ",Object(m.jsx)("a",{title:"React",href:"https://reactjs.org/",children:"React"})]})]})]}),Object(m.jsx)("div",{id:"go-top",children:Object(m.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(m.jsx)("i",{className:"icon-up-open"})})})]})})}}]),s}(c.Component),k=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data.address.street,s=this.props.data.address.city,c=this.props.data.address.state,a=this.props.data.address.zip,i=this.props.data.phone,n=this.props.data.contactmessage;return Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)(O.Fade,{bottom:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"row section-head",children:[Object(m.jsx)("div",{className:"two columns header-col",children:Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Get In Touch."})})}),Object(m.jsx)("div",{className:"ten columns",children:Object(m.jsx)("p",{className:"lead",children:n})})]})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)(O.Slide,{left:!0,duration:1e3,children:Object(m.jsxs)("div",{className:"eight columns",children:[Object(m.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",children:Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(m.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{htmlFor:"contactMessage",children:["Message ",Object(m.jsx)("span",{className:"required",children:"*"})]}),Object(m.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"contactMessage"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"submit",children:"Submit"}),Object(m.jsx)("span",{id:"image-loader",children:Object(m.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(m.jsx)("div",{id:"message-warning",children:" Error boy"}),Object(m.jsxs)("div",{id:"message-success",children:[Object(m.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(m.jsx)("br",{})]})]})}),Object(m.jsx)(O.Slide,{right:!0,duration:1e3,children:Object(m.jsxs)("aside",{className:"four columns footer-widgets",children:[Object(m.jsxs)("div",{className:"widget widget_contact",children:[Object(m.jsx)("h4",{children:"Address and Phone"}),Object(m.jsxs)("p",{className:"address",children:[e,Object(m.jsx)("br",{}),t," ",Object(m.jsx)("br",{}),s,", ",c," ",a,Object(m.jsx)("br",{}),Object(m.jsx)("span",{children:i})]})]}),Object(m.jsxs)("div",{className:"widget widget_tweets",children:[Object(m.jsx)("h4",{className:"widget-title",children:"Latest Tweets"}),Object(m.jsxs)("ul",{id:"twitter",children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"Wow, someone made a cool artwork design !"}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"./",children:"Yesterday"})})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:"This section is just to fill empty space if you do get a chance to read this carefully, I hope you have a good day."}),Object(m.jsx)("b",{children:Object(m.jsx)("a",{href:"./",children:"4 Hours ago"})})]})]})]})]})})]})]})}}]),s}(c.Component),C=function(e){Object(j.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={foo:"bar",resumeData:{}},d.a.initialize("UA-110570651-1"),d.a.pageview(window.location.pathname),c}return Object(r.a)(s,[{key:"getResumeData",value:function(){h.a.ajax({url:"./allInfoSpace.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(u,{data:this.state.resumeData.main}),Object(m.jsx)(p,{data:this.state.resumeData.main}),Object(m.jsx)(w,{data:this.state.resumeData.resume}),Object(m.jsx)(g,{data:this.state.resumeData.portfolio}),Object(m.jsx)(k,{data:this.state.resumeData.main}),Object(m.jsx)(y,{data:this.state.resumeData.main})]})}}]),s}(c.Component),S=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,48)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),c(e),a(e),i(e),n(e)}))};i.a.render(Object(m.jsx)(C,{}),document.getElementById("root")),S()}},[[47,1,2]]]);
//# sourceMappingURL=main.46be0acf.chunk.js.map