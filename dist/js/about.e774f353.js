"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[443],{4683:function(a,o,t){t.r(o),t.d(o,{default:function(){return _}});var i=t(3396),n=t(7139);const e=a=>((0,i.dD)("data-v-cf264334"),a=a(),(0,i.Cn)(),a),p={class:"_container"},v=e((()=>(0,i._)("h1",null,"This is an auth page",-1))),l=(0,i.Uk)("registration"),u={class:"auth__block"},d=e((()=>(0,i._)("form",{name:"auth",class:"auth"},[(0,i._)("input",{class:"auth__fields",name:"username",placeholder:"login"}),(0,i._)("input",{class:"auth__fields",name:"password",placeholder:"password"}),(0,i._)("input",{type:"submit",value:"login",class:"auth__fields"})],-1))),c={class:"auth__failed"};function s(a,o,t,e,s,r){const f=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",p,[v,(0,i.Wm)(f,{to:"/reg"},{default:(0,i.w5)((()=>[l])),_:1}),(0,i._)("div",u,[d,(0,i._)("div",c,(0,n.zw)(s.alertMessage),1)])])}var r=t(65);const f="https://safe-fjord-51597.herokuapp.com";var m={name:"AuthView",data(){return{alertMessage:"",token:""}},mounted(){let a=document.forms[0];a.addEventListener("submit",(async o=>{o.preventDefault();let t={username:a.username.value.toString(),password:a.password.value.toString()},i=await fetch(`${f}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}),n=await i.json();this.alertMessage=n.message,this.token=n.token,this.token&&(this.loginSuccessful(!0),localStorage.setItem("token",this.token),setTimeout((()=>{this.$router.push("/")}),2e3))}))},methods:{...(0,r.OI)(["loginSuccessful"])}},h=t(89);const g=(0,h.Z)(m,[["render",s],["__scopeId","data-v-cf264334"]]);var _=g},7432:function(a,o,t){t.r(o),t.d(o,{default:function(){return D}});var i=t(3396),n=t(7139);const e=a=>((0,i.dD)("data-v-52f4011c"),a=a(),(0,i.Cn)(),a),p={class:"reg _container"},v=e((()=>(0,i._)("h1",null,"This is an reg page",-1))),l=(0,i.Uk)("authorization"),u={class:"reg__block"},d=e((()=>(0,i._)("input",{class:"reg__fields",name:"username",placeholder:"login",required:""},null,-1))),c=e((()=>(0,i._)("input",{type:"password",class:"reg__fields",name:"password",placeholder:"password",required:""},null,-1))),s=e((()=>(0,i._)("input",{class:"reg__fields",name:"firstName",placeholder:"first name",required:""},null,-1))),r=e((()=>(0,i._)("input",{class:"reg__fields",name:"secondName",placeholder:"second name",required:""},null,-1))),f={class:"reg__sex"},m=e((()=>(0,i._)("p",null,"Choose your sex:",-1))),h=e((()=>(0,i._)("label",{for:"male"},"Male",-1))),g=e((()=>(0,i._)("label",{for:"female"},"Female",-1))),_=(0,i.uE)('<div class="reg__datePick" data-v-52f4011c><label for="start" data-v-52f4011c>Birth date:</label><input type="date" id="birthDate" name="birthDate" value="1994-01-01" min="1960-01-01" max="2010-12-31" required data-v-52f4011c></div><div class="reg__country" data-v-52f4011c> select your country: <select id="country" name="country" required data-v-52f4011c><option value="AF" data-v-52f4011c>Afghanistan</option><option value="AL" data-v-52f4011c>Albania</option><option value="DZ" data-v-52f4011c>Algeria</option><option value="AS" data-v-52f4011c>American Samoa</option><option value="AD" data-v-52f4011c>Andorra</option><option value="AO" data-v-52f4011c>Angola</option><option value="AI" data-v-52f4011c>Anguilla</option><option value="AG" data-v-52f4011c>Antigua &amp; Barbuda</option><option value="AR" data-v-52f4011c>Argentina</option><option value="AM" data-v-52f4011c>Armenia</option><option value="AW" data-v-52f4011c>Aruba</option><option value="AU" data-v-52f4011c>Australia</option><option value="AT" data-v-52f4011c>Austria</option><option value="AZ" data-v-52f4011c>Azerbaijan</option><option value="BS" data-v-52f4011c>Bahamas</option><option value="BH" data-v-52f4011c>Bahrain</option><option value="BD" data-v-52f4011c>Bangladesh</option><option value="BB" data-v-52f4011c>Barbados</option><option value="BY" data-v-52f4011c>Belarus</option><option value="BE" data-v-52f4011c>Belgium</option><option value="BZ" data-v-52f4011c>Belize</option><option value="BJ" data-v-52f4011c>Benin</option><option value="BM" data-v-52f4011c>Bermuda</option><option value="BT" data-v-52f4011c>Bhutan</option><option value="BO" data-v-52f4011c>Bolivia</option><option value="BA" data-v-52f4011c>Bosnia &amp; Herzegovina</option><option value="BW" data-v-52f4011c>Botswana</option><option value="BR" data-v-52f4011c>Brazil</option><option value="VG" data-v-52f4011c>British Indian Ocean Ter</option><option value="BG" data-v-52f4011c>Bulgaria</option><option value="BF" data-v-52f4011c>Burkina Faso</option><option value="BI" data-v-52f4011c>Burundi</option><option value="KH" data-v-52f4011c>Cambodia</option><option value="CM" data-v-52f4011c>Cameroon</option><option value="CA" data-v-52f4011c>Canada</option><option value="CV" data-v-52f4011c>Cape Verde</option><option value="KY" data-v-52f4011c>Cayman Islands</option><option value="CF" data-v-52f4011c>Central African Republic</option><option value="TD" data-v-52f4011c>Chad</option><option value="CL" data-v-52f4011c>Chile</option><option value="CN" data-v-52f4011c>China</option><option value="CO" data-v-52f4011c>Colombia</option><option value="KM" data-v-52f4011c>Comoros</option><option value="CG" data-v-52f4011c>Congo</option><option value="CR" data-v-52f4011c>Costa Rica</option><option value="CI" data-v-52f4011c>Cote DIvoire</option><option value="HR" data-v-52f4011c>Croatia</option><option value="CU" data-v-52f4011c>Cuba</option><option value="CY" data-v-52f4011c>Cyprus</option><option value="CZ" data-v-52f4011c>Czech Republic</option><option value="DK" data-v-52f4011c>Denmark</option><option value="DJ" data-v-52f4011c>Djibouti</option><option value="DM" data-v-52f4011c>Dominica</option><option value="DO" data-v-52f4011c>Dominican Republic</option><option value="EC" data-v-52f4011c>Ecuador</option><option value="EG" data-v-52f4011c>Egypt</option><option value="SV" data-v-52f4011c>El Salvador</option><option value="GQ" data-v-52f4011c>Equatorial Guinea</option><option value="ER" data-v-52f4011c>Eritrea</option><option value="EE" data-v-52f4011c>Estonia</option><option value="ET" data-v-52f4011c>Ethiopia</option><option value="FJ" data-v-52f4011c>Fiji</option><option value="FI" data-v-52f4011c>Finland</option><option value="FR" data-v-52f4011c>France</option><option value="GF" data-v-52f4011c>French Guiana</option><option value="PF" data-v-52f4011c>French Polynesia</option><option value="GA" data-v-52f4011c>Gabon</option><option value="GM" data-v-52f4011c>Gambia</option><option value="GE" data-v-52f4011c>Georgia</option><option value="DE" data-v-52f4011c>Germany</option><option value="GH" data-v-52f4011c>Ghana</option><option value="GI" data-v-52f4011c>Gibraltar</option><option value="GR" data-v-52f4011c>Greece</option><option value="GL" data-v-52f4011c>Greenland</option><option value="GD" data-v-52f4011c>Grenada</option><option value="GP" data-v-52f4011c>Guadeloupe</option><option value="GU" data-v-52f4011c>Guam</option><option value="GT" data-v-52f4011c>Guatemala</option><option value="GN" data-v-52f4011c>Guinea</option><option value="GY" data-v-52f4011c>Guyana</option><option value="HT" data-v-52f4011c>Haiti</option><option value="HN" data-v-52f4011c>Honduras</option><option value="HU" data-v-52f4011c>Hungary</option><option value="IS" data-v-52f4011c>Iceland</option><option value="ID" data-v-52f4011c>Indonesia</option><option value="IN" data-v-52f4011c>India</option><option value="IR" data-v-52f4011c>Iran</option><option value="IQ" data-v-52f4011c>Iraq</option><option value="IE" data-v-52f4011c>Ireland</option><option value="IL" data-v-52f4011c>Israel</option><option value="IT" data-v-52f4011c>Italy</option><option value="JM" data-v-52f4011c>Jamaica</option><option value="JP" data-v-52f4011c>Japan</option><option value="JO" data-v-52f4011c>Jordan</option><option value="KZ" data-v-52f4011c>Kazakhstan</option><option value="KE" data-v-52f4011c>Kenya</option><option value="KI" data-v-52f4011c>Kiribati</option><option value="KP" data-v-52f4011c>Korea North</option><option value="KR" data-v-52f4011c>Korea South</option><option value="KW" data-v-52f4011c>Kuwait</option><option value="KG" data-v-52f4011c>Kyrgyzstan</option><option value="LA" data-v-52f4011c>Laos</option><option value="LA" data-v-52f4011c>Latvia</option><option value="LB" data-v-52f4011c>Lebanon</option><option value="LS" data-v-52f4011c>Lesotho</option><option value="LR" data-v-52f4011c>Liberia</option><option value="LY" data-v-52f4011c>Libya</option><option value="LI" data-v-52f4011c>Liechtenstein</option><option value="LT" data-v-52f4011c>Lithuania</option><option value="LU" data-v-52f4011c>Luxembourg</option><option value="MK" data-v-52f4011c>Macedonia</option><option value="MG" data-v-52f4011c>Madagascar</option><option value="MY" data-v-52f4011c>Malaysia</option><option value="MW" data-v-52f4011c>Malawi</option><option value="MV" data-v-52f4011c>Maldives</option><option value="ML" data-v-52f4011c>Mali</option><option value="MT" data-v-52f4011c>Malta</option><option value="MH" data-v-52f4011c>Marshall Islands</option><option value="MQ" data-v-52f4011c>Martinique</option><option value="MR" data-v-52f4011c>Mauritania</option><option value="MU" data-v-52f4011c>Mauritius</option><option value="MX" data-v-52f4011c>Mexico</option><option value="MD" data-v-52f4011c>Moldova</option><option value="MC" data-v-52f4011c>Monaco</option><option value="MN" data-v-52f4011c>Mongolia</option><option value="MA" data-v-52f4011c>Morocco</option><option value="MZ" data-v-52f4011c>Mozambique</option><option value="MM" data-v-52f4011c>Myanmar</option><option value="NA" data-v-52f4011c>Nambia</option><option value="NR" data-v-52f4011c>Nauru</option><option value="NP" data-v-52f4011c>Nepal</option><option value="NL" data-v-52f4011c>Netherlands (Holland, Europe)</option><option value="NZ" data-v-52f4011c>New Zealand</option><option value="NI" data-v-52f4011c>Nicaragua</option><option value="NE" data-v-52f4011c>Niger</option><option value="NG" data-v-52f4011c>Nigeria</option><option value="NO" data-v-52f4011c>Norway</option><option value="OM" data-v-52f4011c>Oman</option><option value="PK" data-v-52f4011c>Pakistan</option><option value="PS" data-v-52f4011c>Palestine</option><option value="PA" data-v-52f4011c>Panama</option><option value="PG" data-v-52f4011c>Papua New Guinea</option><option value="PY" data-v-52f4011c>Paraguay</option><option value="PE" data-v-52f4011c>Peru</option><option value="PH" data-v-52f4011c>Philippines</option><option value="PL" data-v-52f4011c>Poland</option><option value="PT" data-v-52f4011c>Portugal</option><option value="PR" data-v-52f4011c>Puerto Rico</option><option value="QA" data-v-52f4011c>Qatar</option><option value="RS" data-v-52f4011c>Republic of Serbia</option><option value="RE" data-v-52f4011c>Reunion</option><option value="RO" data-v-52f4011c>Romania</option><option selected="selected" value="RU" data-v-52f4011c>Russia</option><option value="RW" data-v-52f4011c>Rwanda</option><option value="WS" data-v-52f4011c>Samoa</option><option value="SM" data-v-52f4011c>San Marino</option><option value="SA" data-v-52f4011c>Saudi Arabia</option><option value="SN" data-v-52f4011c>Senegal</option><option value="SC" data-v-52f4011c>Seychelles</option><option value="SL" data-v-52f4011c>Sierra Leone</option><option value="SG" data-v-52f4011c>Singapore</option><option value="SK" data-v-52f4011c>Slovakia</option><option value="SI" data-v-52f4011c>Slovenia</option><option value="SB" data-v-52f4011c>Solomon Islands</option><option value="SO" data-v-52f4011c>Somalia</option><option value="ZA" data-v-52f4011c>South Africa</option><option value="ES" data-v-52f4011c>Spain</option><option value="LK" data-v-52f4011c>Sri Lanka</option><option value="SD" data-v-52f4011c>Sudan</option><option value="SR" data-v-52f4011c>Suriname</option><option value="SZ" data-v-52f4011c>Swaziland</option><option value="SE" data-v-52f4011c>Sweden</option><option value="CH" data-v-52f4011c>Switzerland</option><option value="SY" data-v-52f4011c>Syria</option><option value="TW" data-v-52f4011c>Taiwan</option><option value="TJ" data-v-52f4011c>Tajikistan</option><option value="TZ" data-v-52f4011c>Tanzania</option><option value="TH" data-v-52f4011c>Thailand</option><option value="TG" data-v-52f4011c>Togo</option><option value="TO" data-v-52f4011c>Tonga</option><option value="TT" data-v-52f4011c>Trinidad &amp; Tobago</option><option value="TN" data-v-52f4011c>Tunisia</option><option value="TR" data-v-52f4011c>Turkey</option><option value="TM" data-v-52f4011c>Turkmenistan</option><option value="TV" data-v-52f4011c>Tuvalu</option><option value="UG" data-v-52f4011c>Uganda</option><option value="GB" data-v-52f4011c>United Kingdom</option><option value="UA" data-v-52f4011c>Ukraine</option><option value="AE" data-v-52f4011c>United Arab Emirates</option><option value="US" data-v-52f4011c>United States of America</option><option value="UY" data-v-52f4011c>Uruguay</option><option value="UZ" data-v-52f4011c>Uzbekistan</option><option value="VU" data-v-52f4011c>Vanuatu</option><option value="VE" data-v-52f4011c>Venezuela</option><option value="VN" data-v-52f4011c>Vietnam</option><option value="YE" data-v-52f4011c>Yemen</option><option value="ZM" data-v-52f4011c>Zambia</option><option value="ZW" data-v-52f4011c>Zimbabwe</option></select></div>',2),S=e((()=>(0,i._)("input",{type:"submit",value:"create Acc",class:"reg__fields reg__submit"},null,-1))),A={class:"reg__failed"};function C(a,o,t,e,C,M){const b=(0,i.up)("router-link"),G=(0,i.up)("PictureForm");return(0,i.wg)(),(0,i.iD)("div",p,[v,(0,i.Wm)(b,{to:"/auth"},{default:(0,i.w5)((()=>[l])),_:1}),(0,i._)("div",u,[(0,i._)("form",{name:"reg",class:"",onSubmit:o[2]||(o[2]=(...a)=>M.submitRegForm&&M.submitRegForm(...a))},[d,c,s,r,(0,i._)("div",f,[m,(0,i._)("input",{onChange:o[0]||(o[0]=(...a)=>M.sexChanged&&M.sexChanged(...a)),type:"radio",id:"sexMale",name:"sex",value:"male",checked:""},null,32),h,(0,i._)("input",{onChange:o[1]||(o[1]=(...a)=>M.sexChanged&&M.sexChanged(...a)),type:"radio",id:"sexFemale",name:"sex",value:"female"},null,32),g]),_,(0,i.Wm)(G,{onSelectedAvatar:M.setImgAdress,ref:"child"},null,8,["onSelectedAvatar"]),S],32),(0,i._)("div",A,(0,n.zw)(C.alertMessage),1)])])}const M={class:"av-form"},b=["src"],G={key:0,class:"av-form__grid-wrapper"},w={class:"av-form__pic"},y=["src"];function T(a,o,n,e,p,v){return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("div",{class:"av-form__button",onClick:o[0]||(o[0]=a=>this.showGrid())},[(0,i._)("img",{class:"av-form__picked-avatar",src:p.avatarPhoto||t(2717),alt:"choose avatar"},null,8,b)]),(0,i._)("div",{class:"av-form__button",onClick:o[1]||(o[1]=a=>this.showGrid())},"Choose avatar"),p.isGridShow&&p.fetchCompleted?((0,i.wg)(),(0,i.iD)("div",G,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(p.picturesJson.results,(a=>((0,i.wg)(),(0,i.iD)("div",{class:"av-form__grid-pics",key:a.id.value},[(0,i._)("div",w,[(0,i._)("img",{class:"av-form__img",src:a.picture.medium,alt:"avatar"},null,8,y)])])))),128))])):(0,i.kq)("",!0)])}var k={name:"PictureForm",data(){return{isGridShow:!1,fetchCompleted:!1,picturesJson:{},choosedSex:"male",avatarPhoto:""}},emits:["selectedAvatar"],methods:{showGrid(){this.isGridShow=!this.isGridShow,this.fetchPicsUrls()},hideGridClear(){this.isGridShow=!1,this.$emit("selectedAvatar",""),this.avatarPhoto=""},async fetchPicsUrls(){this.picturesJson={};const a=document.querySelectorAll('input[name="sex"]');for(const t of a)if(t.checked){this.choosedSex=t.value;break}let o=await fetch(`https://randomuser.me/api/?inc=picture,id&results=9&gender=${this.choosedSex}`);if(o.ok){let a=await o.json();this.fetchCompleted=!0,this.picturesJson=a}else alert("Ошибка HTTP: "+o.status)}},mounted(){document.addEventListener("click",(async a=>{if(a.target.classList.contains("av-form__img")){let o=document.querySelector(".pic-active");return o&&o.classList.toggle("pic-active"),this.$emit("selectedAvatar",a.target.src),this.avatarPhoto=a.target.src,void(this.isGridShow=!1)}}))}},B=t(89);const P=(0,B.Z)(k,[["render",T],["__scopeId","data-v-10c920ca"]]);var I=P;const N="https://safe-fjord-51597.herokuapp.com";var R={name:"RegView",data(){return{alertMessage:"",selectedAvatar:""}},components:{PictureForm:I},methods:{setImgAdress(a){this.selectedAvatar=a},sexChanged(){this.$refs.child.hideGridClear()},async submitRegForm(a){a.preventDefault();let o=document.forms.reg,t={username:o.username.value.toString(),password:o.password.value.toString(),firstName:o.firstName.value.toString(),secondName:o.secondName.value.toString(),sex:o.sex.value.toString(),birthDate:o.birthDate.value.toString(),country:o.country.value.toString(),selectedAvatar:this.selectedAvatar};console.log(t);let i=await fetch(`${N}/auth/registration`,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}),n=await i.json();this.alertMessage=n.message,200===i.status&&setTimeout((()=>this.$router.push("auth")),2e3)}},async mounted(){}};const L=(0,B.Z)(R,[["render",C],["__scopeId","data-v-52f4011c"]]);var D=L},2717:function(a,o,t){a.exports=t.p+"img/missing_avatar.49e85643.svg"}}]);
//# sourceMappingURL=about.e774f353.js.map