//variables
let birinci_eded=13;
let ikinci_eded=12;
let toplam_sonrasi=0;
let cixma_sonrasi=0;
let vurma_sonrasi=0;
let bolme_sonrasi=0;


// function for sum+
function sum(){
toplam_sonrasi=birinci_eded+ikinci_eded;
document.getElementById('netice').innerHTML="neticemiz: "+toplam_sonrasi;
}

// function for subtract-
function subtract(){
    cixma_sonrasi=birinci_eded-ikinci_eded;
    document.getElementById('netice').innerHTML="neticemiz:  "+cixma_sonrasi
}

// function for devide/
function devide(){
    bolme_sonrasi= birinci_eded/ikinci_eded;
    document.getElementById('netice').innerHTML="neticemiz: "+bolme_sonrasi
}

// function for multiple *
function multiple(){
    vurma_sonrasi=birinci_eded*ikinci_eded;
    document.
    getElementById('netice').innerHTML="neticemiz: "+vurma_sonrasi
}
function resetCalculator() {
    // Hesablama nəticələrini sıfırla
    toplam_sonrasi = 0;
    cixma_sonrasi = 0;
    vurma_sonrasi = 0;
    bolme_sonrasi = 0;
    