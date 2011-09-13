(function(a){if(undefined===a.wysiwyg){throw"wysiwyg.image.js depends on $.wysiwyg"}if(!a.wysiwyg.controls){a.wysiwyg.controls={}}a.wysiwyg.controls.image={groupIndex:6,visible:true,exec:function(){a.wysiwyg.controls.image.init(this)},tags:["img"],tooltip:"Insert image",init:function(d){var l=this,c,i,j,h,f,k,b,g={alt:"",self:d.dom?d.dom.getElement("img"):null,src:"http://",};f={legend:"Insert Image",preview:"Preview",url:"URL",width:"Width",height:"Height",original:"Original W x H","float":"Float",floatNone:"None",floatLeft:"Left",floatRight:"Right",submit:"Insert Image",reset:"Cancel",fileManagerIcon:"Select file from server"};h='<form class="wysiwyg" id="wysiwyg-addImage"><fieldset><div class="form-row"><span class="form-row-key">{preview}:</span><div class="form-row-value"><img src="" alt="{preview}" style="margin: 2px; padding:5px; max-width: 100%; overflow:hidden; max-height: 100px; border: 1px solid rgb(192, 192, 192);"/></div></div><div class="form-row"><label for="name">Select image:</label><div class="form-row-value"><input style="display:none;" type="text" name="src" value=""/>';if(a.wysiwyg.fileManager.ready){h+='<div class="wysiwyg-fileManager" title="{fileManagerIcon}"/>'}h+='</div></div><div class="form-row"><label for="name">{width} x {height}:</label><div class="form-row-value"><input type="text" name="width" value="" class="width-small"/> x <input type="text" name="height" value="" class="width-small"/></div></div><div class="form-row"><label for="name">{original}:</label><div class="form-row-value"><input type="text" name="naturalWidth" value="" class="width-small" disabled="disabled"/> x <input type="text" name="naturalHeight" value="" class="width-small" disabled="disabled"/></div></div><div class="form-row"><label for="name">{float}:</label><div class="form-row-value"><select name="float"><option value="">{floatNone}</option><option value="left">{floatLeft}</option><option value="right">{floatRight}</option></select></div></div><div class="form-row form-row-last"><label for="name"></label><div class="form-row-value"><input type="submit" class="button" value="{submit}"/> <input type="reset" value="{reset}"/></div></div></fieldset></form>';for(k in f){if(a.wysiwyg.i18n){b=a.wysiwyg.i18n.t(f[k],"dialogs.image");if(b===f[k]){b=a.wysiwyg.i18n.t(f[k],"dialogs")}f[k]=b}h=h.replace("{"+k+"}",f[k])}j=f.legend;if(g.self){g.src=g.self.src?g.self.src:"";g.alt=g.self.alt?g.self.alt:"";g.width=g.self.width?g.self.width:"";g.height=g.self.height?g.self.height:""}var e=new a.wysiwyg.dialog(d,{title:j,content:h});a(e).bind("afterOpen",function(n,m){a("form#wysiwyg-addImage",m).submit(function(o){o.preventDefault();l.processInsert(m.container,d,g);e.close();return false});a("div.wysiwyg-fileManager").bind("click",function(){a.wysiwyg.fileManager.init(function(o){m.find("input[name=src]").val(o);m.find("input[name=src]").trigger("change")})});a("input:reset",m).click(function(o){e.close();return false});a("fieldset",m).click(function(o){o.stopPropagation()});l.makeForm(m,g)});e.open();a(d.editorDoc).trigger("editorRefresh.wysiwyg")},processInsert:function(e,f,h){var g,c=a('input[name="src"]',e).val(),d=a('input[name="width"]',e).val(),k=a('input[name="height"]',e).val(),i=a('select[name="float"]',e).val(),b=[],l,j;if(f.options.controlImage&&f.options.controlImage.forceRelativeUrls){j=window.location.protocol+"//"+window.location.hostname;if(0===c.indexOf(j)){c=c.substr(j.length)}}if(h.self){a(h.self).attr("src",c).css("float",i);if(d.toString().match(/^[0-9]+(px|%)?$/)){a(h.self).css("width",d)}else{a(h.self).css("width","")}if(k.toString().match(/^[0-9]+(px|%)?$/)){a(h.self).css("height",k)}else{a(h.self).css("height","")}f.saveContent()}else{l=d.toString().match(/^[0-9]+(px|%)?$/);if(l){if(l[1]){b.push("width: "+d+";")}else{b.push("width: "+d+"px;")}}l=k.toString().match(/^[0-9]+(px|%)?$/);if(l){if(l[1]){b.push("height: "+k+";")}else{b.push("height: "+k+"px;")}}if(i.length>0){b.push("float: "+i+";")}if(b.length>0){b=' style="'+b.join(" ")+'"'}g="<img src='"+c+"' alt=''"+b+"/>";f.insertHtml(g)}},makeForm:function(c,b){c.find("input[name=src]").val(b.src);c.find('input[name="width"]').val(b.width);c.find('input[name="height"]').val(b.height);c.find("img").attr("src",b.src);c.find("img").bind("load",function(){if(c.find("img").attr("naturalWidth")){c.find('input[name="naturalWidth"]').val(c.find("img").attr("naturalWidth"));c.find('input[name="naturalHeight"]').val(c.find("img").attr("naturalHeight"))}});c.find("input[name=src]").bind("change",function(){c.find("img").attr("src",this.value)});return c}};a.wysiwyg.insertImage=function(d,c,b){return d.each(function(){var g=a(this).data("wysiwyg"),f,e;if(!g){return this}if(!c||c.length===0){return this}if(a.browser.msie){g.ui.focus()}if(b){g.editorDoc.execCommand("insertImage",false,"#jwysiwyg#");f=g.getElementByAttributeValue("img","src","#jwysiwyg#");if(f){f.src=c;for(e in b){if(b.hasOwnProperty(e)){f.setAttribute(e,b[e])}}}}else{g.editorDoc.execCommand("insertImage",false,c)}g.saveContent();a(g.editorDoc).trigger("editorRefresh.wysiwyg");return this})}})(jQuery);