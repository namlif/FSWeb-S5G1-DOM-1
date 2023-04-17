const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */


const anchors = document.querySelectorAll('.container header a');

anchors.forEach(anchor => {
  anchor.classList.add('italic');
});

anchors[0].textContent = 'Servisler';
anchors[1].textContent = 'Ürünler';
anchors[2].textContent = 'Vizyon';
anchors[3].textContent = 'Özellikler';
anchors[4].textContent = 'Hakkımızda';
anchors[5].textContent = 'İletişim';


const logoImg = document.getElementById('logo-img');
logoImg.setAttribute("src", "http://localhost:9000/img/logo.png")

const baslik = document.querySelector("h1");

baslik.textContent = "Bu DOM Mükemmel"

const buton = document.querySelector(".cta button");
buton.textContent = "Başlayın"

const ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", "http://localhost:9000/img/cta.png");

const midImg = document.getElementById("middle-img");
midImg.setAttribute("src", "http://localhost:9000/img/accent.png");

const textContentBaslik = document.querySelectorAll(".text-content h4" )
textContentBaslik[0].textContent = "Özellikler";
textContentBaslik[1].textContent = "Hakkında";
textContentBaslik[2].textContent = "Servisler";
textContentBaslik[3].textContent = "Ürünler";
textContentBaslik[4].textContent = "Vizyon";

const textContentPara = document.querySelectorAll(".text-content p" )
textContentPara[0].textContent = "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
textContentPara[1].textContent = "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
textContentPara[2].textContent = "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
textContentPara[3].textContent = "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
textContentPara[4].textContent = "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in nterdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

const contactBaslik = document.querySelector(".contact h4")
contactBaslik.textContent = "İletişim";

const contantPara = document.querySelectorAll(".contact p")
contantPara[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye"
contantPara[1].textContent = "+90 (123) 456-7899"
contantPara[2].textContent = "satis@birsirketsitesi.com.tr"

const footerAnchor = document.querySelector("footer a")
footerAnchor.classList.add("bold")
footerAnchor.textContent = "Copyright Bir Şirket Sitesi 2022"

