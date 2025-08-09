export function countCharacters(str) {
    const map = new Map();
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)!==' ') {
            map.set(str.charAt(i), (map.get(str.charAt(i)) | 0) + 1);
        }
    }
    console.log(map);
    return map;
}