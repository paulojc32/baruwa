var controls={bold:{visible:true},italic:{visible:true},underline:{visible:true},createLink:{visible:true},insertImage:{visible:true},h3:{visible:true},paste:{visible:true},increaseFontSize:{visible:true},decreaseFontSize:{visible:true},undo:{visible:true},redo:{visible:true},};function seteditor(){if($("#id_signature_type").val()==1){$("#id_signature_content").wysiwyg("destroy")}else{$("#id_signature_content").wysiwyg({rmUnusedControls:true,controls:controls,initialContent:"",})}}$(document).ready(function(){$.wysiwyg.fileManager.setAjaxHandler(fm_url);var a={strikeThrough:{visible:false},subscript:{visible:false},superscript:{visible:false},h1:{visible:false},h2:{visible:false},};$("#id_signature_type").change(seteditor);if($("#id_signature_type").val()==2){$("#id_signature_content").wysiwyg({rmUnusedControls:true,controls:controls,initialContent:"",})}});