(this.webpackJsonpleaderboard=this.webpackJsonpleaderboard||[]).push([[0],{23:function(e,t,a){},24:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a.n(c),l=a(9),i=a.n(l),r=(a(23),a(7));var d=function(e){var t=e.data,a=(e.setTableData,e.retriveData,e.setTotalPage),c=(e.totalPage,e.currentPage,e.setCurrentPage,e.searchValue,e.setNoOfRows);return e.checkedTeam,e.setCheckedTeam,e.resetTableColors,Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(s.jsx)("div",{style:{padding:"0.5%",width:"100%"}}),Object(s.jsx)("table",{cellspacing:"0",cellpadding:"0",className:"table-style",children:Object(s.jsxs)("tbody",{children:[Object(s.jsx)("td",{colSpan:5,children:Object(s.jsx)("hr",{width:"100%",color:"#fc7500"})}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"cell-style",children:"Team Name"}),Object(s.jsx)("td",{className:"cell-style",children:"Wins"}),Object(s.jsx)("td",{className:"cell-style",children:"Losses"}),Object(s.jsx)("td",{className:"cell-style",children:"Ties"}),Object(s.jsx)("td",{className:"cell-style",children:"Score"})]}),Object(s.jsx)("td",{colSpan:5,children:Object(s.jsx)("hr",{width:"100%",color:"#fc7500"})}),function(){var e=[],n=0,l=parseInt(t.length-1);try{l=parseInt(t[0].count)}catch(j){console.log("another error")}c(l);var i=0;try{i=Math.ceil(parseInt(t[0].count)/10)}catch(j){console.log("In error")}0===i&&(i=1),a(i);var r,d=0;if(l>0)for(var o=1;o<parseInt(t.length);++o)e.push((r=t[o],Object(s.jsxs)("tr",{id:r.team_name,name:d%2?"even":"odd",className:d++%2?"even-row":"odd-row",children:[Object(s.jsx)("td",{className:"cell-style",children:r.team_name},n++),Object(s.jsx)("td",{className:"cell-style",children:r.wins},n++),Object(s.jsx)("td",{className:"cell-style",children:r.losses},n++),Object(s.jsx)("td",{className:"cell-style",children:r.ties},n++),Object(s.jsx)("td",{className:"cell-style",children:r.score},n++)]},n++)));return e}()]})})]})};a(24);var o=function(e){var t=e.totalPage,a=e.currentPage,c=e.setCurrentPage,n=(e.searchValue,e.retriveData,e.noOfRows),l=1+10*(a-1),i=l+9<n?l+9:n;0===n&&(l=0);var r=function(e){e>0&&e<=t&&c(e)};return Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap"},children:[Object(s.jsxs)("button",{disabled:1===a,className:"page-button",onClick:function(){r(1)},children:["<<",Object(s.jsx)("span",{className:"tooltip-text",children:"First Page"})]}),Object(s.jsxs)("button",{disabled:1===a,className:"page-button",onClick:function(){r(a-1)},children:["<",Object(s.jsx)("span",{className:"tooltip-text",style:{width:"62px"},children:"Previous Page"})]}),Object(s.jsx)("span",{className:"pagination-style",children:"Page"}),Object(s.jsx)("input",{type:"number",min:"1",max:t,className:"pageno-input arrow-hidden",id:"current-page",value:a,onChange:function(e){r(e.target.value)},autoComplete:"off"}),Object(s.jsx)("span",{className:"pagination-style",children:"of"}),Object(s.jsx)("span",{className:"pagination-style",children:t}),Object(s.jsxs)("button",{disabled:a===t,className:"page-button",onClick:function(){r(parseInt(a)+1)},children:[">",Object(s.jsx)("span",{className:"tooltip-text",children:"Next Page"})]}),Object(s.jsxs)("button",{disabled:a===t,className:"page-button",onClick:function(){r(t)},children:[">>",Object(s.jsx)("span",{className:"tooltip-text",children:"Last Page"})]}),Object(s.jsxs)("div",{style:{marginLeft:"63vw"},children:["Team ",Object(s.jsx)("span",{children:l}),Object(s.jsx)("span",{children:"-"+i+" of "+n})]})]})},j=(a(15),a(30)),b=a(31),h=function(e){var t=e.addModalVisible,a=e.setAddModalVisible,n=e.DATA,l=Object(c.useState)(""),i=Object(r.a)(l,2),d=i[0],o=i[1];return Object(s.jsxs)(j.a,{show:t,onHide:function(){o(""),a(!1)},backdrop:"static",keyboard:!1,children:[Object(s.jsx)(j.a.Header,{closeButton:!0,children:Object(s.jsx)(j.a.Title,{children:"ADD TEAM"})}),Object(s.jsxs)(j.a.Body,{children:[Object(s.jsx)(b.a,{children:Object(s.jsx)("table",{className:"add-table-style",cellpadding:"10px",cellspacing:"5px",children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("label",{htmlFor:"name",children:"Team Name"})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{className:"add-input-box arrow-hidden",type:"text",id:"team-name",value:d,onChange:function(e){o(e.target.value)},required:!0})})]})})}),Object(s.jsx)("button",{className:"add-edit-button",style:{marginLeft:"35%",marginTop:"3%"},onClick:function(){!function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=this.responseText;"1"===e?window.location.reload():"2"===e?alert("Team name already exist"):alert("Some Error")}},e.open("POST",n.SOURCE+"AddData",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send("name="+d)}()},disabled:""===d,children:Object(s.jsx)("span",{className:"button-text",children:"Add"})})]})]})},u=function(e){var t=e.editModalVisible,a=e.setEditModalVisible,n=e.DATA,l=Object(c.useState)(""),i=Object(r.a)(l,2),d=i[0],o=i[1],h=Object(c.useState)(""),u=Object(r.a)(h,2),x=u[0],O=u[1],m=Object(c.useState)(""),p=Object(r.a)(m,2),f=p[0],g=p[1],y=Object(c.useState)([]),v=Object(r.a)(y,2),N=v[0],w=v[1];Object(c.useEffect)((function(){""!==d&&""!==x&&d===x&&(O(""),document.getElementById("teamB").selectedIndex=0,alert("Choose different teams"))}),[d,x]);var S=[],C=function(){for(var e=1;e<N.length;++e)S.push(Object(s.jsx)("option",{value:N[e],children:N[e]}));return S};return Object(c.useEffect)((function(){if(t){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=this.responseText,t=JSON.parse(e);w(t)}},e.open("POST",n.SOURCE+"TeamsList",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),e.send()}}),[t]),Object(s.jsxs)(j.a,{show:t,onHide:function(){o(""),O(""),g(""),a(!1)},backdrop:"static",keyboard:!1,children:[Object(s.jsx)(j.a.Header,{closeButton:!0,children:Object(s.jsx)(j.a.Title,{children:"ADD MATCH"})}),Object(s.jsxs)(j.a.Body,{children:[Object(s.jsx)(b.a,{children:Object(s.jsxs)("table",{className:"add-table-style",cellpadding:"10px",cellspacing:"5px",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("label",{htmlFor:"teamA",children:"Team-1"})}),Object(s.jsx)("td",{children:Object(s.jsxs)("select",{name:"teamA",id:"teamA",onChange:function(e){o(e.target.value)},children:[Object(s.jsx)("option",{value:"",selected:!0,children:""}),0===S.length?C():S]})})]}),Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("label",{htmlFor:"teamB",children:"Team-2"})}),Object(s.jsx)("td",{children:Object(s.jsxs)("select",{name:"teamB",id:"teamB",onChange:function(e){O(e.target.value)},children:[Object(s.jsx)("option",{value:"",selected:!0,children:""}),0===S.length?C():S]})})]}),""!==d&&""!==x?Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("label",{htmlFor:"match-status",children:"Match Status"})}),Object(s.jsx)("td",{children:Object(s.jsxs)("select",{name:"match-status",id:"match-status",onChange:function(e){g(e.target.value)},children:[Object(s.jsx)("option",{value:"",selected:!0,children:""}),Object(s.jsx)("option",{value:1,children:"Won by "+d}),Object(s.jsx)("option",{value:2,children:"Won by "+x}),Object(s.jsx)("option",{value:0,children:"Tied"})]})})]}):null]})}),Object(s.jsx)("button",{className:"add-edit-button",style:{marginLeft:"35%",marginTop:"3%"},onClick:function(){!function(){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=this.responseText;console.log(e),"1"===e?window.location.reload():"0"===e?alert("Adding Match Failed"):alert("Some Error")}},e.open("POST",n.SOURCE+"AddMatch",!0),e.setRequestHeader("Content-type","application/x-www-form-urlencoded"),console.log("teamA="+d+";&teamB="+x+";&status="+f),e.send("teamA="+d+"&teamB="+x+"&status="+f)}()},disabled:""===d||""===x||""===f,children:Object(s.jsx)("span",{className:"button-text",children:"Add Match"})})]})]})},x=a.p+"static/media/header.6a170b49.svg",O={SOURCE:"http://127.0.0.1:5000/"};var m=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(1),i=Object(r.a)(l,2),j=i[0],b=i[1],m=Object(c.useState)(1),p=Object(r.a)(m,2),f=p[0],g=p[1],y=Object(c.useState)(""),v=Object(r.a)(y,2),N=v[0],w=v[1],S=Object(c.useState)(""),C=Object(r.a)(S,2),T=C[0],A=C[1],P=Object(c.useState)(!0),D=Object(r.a)(P,2),M=D[0],B=D[1],k=Object(c.useState)(0),R=Object(r.a)(k,2),E=R[0],F=R[1],H=Object(c.useState)(!1),L=Object(r.a)(H,2),V=L[0],I=L[1],q=Object(c.useState)(!1),W=Object(r.a)(q,2),U=W[0],J=W[1],X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new XMLHttpRequest;t.onreadystatechange=function(){if(4===this.readyState&&200===this.status){var e=this.responseText,t=JSON.parse(e);n(t)}},t.open("POST",O.SOURCE+"FetchData",!0),t.setRequestHeader("Content-type","application/x-www-form-urlencoded"),t.send("team="+N+"&skip="+10*e+"&score="+T+"&sortby="+(M?"1":"0"))};return Object(c.useEffect)((function(){X(j-1)}),[j]),Object(c.useEffect)((function(){X(j-1),b(1)}),[N,T,M]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(h,{addModalVisible:V,setAddModalVisible:I,DATA:O}),Object(s.jsx)(u,{editModalVisible:U,setEditModalVisible:J,DATA:O})]}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",margin:"10px"},children:[Object(s.jsx)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center"},children:Object(s.jsx)("img",{src:x,alt:"header"})}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",marginBottom:"10px"},className:"dashboard",children:[Object(s.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{className:"add-edit-button",onClick:function(){I(!0)},children:Object(s.jsx)("span",{className:"button-text",children:"Add Team"})}),Object(s.jsxs)("button",{className:"add-edit-button",onClick:function(){J(!0)},children:[Object(s.jsx)("span",{className:"button-text",children:"Add Match"}),Object(s.jsx)("span",{className:"tooltip-text",children:"Select a record to edit"})]})]})}),Object(s.jsx)("br",{}),Object(s.jsxs)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:[Object(s.jsx)("input",{type:"text",min:"0",className:"search-box arrow-hidden",placeholder:" Search Team Name",id:"search-team",onChange:function(e){w(e.target.value)},autoComplete:"off"}),Object(s.jsx)("input",{type:"text",min:"0",className:"search-box arrow-hidden",placeholder:" Search Score",id:"search-score",onChange:function(e){A(e.target.value)},autoComplete:"off"}),Object(s.jsxs)("table",{style:{marginTop:"5px"},children:[Object(s.jsx)("td",{children:Object(s.jsxs)("label",{htmlFor:"sortBy",className:"sort-by-input",children:["Sort By :"," "]})}),Object(s.jsx)("td",{children:Object(s.jsxs)("select",{name:"sortBy",id:"sortBy",onChange:function(e){"team_name"==e.target.value?B(!1):B(!0)},className:"sort-by-input",children:[Object(s.jsx)("option",{value:"score",selected:!0,children:"Score"}),Object(s.jsx)("option",{value:"team_name",children:"Team Name"})]})})]})]}),Object(s.jsx)(d,{data:a,setTableData:n,retriveData:X,setTotalPage:g,totalPage:f,currentPage:j,setCurrentPage:b,searchValue:N,setNoOfRows:F})]}),Object(s.jsx)(o,{totalPage:f,currentPage:j,setCurrentPage:b,searchValue:N,retriveData:X,noOfRows:E})]})]})};var p=function(){return Object(s.jsx)(m,{})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,32)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,l=t.getTTFB;a(e),s(e),c(e),n(e),l(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),f()}},[[28,1,2]]]);
//# sourceMappingURL=main.0a596c17.chunk.js.map