// 암호화된 문자열과 암호화 키를 입력받아 복호화된 문자열을 리턴
function decryptCaesarCipher(str, secret) {
    let decrypt = '';
    // ascii : a = 97, z= 122
    for(let i = 0; i < str.length; ++i) {
        // 공백일 경우 그대로 둔다.
        if(str[i] === ' ') {
            decrypt += ' ';
            continue;
        }
        // 아스키 코드값으로 복호화를 한다.
        secret %= 26;
        let ascii = str.charCodeAt(i);
        if(ascii - secret < 97) {
            ascii = ascii + 26 - secret;
        }
        else {
            ascii -= secret;
        }

        // 아스키 코드값을 문자열로 변환한다.
        decrypt += String.fromCharCode(ascii);
    }

    return decrypt;
}

let output = decryptCaesarCipher('khoor', 3);
console.log(output); // --> hello

output = decryptCaesarCipher('zruog', 3);
console.log(output); // --> world