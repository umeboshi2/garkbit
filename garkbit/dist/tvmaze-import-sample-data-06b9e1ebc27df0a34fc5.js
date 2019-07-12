(self.webpackJsonp=self.webpackJsonp||[]).push([[92],{123:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.ProgressView=n.ProgressModel=void 0;var i,o,a=s(t(1)),r=t(2),d=s(t(3));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.ProgressModel=i=function(){var e=(u(n,a.default.Model),n);function n(){return l(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return e.prototype.defaults={valuemin:0,valuemax:100,valuenow:0},e}.call(void 0),n.ProgressView=o=function(){var e=(u(n,r.View),n);function n(){return l(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return e.prototype.template=d.default.renderable(function(n){return d.default.div(".progress",function(){var e;return{valuemin:n.valuemin,valuemax:n.valuemax,valuenow:n.valuenow},e=Math.floor(n.valuenow/n.valuemax*100+.5),d.default.div(".progress-bar.progress-bar-striped",{role:"progressbar",style:"width: "+e+"%"},function(){return d.default.span({style:"color:black;"},n.valuenow+" of "+n.valuemax+".")})})}),e.prototype.modelEvents={change:"render"},e}.call(void 0),n.ProgressModel=i,n.ProgressView=o},609:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e,n,t){return n&&o(e.prototype,n),t&&o(e,t),e};function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}t(0),s(t(4));var a=s(t(1)),r=s(t(2)),d=s(t(3));s(t(32));function s(e){return e&&e.__esModule?e:{default:e}}function l(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function m(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var h,c,p,f,g,v,y,w,b,T,S,M;T=t(5).default;var P=t(123);f=P.ProgressModel,g=P.ProgressView,console.log("ProgressModel",f),console.log("ProgressView",g),a.default.Radio.channel("global"),p=a.default.Radio.channel("messages"),h=a.default.Radio.channel("tvmaze"),y=t(610),M=new a.default.Collection(y),function(){var e=(u(n,r.default.Object),i(n,[{key:"initialize",value:function(e){return function(e,n){if(!(e instanceof n))throw new Error("Bound instance method accessed before binding")}(this,n),this.progressModel=e.progressModel}}]),n);function n(){l(this,n);var e=m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.initialize=e.initialize.bind(e),e}return e.prototype.channelName="tvmaze",e.prototype.collection=M,e}.call(void 0),S=function(e,t,n){var i;return i=[],e.models.forEach(function(e){var n;return y={id:e.get("id"),show_id:t,content:e.toJSON()},n=h.request("save-local-episode",y),i.push(n)}),Promise.all(i).then(function(e){return i.length&&n&&T("#tvmaze/shows/view/"+t),p.request("success","Retrieved "+i.length+" episodes.")})},w=d.default.renderable(function(e){return".btn.btn-sm",d.default.li(".list-group-item",function(){return d.default.span(function(){return d.default.a(".import-single-show",{href:"#"},e.name)}),d.default.span(".btn-group.pull-right",function(){return d.default.button(".delete-item.btn.btn-sm.btn-danger.fa.fa-close","delete")})})}),b=d.default.renderable(function(e){return d.default.div(".body.col-md-6",function(){return d.default.h1("TV Maze Sample Data"),d.default.div(".form-inline",function(){return d.default.div(".form-check",function(){return d.default.input("#include-episodes.form-check-input",{type:"checkbox"}),d.default.label(".form-check-label",{for:"include-episodes"},"Include episodes")}),d.default.button(".import-button.btn.btn-primary.btn-sm","Import Data")}),d.default.div(".status-div.alert.alert-info",{style:"display:none"}),d.default.div(".import-progress"),d.default.ul(".show-list.list-group")})}),v=function(){var e=(u(n,r.default.View),i(n,[{key:"deleteItem",value:function(){return this.trigger("item:deleted",this.model),this.triggerMethod("item:deleted",this.model),this.model.collection.remove(this.model)}},{key:"importShow",value:function(e){return e.preventDefault()}}]),n);function n(){return l(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return e.prototype.channelName="tvmaze",e.prototype.template=w,e.prototype.ui={deleteButton:".delete-item",importSingleAnchor:".import-single-show"},e.prototype.events={"click @ui.deleteButton":"deleteItem","click @ui.importSingleAnchor":"importShow"},e.prototype.triggers={"click @ui.deleteButton":"item:deleted","click @ui.importSingleAnchor":"import:show"},e}.call(void 0),c=function(){var e=(u(n,r.default.View),i(n,[{key:"onRender",value:function(){var e,n,t,i,o,a=this;for(n=h.request("get-all-local-tvshows"),M.models,console.log("SHOWS",M,M.models[0]),e=0,i=[];e<M.length;)t=M.models[e],n.get(t.id)&&i.push(t),e+=1;return M.remove(i),this.importProgressModel=new f,this.importProgressModel.set("valuemax",M.length),this.importProgressModel.set("valuenow",0),o=new r.default.CollectionView({channelName:"tvmaze",collection:M,childView:v,childViewTriggers:{"item:deleted":"child:item:deleted","import:show":"child:import:show"},onChildItemDeleted:function(){return a.importProgressModel.set("valuemax",M.length)},onChildImportShow:function(e){var t,i,o;return console.log("onChildImportShow",e),t=e.model.id,i=a.ui.includeEpisodes.prop("checked"),(o=h.request("get-remote-show",t)).fetch().done(function(){return h.request("save-local-show",o.toJSON()).then(function(e){var n;if(i)return console.log("get episodes too"),console.log(o),p.request("info","Retrieving episodes...."),(n=h.request("get-remote-episodes",t)).fetch().done(function(){return S(n,t)})})})}}),this.showChildView("showList",o),o=new g({model:this.importProgressModel}),this.showChildView("importProgress",o)}},{key:"importShows",value:function(){return this.ui.importButton.hide(),this.ui.statusDiv.show(),console.log("importShows"),this.importAnotherShow()}},{key:"importShow",value:function(t){var i,e,o,a=this;return e=t.get("name"),i=t.id,this.ui.statusDiv.text("Importing "+e+", "+i),(o=h.request("get-remote-show",i)).fetch().done(function(){return h.request("save-local-show",o.toJSON()).then(function(e){var n;return a.ui.includeEpisodes.prop("checked")?(console.log("get episodes too"),console.log(o),p.request("info","Retrieving episodes...."),(n=h.request("get-remote-episodes",i)).fetch().done(function(){if(S(n,i,!1),M.remove(t),a.importProgressModel.set("valuenow",M.length),M.length)return setTimeout(function(){return a.importAnotherShow()},500)})):(M.remove(t),a.importProgressModel.set("valuenow",M.length),M.length?setTimeout(function(){return a.importAnotherShow()},500):void 0)})})}},{key:"importAnotherShow",value:function(){var e;return e=M.models[0],this.importShow(e)}}]),n);function n(){return l(this,n),m(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return e.prototype.channelName="tvmaze",e.prototype.template=b,e.prototype.ui={showList:".show-list",statusDiv:".status-div",importProgress:".import-progress",importButton:".import-button",includeEpisodes:"#include-episodes"},e.prototype.regions={showList:"@ui.showList",importProgress:"@ui.importProgress"},e.prototype.events={"click @ui.importButton":"importShows"},e}.call(void 0),n.default=c},610:function(e){e.exports=JSON.parse('[{"id":3741,"name":"Hill Street Blues"},{"id":6544,"name":"Sesame Street"},{"id":4484,"name":"Tiny Toon Adventures"},{"id":12144,"name":"Rumpole of the Bailey"},{"id":451,"name":"Knight Rider"},{"id":4460,"name":"St. Elsewhere"},{"id":5144,"name":"Falcon Crest"},{"id":3853,"name":"The Andy Griffith Show"},{"id":782,"name":"Gunsmoke"},{"id":3743,"name":"Welcome Back, Kotter"},{"id":1472,"name":"Good Times"},{"id":7513,"name":"Sanford and Son"},{"id":238,"name":"Dallas"},{"id":4041,"name":"Gilligan\'s Island"},{"id":1475,"name":"Hogan\'s Heroes"},{"id":19621,"name":"DuckTales"},{"id":9486,"name":"Count Duckula"},{"id":470,"name":"The Prisoner"},{"id":553,"name":"Cheers"},{"id":1496,"name":"Remington Steele"},{"id":6606,"name":"Max Headroom"},{"id":4529,"name":"Are You Being Served?"},{"id":1166,"name":"Agatha Christie\'s Poirot"},{"id":12174,"name":"Deep Space 69"},{"id":493,"name":"Star Trek: Deep Space Nine"},{"id":5319,"name":"Knots Landing"},{"id":680,"name":"Airwolf"},{"id":1249,"name":"The Brady Bunch"},{"id":475,"name":"Babylon 5"},{"id":714,"name":"Star Trek: Enterprise"},{"id":5782,"name":"Barney Miller"},{"id":7553,"name":"Alice"},{"id":5389,"name":"The Jeffersons"},{"id":1784,"name":"All In the Family"},{"id":5486,"name":"Chico and the Man"},{"id":7102,"name":"Lidsville"},{"id":1500,"name":"The Six Million Dollar Man"},{"id":962,"name":"Hawaii Five-O"},{"id":16291,"name":"Police Woman"},{"id":956,"name":"Magnum, P.I."},{"id":787,"name":"The Twilight Zone"},{"id":2139,"name":"The Beverly Hillbillies"},{"id":3824,"name":"I Love Lucy"},{"id":2128,"name":"Leave It to Beaver"},{"id":3884,"name":"The Munsters"},{"id":4042,"name":"The Addams Family"},{"id":4606,"name":"Diff\'rent Strokes"},{"id":7059,"name":"Silver Spoons"},{"id":13681,"name":"Fat Albert and the Cosby Kids"},{"id":32689,"name":"The Electric Company"},{"id":5488,"name":"Fraggle Rock"},{"id":6806,"name":"Animaniacs"},{"id":8520,"name":"TaleSpin"},{"id":5308,"name":"Chip \'N Dale Rescue Rangers"},{"id":4022,"name":"60 Minutes"},{"id":16549,"name":"Giant Gorg"},{"id":18469,"name":"The Mysterious Cities of Gold"},{"id":1129,"name":"Dungeons & Dragons"},{"id":3398,"name":"Inspector Gadget"},{"id":9829,"name":"Ghostbusters"},{"id":4044,"name":"Jonny Quest"},{"id":4299,"name":"The Real Ghostbusters"},{"id":9701,"name":"Beetlejuice"},{"id":16657,"name":"Bobby\'s World"},{"id":26381,"name":"Peter Pan and the Pirates"},{"id":19136,"name":"The Pirates of Dark Water"},{"id":421,"name":"Rugrats"},{"id":6308,"name":"Doug"},{"id":757,"name":"Batman: The Animated Series"},{"id":9022,"name":"Thundarr the Barbarian"},{"id":3778,"name":"The Herculoids"},{"id":12825,"name":"Eek! the Cat"},{"id":472,"name":"X-Men"},{"id":19561,"name":"Cadillacs and Dinosaurs"},{"id":6322,"name":"Rocko\'s Modern Life"},{"id":12941,"name":"2 Stupid Dogs"},{"id":8026,"name":"Magic School Bus Rides Again"},{"id":1662,"name":"ReBoot"},{"id":8571,"name":"Aaahh!!! Real Monsters"},{"id":414,"name":"Duckman: Private Dick/Family Man"},{"id":4221,"name":"The Head"},{"id":18163,"name":"The Maxx"},{"id":32526,"name":"Red Planet"},{"id":14116,"name":"The Tick"},{"id":1603,"name":"Samurai Jack"},{"id":1906,"name":"Rurouni Kenshin"},{"id":538,"name":"Futurama"},{"id":83,"name":"The Simpsons"},{"id":1661,"name":"The PJs"},{"id":409,"name":"Invader ZIM"},{"id":563,"name":"Star Wars: The Clone Wars"},{"id":832,"name":"The Rockford Files"},{"id":4284,"name":"The Dukes of Hazzard"},{"id":16748,"name":"The Super Globetrotters"},{"id":7256,"name":"The Woodwright\'s Shop"},{"id":33492,"name":"Mystery Road"},{"id":24204,"name":"Contact"},{"id":16339,"name":"Solid Gold"},{"id":21656,"name":"Dynasty"},{"id":22312,"name":"Nero Wolfe"},{"id":2151,"name":"The Incredible Hulk"},{"id":12374,"name":"Cagney and Lacey"},{"id":1488,"name":"Newhart"},{"id":12375,"name":"Ripley\'s Believe It or Not!"},{"id":30304,"name":"That\'s Incredible"},{"id":18555,"name":"G.I. Joe: Sigma Six"},{"id":13102,"name":"Hardcastle and McCormick"},{"id":3328,"name":"Scarecrow and Mrs. King"},{"id":6199,"name":"Mama\'s Family"},{"id":8227,"name":"Reading Rainbow"},{"id":28925,"name":"The Rousters"},{"id":10729,"name":"Blue Thunder"},{"id":1979,"name":"Charles in Charge"},{"id":2084,"name":"The Cosby Show"},{"id":12699,"name":"The Paper Chase"},{"id":180,"name":"Firefly"},{"id":2148,"name":"The Rat Patrol"},{"id":471,"name":"The Prisoner"},{"id":1474,"name":"Happy Days"},{"id":5814,"name":"Laverne & Shirley"},{"id":11549,"name":"One Day at a Time"},{"id":4378,"name":"Bonanza"},{"id":14914,"name":"The Life and Times of Grizzly Adams"},{"id":5443,"name":"Get Smart"},{"id":1484,"name":"The Love Boat"},{"id":5309,"name":"Darkwing Duck"},{"id":3309,"name":"The Waltons"},{"id":1911,"name":"Highlander"},{"id":711,"name":"Who\'s the Boss?"},{"id":4402,"name":"China Beach"},{"id":5498,"name":"Austin City Limits"},{"id":5519,"name":"WKRP in Cincinnati"},{"id":30938,"name":"Miami Vice"},{"id":25047,"name":"Mutual of Omaha\'s Wild Kingdom"},{"id":665,"name":"M*A*S*H"},{"id":5511,"name":"MacGyver"},{"id":7243,"name":"Designing Women"},{"id":4631,"name":"Mork & Mindy"},{"id":2083,"name":"Murder, She Wrote"},{"id":1748,"name":"Matlock"},{"id":7605,"name":"In the Heat of the Night"},{"id":722,"name":"The Golden Girls"},{"id":210,"name":"Doctor Who"},{"id":7432,"name":"Lou Grant"},{"id":717,"name":"Quantum Leap"},{"id":2075,"name":"Little House on the Prairie"},{"id":867,"name":"Law & Order: LA"},{"id":3911,"name":"Common Law"},{"id":4607,"name":"The Facts of Life"},{"id":3288,"name":"The Muppet Show"},{"id":30137,"name":"Last Laugh in Vegas"},{"id":6057,"name":"The Carol Burnett Show"},{"id":21746,"name":"The Gong Show"},{"id":1489,"name":"Night Court"},{"id":2218,"name":"Taxi"},{"id":499,"name":"Married... with Children"},{"id":4132,"name":"Three\'s Company"},{"id":7342,"name":"Too Close for Comfort"},{"id":881,"name":"CHiPs"},{"id":3913,"name":"B.J. and the Bear"},{"id":7602,"name":"227"},{"id":7221,"name":"Gimme a Break!"},{"id":16455,"name":"What\'s Happening!!"},{"id":5538,"name":"Maude"},{"id":1250,"name":"Family Matters"},{"id":7220,"name":"Murphy Brown"},{"id":530,"name":"Seinfeld"},{"id":582,"name":"The Fresh Prince of Bel-Air"},{"id":540,"name":"Frasier"},{"id":544,"name":"Home Improvement"},{"id":7051,"name":"The Greatest American Hero"},{"id":6315,"name":"Fantasy Island"},{"id":2031,"name":"The Fall Guy"},{"id":4948,"name":"Hart to Hart"},{"id":3646,"name":"Alien Nation"},{"id":4633,"name":"Midnight Caller"},{"id":474,"name":"Charlie\'s Angels"},{"id":7121,"name":"Highway to Heaven"},{"id":4583,"name":"The Smurfs"},{"id":23661,"name":"G.I. Joe Extreme"},{"id":490,"name":"Star Trek"},{"id":491,"name":"Star Trek: The Next Generation"},{"id":492,"name":"Star Trek: Voyager"}]')}}]);
//# sourceMappingURL=tvmaze-import-sample-data-06b9e1ebc27df0a34fc5.js.map