(function(a){if(undefined===a.wysiwyg){throw"wysiwyg.colorpicker.js depends on $.wysiwyg"}if(!a.wysiwyg.controls){a.wysiwyg.controls={}}a.wysiwyg.controls.colorpicker={modalOpen:false,color:{back:{prev:"#ffffff",palette:[]},fore:{prev:"#123456",palette:[]}},addColorToPalette:function(c,b){if(-1===a.inArray(b,this.color[c].palette)){this.color[c].palette.push(b)}else{this.color[c].palette.sort(function(e,d){if(e===b){return 1}return 0})}},init:function(i){if(a.wysiwyg.controls.colorpicker.modalOpen===true){return false}else{a.wysiwyg.controls.colorpicker.modalOpen=true}var c=this,g,e,b,f,d,h;f={legend:"Colorpicker",color:"Color",submit:"Apply",reset:"Cancel"};b='<form class="wysiwyg"><fieldset><legend>{legend}</legend><ul class="palette"></ul><label>{color}: <input type="text" name="color" value="#123456"/></label><div class="wheel"></div><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></fieldset></form>';for(d in f){if(a.wysiwyg.i18n){h=a.wysiwyg.i18n.t(f[d],"dialogs.colorpicker");if(h===f[d]){h=a.wysiwyg.i18n.t(f[d],"dialogs")}f[d]=h}b=b.replace("{"+d+"}",f[d])}if(a.modal){g=a(b);if(a.farbtastic){this.renderPalette(g,"fore");g.find(".wheel").farbtastic(g.find("input:text"))}a.modal(g.html(),{maxWidth:i.defaults.formWidth,maxHeight:i.defaults.formHeight,overlayClose:true,onShow:function(j){a("input:submit",j.data).click(function(l){var k=a('input[name="color"]',j.data).val();c.color.fore.prev=k;c.addColorToPalette("fore",k);if(a.browser.msie){i.ui.returnRange()}i.editorDoc.execCommand("ForeColor",false,k);a.modal.close();return false});a("input:reset",j.data).click(function(k){if(a.browser.msie){i.ui.returnRange()}a.modal.close();return false});a("fieldset",j.data).click(function(k){k.stopPropagation()})},onClose:function(j){a.wysiwyg.controls.colorpicker.modalOpen=false;a.modal.close()}})}else{if(a.fn.dialog){g=a(b);if(a.farbtastic){this.renderPalette(g,"fore");g.find(".wheel").farbtastic(g.find("input:text"))}e=g.appendTo("body");e.dialog({modal:true,open:function(j,k){a("input:submit",g).click(function(m){var l=a('input[name="color"]',e).val();c.color.fore.prev=l;c.addColorToPalette("fore",l);if(a.browser.msie){i.ui.returnRange()}i.editorDoc.execCommand("ForeColor",false,l);a(e).dialog("close");return false});a("input:reset",g).click(function(l){if(a.browser.msie){i.ui.returnRange()}a(e).dialog("close");return false});a("fieldset",g).click(function(l){l.stopPropagation()})},close:function(j,k){a.wysiwyg.controls.colorpicker.modalOpen=false;e.dialog("destroy");e.remove()}})}else{if(a.farbtastic){g=a("<div/>").css({position:"fixed","z-index":2000,left:"50%",top:"50%",background:"rgb(0, 0, 0)","margin-top":-1*Math.round(i.defaults.formHeight/2),"margin-left":-1*Math.round(i.defaults.formWidth/2)}).html(b);this.renderPalette(g,"fore");g.find("input[name=color]").val(c.color.fore.prev);g.find(".wheel").farbtastic(g.find("input:text"));a("input:submit",g).click(function(k){var j=a('input[name="color"]',g).val();c.color.fore.prev=j;c.addColorToPalette("fore",j);if(a.browser.msie){i.ui.returnRange()}i.editorDoc.execCommand("ForeColor",false,j);a(g).remove();a.wysiwyg.controls.colorpicker.modalOpen=false;return false});a("input:reset",g).click(function(j){if(a.browser.msie){i.ui.returnRange()}a(g).remove();a.wysiwyg.controls.colorpicker.modalOpen=false;return false});a("body").append(g);g.click(function(j){j.stopPropagation()})}}}},renderPalette:function(d,e){var b=d.find(".palette"),h=function(){var i=a(this).text();d.find("input[name=color]").val(i);if(a.farbtastic){d.find("input[name=color]").trigger("keyup")}},f,g,c;for(c=this.color[e].palette.length-1;c>-1;c-=1){f=a("<div/>").css({"float":"left",width:"16px",height:"16px",margin:"0px 5px 0px 0px","background-color":this.color[e].palette[c]});g=a("<li>"+this.color[e].palette[c]+"</li>").css({"float":"left","list-style":"none"}).append(f).bind("click.wysiwyg",h);b.append(g).css({margin:"0px",padding:"0px"})}}}})(jQuery);