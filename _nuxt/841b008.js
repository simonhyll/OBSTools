(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{325:function(t,e,o){var content=o(346);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(14).default)("4be15c02",content,!0,{sourceMap:!1})},345:function(t,e,o){"use strict";o(325)},346:function(t,e,o){(e=o(13)(!1)).push([t.i,".my-iframe[data-v-3d994788]{width:100%}",""]),t.exports=e},421:function(t,e,o){"use strict";o.r(e);o(345);var n=o(49),r=o(93),l=o.n(r),v=o(423),d=o(344),c=o(311),h=o(408),_=o(424),f=o(409),y=o(410),w=o(411),m=o(412),S=o(413),x=o(414),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Documentation ")]),t._v(" "),o("v-card-text",[o("p",[t._v("\n            Most, if not all, of the below are simple browser overlays for\n            OBS. You should be able to open them in a new tab and they should\n            work directly. If they don't odds are they won't work in OBS\n            either.\n          ")]),t._v(" "),o("ol",[o("li",[t._v("Open OBS/Streamlabs OBS")]),t._v(" "),o("li",[t._v("Add a new Browser Source")]),t._v(" "),o("li",[t._v("Use the URL from one of the overlays")]),t._v(" "),o("li",[t._v("\n              (Conditional) If the overlay specifies dimensions you need to\n              set the same dimensions in OBS for the browser for it to display\n              properly. I'm considering going through the extra effort of not\n              enforcing it but haven't bothered yet. You can still resize the\n              window in OBS, you just have to specify that the window is a\n              certain size that when you then resize in your OBS stream window\n              actually just change the zoom of, that'll let the overlay keep\n              sizing things based on absolute values and you can still change\n              its size. Again, working on a better solution, but I'm a one man\n              army for this project.\n            ")]),t._v(" "),o("li",[t._v('\n              (Optional) Select "Refresh browser when scene becomes active" in\n              case something doesn\'t load properly\n            ')])])])],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" SNES controller ")]),t._v(" "),o("v-card-text",[o("p",[t._v("\n            Displays a SNES controller that reacts to your button presses.\n            This version of the overlay works by using the Gamepad API in the\n            browser to light up whichever buttons are being pressed.\n          ")]),t._v(" "),o("v-simple-table",{staticClass:"pa-5",scopedSlots:t._u([{key:"default",fn:function(){return[o("tbody",[o("tr",[o("td",[t._v("Requires connector")]),t._v(" "),o("td",[t._v("No")])]),t._v(" "),o("tr",[o("td",[t._v("Verified to work with")]),t._v(" "),o("td",[o("a",{attrs:{href:"https://www.8bitdo.com/sn30-wireless-for-original-snes-sfc/",target:"_blank"}},[t._v("8BitDo SNES Gamepad")])])]),t._v(" "),o("tr",[o("td",[t._v("Dimensions")]),t._v(" "),o("td",[t._v("1000x600")])]),t._v(" "),o("tr",[o("td",[t._v("URL")]),t._v(" "),o("td",[o("a",{attrs:{href:"https://seranth.github.io/OBSTools/overlays/controller/snes",target:"_blank"}},[t._v("https://seranth.github.io/OBSTools/overlays/controller/snes")])])])])]},proxy:!0}])}),t._v(" "),o("v-expansion-panels",{staticClass:"pa-5"},[o("v-expansion-panel",{staticClass:"elevation-2"},[o("v-expansion-panel-header",[t._v(" Preview ")]),t._v(" "),o("v-expansion-panel-content",[o("iframe",{staticClass:"my-iframe",attrs:{frameborder:"0",scrolling:"no",src:"https://seranth.github.io/OBSTools/overlays/controller/snes",sandbox:"allow-same-origin allow-scripts",onload:"this.style.height=(this.contentWindow.document.getElementById('overlay').scrollHeight)+'px';"}})])],1)],1),t._v(" "),o("v-alert",{attrs:{border:"left",color:"indigo",dark:""}},[t._v("\n            If it doesn't respond to your button mashing, try reconnecting\n            your controller\n          ")]),t._v(" "),o("v-alert",{attrs:{border:"left",color:"indigo",dark:""}},[t._v("\n            If the wrong buttons light up your controller may be different\n            from mine. Contact me on Discord and maybe I'll create a new one\n            that supports your controller\n          ")]),t._v(" "),o("v-alert",{attrs:{border:"left",color:"indigo",dark:""}},[t._v('\n            If your controller works but isn\'t listed in the "Verified"\n            section feel free to tell me about it so I might add it there\n          ')])],1)],1)],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v(" Countdown ")]),t._v(" "),o("v-card-text",[o("p",[t._v("\n            Displays a simple countdown. By default it's white. I could add\n            support for more fonts but I had no reason to do so yet, request\n            it if you want it.\n          ")]),t._v(" "),o("p",[t._v('\n            As a tip, if you set this overlay to clear cache whenever its\n            scene gets activated you can easily set this to be e.g. a default\n            5 minutes for your "BRB" screen, so that every time you go to your\n            "BRB" screen it will always do a 5 minute countdown.\n          ')]),t._v(" "),o("v-simple-table",{staticClass:"pa-5",scopedSlots:t._u([{key:"default",fn:function(){return[o("tbody",[o("tr",[o("td",[t._v("Requires connector")]),t._v(" "),o("td",[t._v("No")])]),t._v(" "),o("tr",[o("td",[t._v("URL")]),t._v(" "),o("td",[o("a",{attrs:{href:"https://seranth.github.io/OBSTools/overlays/countdown",target:"_blank"}},[t._v("https://seranth.github.io/OBSTools/overlays/countdown")])])]),t._v(" "),o("tr",[o("td",[t._v("Parameters")]),t._v(" "),o("td",[o("ul",[o("li",[o("b",[t._v("for=DD:HH:MM:SS")]),t._v(" - How long the countdown should\n                        last. Supports days, hours, minutes and seconds.\n                      ")]),t._v(" "),o("li",[o("b",[t._v("black")]),t._v(" - Makes the text black.")])])])]),t._v(" "),o("tr",[o("td",[t._v("Example 5 min countdown")]),t._v(" "),o("td",[o("a",{attrs:{href:"https://seranth.github.io/OBSTools/overlays/countdown?for=5:00",target:"_blank"}},[t._v("https://seranth.github.io/OBSTools/overlays/countdown?for=5:00")])])]),t._v(" "),o("tr",[o("td",[t._v("Example with black text")]),t._v(" "),o("td",[o("a",{attrs:{href:"https://seranth.github.io/OBSTools/overlays/countdown?for=2:35&black",target:"_blank"}},[t._v("https://seranth.github.io/OBSTools/overlays/countdown?for=2:35&black")])])])])]},proxy:!0}])}),t._v(" "),o("v-expansion-panels",{staticClass:"pa-5"},[o("v-expansion-panel",{staticClass:"elevation-2"},[o("v-expansion-panel-header",[t._v(" Preview ")]),t._v(" "),o("v-expansion-panel-content",[o("iframe",{staticClass:"my-iframe",attrs:{frameborder:"0",scrolling:"no",src:"https://seranth.github.io/OBSTools/overlays/countdown?for=6:6:6",sandbox:"allow-same-origin allow-scripts",onload:"this.style.height=(this.contentWindow.document.getElementById('overlay').scrollHeight)+'px';"}})])],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"3d994788",null);e.default=component.exports;l()(component,{VAlert:v.a,VCard:d.a,VCardText:c.a,VCardTitle:c.b,VCol:h.a,VContainer:_.a,VExpansionPanel:f.a,VExpansionPanelContent:y.a,VExpansionPanelHeader:w.a,VExpansionPanels:m.a,VRow:S.a,VSimpleTable:x.a})}}]);