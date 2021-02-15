// Validator là 1 constructor function
function Validator(options){
    
    function validate(inputElement,rule){
        const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        let errorMessage;
        // lấy các rules của selector
        let rules = selectorRules[rule.selector]
        // chạy qua từng rules được lấy ra nếu rules nào có lỗi thì dừng luôn mà không xét đến rules sau (rule[i]() là một function với inputElement.value là tham số value truyền vào)
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
        // trả về errorMessage dưới dạng boolean để biết người dùng đã nhập hết info chưa
        return !errorMessage;
    }

    let formElement = document.querySelector(options.form);
    let selectorRules = {};

    if(formElement){
        // xử lí event (blur, input) cho tất cả các rule trong form khi ấn nút submit
        formElement.onsubmit = function(e){
            e.preventDefault();

            let isFormValid = true;

            options.rules.forEach(function(rule){
                let inputElement = formElement.querySelector(rule.selector);
                validate(inputElement,rule);

                // xử lí biến cờ để biết người dùng đã nhập full info hay chưa
                let isValid = validate(inputElement,rule);
                if(!isValid){
                    isFormValid = false;
                }
            });
            
            if(isFormValid){
                // trường hợp lấy data info người dùng bằng JS
                if(typeof options.onSubmit === 'function'){
                    let formInputInfo = formElement.querySelectorAll('[name]:not([disabled])')
                    let formAllValue = Array.from(formInputInfo).reduce(function(values,input){
                        return (values[input.name] = input.value) && values;
                    },{});
                    options.onSubmit(formAllValue);
                }
                // trường hợp lấy data người dùng bằng hàm submit và trình duyệt auto lấy sẵn mà k sử dụng JS
                else{
                    formElement.submit();
                }
            }
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
                    validate(inputElement,rule);
                }
                inputElement.oninput = function(){
                    errorElement.innerText = '';
                    inputElement.classList.remove('invalid');
                }
            }
        })
    }
}
// các rule đặt ra cho từng nội dung trong form
Validator.isName = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            return value.trim() ? undefined : 'Please enter your name'
        }
    };
}

Validator.isEmailRequired = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            return value.trim() ? undefined : 'Please enter your e-mail'
        }
    };
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        testInput: function(value){
            let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value) ? undefined : 'Please enter correct your e-mail '
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
            return value.trim() ? undefined : 'Please enter your project description'
        }
    };
}