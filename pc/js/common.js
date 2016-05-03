
$(function(){

    //懒加载
    if(($.lazyload||$.fn.lazyload) != null){
        $('img').lazyload({
            placeholder:'img/TB1fkh2IpXXXXcdXFXXXXXXXXXX_!!0-item_pic.jpg_430x430q90.jpg',
            threshold: 100,
            effect: "fadeIn",
            data_attribute  : "src"

        });
    }

    // 验证消息
    if (($.validator||$.fn.validator)!= null) {
        var messages = {
            "message.success": "操作成功",
            "message.error": "操作错误",
            "dialog.ok": "确&nbsp;&nbsp;定",
            "dialog.cancel": "取&nbsp;&nbsp;消",
            "dialog.deleteConfirm": "您确定要删除吗？",
            "dialog.clearConfirm": "您确定要清空吗？",
            "validate.required": "必填",
            "validate.email": "E-mail格式错误",
            "validate.url": "网址格式错误",
            "validate.date": "日期格式错误",
            "validate.dateISO": "日期格式错误",
            "validate.pointcard": "信用卡格式错误",
            "validate.number": "只允许输入数字",
            "validate.digits": "只允许输入零或正整数",
            "validate.minlength": "长度不允许小于{0}",
            "validate.maxlength": "长度不允许大于{0}",
            "validate.rangelength": "长度必须在{0}-{1}之间",
            "validate.min": "不允许小于{0}",
            "validate.max": "不允许大于{0}",
            "validate.range": "必须在{0}-{1}之间",
            "validate.accept": "输入后缀错误",
            "validate.equalTo": "两次输入不一致",
            "validate.remote": "输入错误",
            "validate.integer": "只允许输入整数",
            "validate.positive": "只允许输入正数",
            "validate.negative": "只允许输入负数",
            "validate.decimal": "数值超出了允许范围",
            "validate.pattern": "格式错误",
            "validate.extension": "文件格式错误"
        };


        function message(code) {
            if (code != null) {
                var content = messages[code] != null ? messages[code] : code;
                if (arguments.length == 1) {
                    return content;
                } else {
                    if ($.isArray(arguments[1])) {
                        $.each(arguments[1], function(i, n) {
                            content = content.replace(new RegExp("\\{" + i + "\\}", "g"), n);
                        });
                        return content;
                    } else {
                        $.each(Array.prototype.slice.apply(arguments).slice(1), function(i, n) {
                            content = content.replace(new RegExp("\\{" + i + "\\}", "g"), n);
                        });
                        return content;
                    }
                }
            }
        }


        $.extend($.validator.messages, {
            required: message("validate.required"),
            email: message("validate.email"),
            url: message("validate.url"),
            date: message("validate.date"),
            dateISO: message("validate.dateISO"),
            pointcard: message("validate.pointcard"),
            number: message("validate.number"),
            digits: message("validate.digits"),
            minlength: $.validator.format(message("validate.minlength")),
            maxlength: $.validator.format(message("validate.maxlength")),
            rangelength: $.validator.format(message("validate.rangelength")),
            min: $.validator.format(message("validate.min")),
            max: $.validator.format(message("validate.max")),
            range: $.validator.format(message("validate.range")),
            accept: message("validate.accept"),
            equalTo: message("validate.equalTo"),
            remote: message("validate.remote"),
            integer: message("validate.integer"),
            positive: message("validate.positive"),
            negative: message("validate.negative"),
            decimal: message("validate.decimal"),
            pattern: message("validate.pattern"),
            extension: message("validate.extension")
        });

        $.validator.setDefaults({
            ignore: ".ignore",
            errorClass:"error help-inline",
            validClass:"success",
            errorElement:'span',
            success:function(label){
            },
            highlight:function(element,errorClass,validClass){
                $(element).addClass(errorClass).removeClass(validClass).next('span').removeClass('icon icon-ok-sign success');
            },
            unhighlight:function(element,errorClass,validClass){
                $(element).removeClass(errorClass).addClass(validClass).next('span').addClass('icon icon-ok-sign success').show();

            }
        });


        window.validateRules = {
            username: {
                required: true,
                minlength: 2,
                maxlength: 10,
                userName:true
            },
            password:{
                required: true,
                minlength: 2,
                maxlength: 16
            },
            "confirmPassword": {
                required: true,
                equalTo: "#password"
            },
            email:{
                email:true,
                required: true
            },
            phone:{
                required: true,
                phone:true
            }
        };

        $('#commonForm').validate({
            rules: validateRules
        });



        $.validator.addMethod("userName", function(value, element) {
            return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);
        }, "用户名只能包括中文字、英文字母、数字和下划线");

        $.validator.addMethod("phone", function(value, element) {
            return this.optional(element) || /^1[3|4|5|8][0-9]\d{8}$/.test(value);
        }, "请输入正确的手机号");

        jQuery.validator.addClassRules({
            notNull: {
                required: true
            },
            init: {
                required: true,
                digits: true,
                minlength: 5,
                maxlength: 5
            },
            number:{
                required: true,
                number:true
            }
        });



    }

    //时间选择
    if($.fn.datetimepicker != null){
        $('.form_datetime').datetimepicker({
            format:"yyyy-mm-dd hh:ii ",
            todayBtn:  1,
            autoclose: 1,
            minuteStep: 5,
            todayHighlight:true
        });
    }

    //图片预览
    if($.fn.fancybox != null){
        $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
    }

    // 返回顶部
    (function(){
        var goTop = $('<div id="goTop"> <span class="icon icon-chevron-up"></span> </div>');
        goTop.appendTo($("body"));

        $(window).scroll(function(ev) {
            if($(window).scrollTop() > 100) {
                goTop.fadeIn();
                $('.nav').addClass('fixedNav');
            } else {
                goTop.fadeOut();
                $('.nav').removeClass('fixedNav');
            }
        });

        goTop.click(function() {
            $("body, html").stop().animate({scrollTop: 0});
        });
    })();

});
