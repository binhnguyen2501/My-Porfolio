// Validator là 1 constructor function
function Validator(options){
    let formElement = document.querySelector(options.form);
    let selectorRules = {};

    if(formElement){
        // xử lí event (blur, input) cho tất cả các rule trong form khi ấn submit
        formElement.onsubmit = function(e){
            e.preventDefault();
            options.rules.forEach(function(rule){
                let inputElement = formElement.querySelector(rule.selector);
                const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                let errorMessage;

                    // lấy các rules của selector
                    let rules = selectorRules[rule.selector]
                    // chạy qua từng rules được lấy ra nếu rules nào có lỗi thì dừng luôn mà không xét đến rules sau
                    for(let i=0; i<rules.length; i++){
                        errorMessage = rules[i](inputElement.value);
                        if(errorMessage) break;
                    }
                    // thực hiện xử lí các thông báo khi có lỗi
                    if(errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElement.classList.add('invalid');
                    }
                    else{
                        errorElement.innerText = '';
                        inputElement.classList.remove('invalid');
                    }
            })
        }




        // lặp qua từng rule và xử lí event (blur , input) cho từng rule <=> từng thành phần input trong form
        options.rules.forEach(function(rule){
            // lưu lại tất cả các rules cho mỗi input (vì mỗi input có thể có nhiều rule đặt ra)
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.testInput)
            }
            else{
                selectorRules[rule.selector] = [rule.testInput]
            }

            let inputElement = formElement.querySelector(rule.selector);

            if(inputElement){
                const errorElement = inputElement.parentElement.querySelector(options.errorSelector);

                inputElement.onblur = function(){
                    let errorMessage;

                    // lấy các rules của selector
                    let rules = selectorRules[rule.selector]
                    // chạy qua từng rules được lấy ra nếu rules nào có lỗi thì dừng luôn mà không xét đến rules sau
                    for(let i=0; i<rules.length; i++){
                        errorMessage = rules[i](inputElement.value);
                        if(errorMessage) break;
                    }
                    // thực hiện xử lí các thông báo khi có lỗi
                    if(errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElement.classList.add('invalid');
                    }
                    else{
                        errorElement.innerText = '';
                        inputElement.classList.remove('invalid');
                    }
                }

                inputElement.oninput = function(){
                    errorElement.innerText = '';
                    inputElement.classList.remove('invalid');
                }
            }
        })
    }
}

Validator.isName = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            return value.trim() ? undefined : 'Please enter your name'
        }
    };
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Please enter your e-mail'
        }
    };
}

Validator.isBudget = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            return value ? undefined : 'Please select your budget'
        }
    };
}

Validator.isDetail = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            return value ? undefined : 'Please enter your project description'
        }
    };
}