/**
 * Created by liuweichao-pc on 2016/2/24.
 */
/****************************���Զ���****************************/
define([], function () {
    var strategies = {
        isNonEmpty:function(value,errorMsg){
            if(value === ""){
                return errorMsg;
            }
        },
        minLength:function(value,length,errorMsg){
            if(value.length<length){
                return errorMsg;
            }
        },
        isMobile:function(value,errorMsg){
            if(!/(^1[3|5|8][0-9]{9}$)/.test(value)){
                return errorMsg;
            }
        },
        isSelect:function(value,errorMsg){
            if(value <= -1){
                return errorMsg;
            }
        },
        isNumber:function(value,errorMsg){
            value = parseFloat(value);
            if(!/^\d+$/g.test(value)){
                return errorMsg;
            }
        }
    };
    /****************************Validator****************************/
    var Validator = function(){
        this.cache = []
    };

    Validator.prototype.add = function(dom,rules) {
        var self = this;
        for(var i = 0,rule;rule = rules[i++];){
            (function(rule){
                var strategyAry = rule.strategy.split(":");
                var errorMsg = rule.errorMsg;
                self.cache.push(function(){
                    var strategy = strategyAry.shift();
                    strategyAry.unshift(dom.value);
                    strategyAry.push(errorMsg);
                    return strategies[strategy].apply(dom,strategyAry);
                });
            })(rule)
        }
    };

    Validator.prototype.start = function() {
        for(var i = 0,validatorFunc;validatorFunc = this.cache[i++];){
            var errorMsg = validatorFunc();
            if(errorMsg){
                return errorMsg;
            }
        }
    };

    return Validator;

});