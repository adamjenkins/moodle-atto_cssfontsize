YUI.add("moodle-atto_cssfontsize-button",function(e,t){var n=[{value:1,name:"xx-small"},{value:2,name:"x-small"},{value:3,name:"small"},{value:4,name:"medium"},{value:5,name:"large"},{value:6,name:"x-large"},{value:7,name:"xx-large"}];e.namespace("M.atto_cssfontsize").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){var t=[];e.Array.each(n,function(e){t.push({text:'<span style="font-size:'+e.name+';">'+e.name+"</span>",callbackArgs:e.name,callback:this._changeStyle})}),this.addToolbarMenu({globalItemConfig:{callback:this._changeStyle},icon:"icon",iconComponent:"atto_cssfontsize",items:t})},_changeStyle:function(e,t){document.execCommand("insertHTML",!1,'<span style="font-size:'+t+'">'+document.getSelection()+"</span>")}})},"@VERSION@");
