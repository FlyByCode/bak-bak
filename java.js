// java.js
document.addEventListener('DOMContentLoaded', () => { 
    // Tüm HTML yüklendikten sonra (görseller hariç) 1 saniye bekle
    setTimeout(() => {
        // body elementinden "not-loaded" sınıfını kaldır ve CSS animasyonlarını başlat
        document.body.classList.remove("not-loaded");
    }, 1000); 
});
// java.js
document.addEventListener('DOMContentLoaded', () => { 
    // Tüm HTML yüklendikten sonra 1 saniye bekle ve çiçek animasyonlarını başlat
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000); 

});
