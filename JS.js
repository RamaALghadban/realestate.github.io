


function validation1(sum) {
    
    prompt('your total fee :' + sum);
    
}



function ShoppingCart() {
    const radios = document.getElementsByName('radio');
    let anyChecked = false;
    let sum = 0;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            anyChecked = true;
            const ShoppingCartStatus = radios[i].value;

            switch (ShoppingCartStatus) {
                case "150000":
                    sum += 150000;
                    break;
                case "175000":
                    sum += 175000;
                    break;
                case "145000":
                    sum += 145000;
                    break;
                case "329000":
                    sum += 329000;
                    break;
                case "90000":
                    sum += 90000;
                    break;
                case "220000":
                    sum += 220000;
                    break;
                case "170000":
                    sum += 170000;
                    break;
                case "3500000":
                    sum += 3500000;
                    break;
                case "35000000":
                    sum += 35000000;
                    break;
                case "830000":
                    sum += 830000;
                    break;
                default:
                    break;
            }
        }
    }

    if (anyChecked) {
        validation1(sum);
    } else {
        prompt('Error: You should choose a property to submit');

        
    }
}

function ArabicInput() {
    var name_textbox = document.getElementById('name_textbox').value;
    var arabicRegex = /^[\u0600-\u06FF\s]+$/;

    if (!arabicRegex.test(name_textbox)) {
        alert('Please enter Arabic text only.');
        document.getElementById('name_textbox').focus();
        return false;
    }
    return true;
}

function validatePhoneNumber() {
    const phoneNumber = document.getElementById('phone_number').value;
    
    if (phoneNumber.startsWith('09') && phoneNumber.length === 10) {
        return true;
    } else {
        alert('Phone number must start with 09 and be 10 digits long');
        document.getElementById('phone_number').focus();
        return false;
    }
}

function choose(frm){
    let anyChecked1 = false;
    let sum = 0;
    const validation = validate();

    if(!validation){
        return false;
    } else {
        const radios = document.getElementsByName('radio');

        for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                anyChecked1 = true;
                const ShoppingCartStatus = radios[i].value;

                switch (ShoppingCartStatus) {
                    case "150000":
                        sum += "أورورا، مارينا بروميناد، دبي مارينا، دبي - 1,431 قدم مربع - 150 000 AED";
                        break;
                    case "175000":
                        sum += "أورورا، مارينا بروميناد، دبي مارينا، دبي - 1,405 قدم مربع - 175,000 AED";
                        break;
                    case "145000":
                        sum += "أورورا، مارينا بروميناد، دبي مارينا، دبي - 1,431 قدم مربع - 145,000 AED";
                        break;
                    case "329000":
                        sum += "ترايدنت مارينا سكيب أفانت تاور، ترايدنت مارينا سكيب، دبي مارينا، دبي - 2,168 قدم مربع - 329,000 AED";
                        break;
                    case "90000":
                        sum += "ذا تورش، دبي مارينا، دبي -  886 قدم مربع - 90,000 AED";
                        break;
                    case "220000":
                        sum += "ديلفين، مارينا بروميناد، دبي مارينا، دبي - 1,366 قدم مربع- 220,000 AED";
                        break;
                    case "170000":
                        sum += "ترايدنت جراند ريزيدنس، دبي مارينا، دبي - 1,603 قدم مربع - 170,000 AED";
                        break;
                    case "3500000":
                        sum += "ذا سيدارز، ياس ايكرز، جزيرة ياس، أبوظبي - 2,420 قدم مربع - 3,500,000 AED";
                        break;
                    case "35000000":
                        sum += "وست ياس، جزيرة ياس، أبوظبي -  11,722 قدم مربع - 35,000,000 AED";
                        break;
                    case "830000":
                        sum += "داماك غالية، الضاحية 18، قرية جميرا الدائرية، دبي - 674 قدم مربع - 830,000 AED";
                        break;
                    default:
                        break;
                }
            }
        }

        if (anyChecked1) {
            prompt("Thank you for choosing us .. you chose "+ sum + ' if you have error with your inputs press cancel and correct it ');
        } else {
            alert('Error: You chose nothing or there is an error with your inputs');
        }
        return false;
    }
}

function validate() {
    if (!ArabicInput()) {
        return false;
    }
    if (!validatePhoneNumber()) {
        return false;
    }
    if (document.getElementById("form").NID.value.length !== 11) {
        alert("NID must be exactly 11 digits");
        document.getElementById("form").NID.focus();
        return false;
    }
    else{
        return true;
    }
}

function showImages_1() {
    var imageRow = document.getElementById('imageRow1');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}
       
function showImages_2() {
    var imageRow = document.getElementById('imageRow2');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_3() {
    var imageRow = document.getElementById('imageRow3');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_4() {
    var imageRow = document.getElementById('imageRow4');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_5() {
    var imageRow = document.getElementById('imageRow5');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_6() {
    var imageRow = document.getElementById('imageRow6');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_7() {
    var imageRow = document.getElementById('imageRow7');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_8() {
    var imageRow = document.getElementById('imageRow8');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_9() {
    var imageRow = document.getElementById('imageRow9');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

function showImages_10() {
    var imageRow = document.getElementById('imageRow10');
    if (imageRow.style.display === 'none') {
        imageRow.style.display = 'table-row';
    } else {
        imageRow.style.display = 'none';
    }
}

// captcha code

document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    const refreshButton = document.getElementById('refreshButton');
    const submitButton = document.getElementById('submitButton');
    const captchaInput = document.getElementById('captchaInput');

    let captchaCode = '';

    function generateCaptcha() {
        captchaCode = Math.random().toString(36).substring(2, 8);
        drawCaptcha(captchaCode);
    }

    function drawCaptcha(text) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = '40px Arial';
        ctx.fillStyle = '#000';
        ctx.fillText(text, 160, 60);  
    }
    
    

    refreshButton.addEventListener('click', generateCaptcha);

    submitButton.addEventListener('click', () => {
        if (captchaInput.value === captchaCode) {
            validation();
        } else {
            alert('Incorrect CAPTCHA, please try again.');
        }
    });

    generateCaptcha();
});






