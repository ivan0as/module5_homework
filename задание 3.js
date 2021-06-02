let Hi = "Hello";

function reverse(Hi){
    return Hi.split("").reverse().join("");
}

Hi = reverse(Hi);

console.log(Hi);