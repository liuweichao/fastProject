define(['jquery','jqUi', 'css!plugin/modal/modal.css'], function($,jqUi) {
    function Widget(){
        this.boundingBox = null;    //属性：最外层容器
    }
    Widget.prototype = {
        on:function(type,handler){
            if(typeof this.handlers[type] === 'undefined'){
                this.handlers[type] = [];
            }
            this.handlers[type].push(handler);
            return this;
        },
        fire:function(type,data){
            if(this.handlers[type] instanceof Array){
                var handlers = this.handlers[type];
                for(var i = 0,len = handlers.length;i<len;i++){
                    handlers[i](data);
                }
            }
        },
        renderUI:function(){},//接口：添加dom节点
        bindUI:function(){}, //接口：监听事件
        syncUI:function(){}, //接口：初始化组件属性
        destructor:function(){},//接口：销毁前的处理函数
        render:function(container){ //方法：渲染组件
            this.renderUI();
            this.handlers={};
            this.bindUI();
            this.syncUI();
            $(container || document.body).append(this.boundingBox);
        },
        destroy:function(){//方法：销毁组件
            this.destructor();
            this.boundingBox.off();
            this.boundingBox.remove();
        }
    };



    function Window() {
        this.cfg={
            title:"提示",
            width:500,
            height:300,
            content:"",
            hasCloseBtn:false,
            handler4AlertBtn:null,
            handler4CloseBtn:null,
            handler4ConfirmBtn:null,
            handler4CancelBtn:null,
            skinClassName:null,
            text4AlterBtn:'确定',
            text4ConfirmBtn:"确定",
            text4CancelBtn:'取消',
            hasMask:true,
            isDraggable:true,
            dragHandle:null,
            text4PromptBtn:'确定',
            isPromptInputPassword:false,
            defaultValue4PromptInput:'',
            maxlength4PromptInput:10,
            handler4PromptBtn:null
        };
    }


    Window.prototype = $.extend({},new Widget(),{
        renderUI:function(){
            var footerContent = "";

            switch (this.cfg.winType){
                case 'alert':
                    footerContent = '<input type="button" class="window_alertBtn" value='+ this.cfg.text4AlterBtn +'>';
                    break;
                case 'confirm':
                    footerContent = '<input type="button" class="window_confirmBtn" value='+ this.cfg.text4ConfirmBtn +'>'+
                        '<input type="button" class="window_cancelBtn" value='+ this.cfg.text4CancelBtn +'>';
                    break;
                case 'prompt':
                    this.cfg.content += '<p class="window_promptInputWrapper"><input type="'+ (this.isPromptInputPassword ? "password" : "text") +'"  value="'+ this.cfg.defaultValue4PromptInput +'" maxlength="'+ this.cfg.maxlength4PromptInput +'" class="window_promptInput"/></p>'
                    footerContent = '<input type="button" class="window_promptBtn" value='+ this.cfg.text4PromptBtn +'>'+
                        '<input type="button" class="window_cancelBtn" value='+ this.cfg.text4CancelBtn +'>';
                    break;
            }

            this.boundingBox =$("<div class='window_boundingBox'>" +
                "<div class='window_body'>" +this.cfg.content+"</div>"+
              "</div>");
            if(this.cfg.winType !== 'common'){
                this.boundingBox.prepend("<div class='window_header'>" +this.cfg.title+"</div>");
                this.boundingBox.append("<div class='window_footer'>"+ footerContent +"</div>");
            }
            if(this.cfg.hasMask){
                this._mask = $('<div class="window_mask"></div>');
                this._mask.appendTo('body');
            }
            if(this.cfg.hasCloseBtn){
                this.boundingBox.append('<span class="window_closeBtn">X</span>');
            }
            this.boundingBox.appendTo(document.body);
            this._promptInput = this.boundingBox.find('.window_promptInput');
        },
        bindUI:function(){
            var that = this;
            this.boundingBox.delegate('.window_alertBtn','click',function(){
                that.fire('alert');
                that.destroy();
            }).delegate('.window_closeBtn','click',function(){
                that.fire('close');
                that.destroy();
            }).delegate('.window_confirmBtn','click',function(){
                that.fire('confirm');
                that.destroy();
            }).delegate('.window_cancelBtn','click',function(){
                that.fire('cancel');
                that.destroy();
            }).delegate('.window_promptBtn','click',function(){
                that.fire('prompt',that._promptInput.val());
                that.destroy();
            });
            if(this.cfg.handler4AlertBtn){
                this.on('alert',this.cfg.handler4AlertBtn);
            }
            if(this.cfg.handler4CloseBtn){
                this.on('close',this.cfg.handler4CloseBtn);
            }
            if(this.cfg.handler4ConfirmBtn){
                this.on('confirm',this.cfg.handler4ConfirmBtn);
            }
            if(this.cfg.handler4CancelBtn){
                this.on('cancel',this.cfg.handler4CancelBtn);
            }
            if(this.cfg.handler4PromptBtn){
                this.on('prompt',this.cfg.handler4PromptBtn);
            }
        },
        syncUI:function(){
            this.boundingBox.css({
              width:this.cfg.width,
              height:this.cfg.height,
              left:(this.cfg.x||($(window).width() -this.cfg.width)/2) +"px",
              top:(this.cfg.y||($(window).height() - this.cfg.height)/2)+"px"
            });
            if(this.cfg.skinClassName){
                this.boundingBox.addClass(this.cfg.skinClassName);
            }
            if(this.cfg.isDraggable){
                if(this.cfg.dragHandle){
                    this.boundingBox.draggable({handle:this.cfg.dragHandle});
                }else{
                    this.boundingBox.draggable();
                }
            }
        },
        destructor:function(){
            this._mask && this._mask.remove();
        },
        alert: function (cfg) {
            $.extend(this.cfg,cfg,{winType:'alert'});
            this.render();
            return this;
        },
        confirm: function (cfg) {
            $.extend(this.cfg,cfg,{winType:'confirm'});
            this.render();
            return this;
        },
        prompt: function (cfg) {
            $.extend(this.cfg,cfg,{winType:'prompt'});
            this.render();
            this._promptInput.focus();
            return this;
        },
        common:function(cfg){
            $.extend(this.cfg,cfg,{winType:'common'});
            this.render();
            return this;
        }
    });


    return Window
});