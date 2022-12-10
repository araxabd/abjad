const input = document.getElementById("uin");
const output = document.getElementById("out");
const btn = document.getElementById("btn");



const changed = (e) => {
    let acc = 0;
    let curr = 0;
    let text = input.value;
    let txt = text.split("");
    txt.forEach(ch => {
        switch (ch) {
            case 'ا':
                curr = 1; 
                break;
            
            case 'آ':
                curr = 1; 
                break;

            case 'ب':
                curr = 2; 
                break;

            case 'ج':
                curr = 3; 
                break;

            case 'د':
                curr = 4; 
                break;
            
            case 'ه':
                curr = 5; 
                break;

            case 'و':
                curr = 6; 
                break;

            case 'ز':
                curr = 7; 
                break;

            case 'ح':
                curr = 8; 
                break;
            
            case 'ط':
                curr = 9; 
                break;

            case 'ی':
                curr = 10; 
                break;

            case 'ک':
                curr = 20; 
                break;

            case 'ل':
                curr = 30; 
                break;
            
            case 'م':
                curr = 40; 
                break;

            case 'ن':
                curr = 50; 
                break;

            case 'س':
                curr = 60; 
                break;

            case 'ع':
                curr = 70; 
                break;
            
            case 'ف':
                curr = 80; 
                break;

            case 'ص':
                curr = 90; 
                break;

            case 'ق':
                curr = 100; 
                break;

            case 'ر':
                curr = 200; 
                break;
            
            case 'ش':
                curr = 300; 
                break;

            case 'ت':
                curr = 400; 
                break;

            case 'ث':
                curr = 500; 
                break;

            case 'خ':
                curr = 600; 
                break;
            
            case 'ذ':
                curr = 700; 
                break;

            case 'ض':
                curr = 800; 
                break;

            case 'ظ':
                curr = 900; 
                break;

            case 'غ':
                curr = 1000; 
                break;
            
        
            default:
                curr = 0;
                break;
        }
        acc = acc + curr;
    });
    output.innerText = acc;
    console.log(acc);
}




input.onchange = (e) => {
    changed(e);
};

btn.onclick = (e) => {
    changed(e);
}