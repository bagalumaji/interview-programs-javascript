
function findSubStringsInStrin(str){
    let str1  = str[0];
    const words = str[1].split(',');
    let s1 = '';
    let s2='';
    for(let word of words){
        let w = word.length;
        if(str1.startsWith(word) && s1.length<w){ 
            s1 = word;
        }else if(str1.endsWith(word) && s2.length<w){
            s2 = word;
        }
    }
    return s1+","+s2;
}

const s =["baseball",'base,a,ball,ball'];
console.log(findSubStringsInStrin(s));

