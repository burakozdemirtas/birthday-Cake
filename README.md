<div align="center">
<img src="https://github.com/burakozdemirtas/birthday-Cake/assets/33163650/e27bb24a-1da1-42a7-b778-8ac64cbfae7a" width="160" height="160">
  <img src="https://github.com/burakozdemirtas/Real-Estate-Project-With-React/assets/33163650/9d6196e2-2fe3-4eff-b9c7-2119b082e899" width="160" height="160">

</div>



<h1 align="center"> BIRTHDAY CAKE</h1>
<p align="justify">
Merhaba, kullanıcının yaşını girdiği bir arayüzle birlikte doğum günü pastası üzerinde dinamik mumlar oluşturur. Ayrıca, yüksek ses seviyesi algılandığında pastadaki mumları söndürme özelliği sunar, böylece interaktif bir deneyim sağlar. :)
</p>
<p align="justify">
Hello creates dynamic candles on a birthday cake with an interface where the user enters their age. It also offers the feature of extinguishing the candles on the cake when high sound levels are detected, thus providing an interactive experience. :)
</p>

*  [:fire: Geliştirici / Developer](#fire-geliştirici-developer)
*  [:hash: Kod Nasıl Çalışır?/How does the code work?](#hash-kod-nasıl-çalışır-how-does-the-code-work)
*  [:hash: Projeden Görseller/ Images from the Project](#hash-projeden-görseller-images-from-the-project)

# :fire: Geliştirici/ Developer
| Adı Soyadı / Name Surname| 
| :--- | 
| [Burak ÖZDEMİRTAŞ](https://github.com/burakozdemirtas) |

# :hash: Kod Nasıl Çalışır? How does the code work?

- HTML Yapısı: <br/>
Temel bir HTML yapısı kullanılmış.
Bir başlık, yaş bilgisini girebileceğimiz bir input ve bu yaşa göre mumları oluşturmak için bir buton yer alıyor.
Doğum günü pastasını temsil eden bir div içerisinde katmanlar ve mumlar bulunuyor.

- CSS (styles.css):<br/>
Genel olarak arka plan, konumlandırma, renk ve boyut gibi görsel özellikler bu CSS ile tanımlanmış.
Pastanın katmanları, plakası, sızıntıları ve mumları için stil tanımlamaları yapılmış.
Ayrıca, animasyonlar için @keyframes tanımlamaları mevcut.

- JavaScript (scripts.js):<br/>
createCandle fonksiyonu: Kullanıcının girdiği yaş bilgisine göre mumları oluşturur. Her mumun oluşturulması için belirli bir gecikme eklenmiş.
blowOutFlames fonksiyonu: Ses analizi ile belirlenen bir eşiğin üzerinde ses algılandığında alevi söndürülecek mum sayısını belirler.
navigator.mediaDevices.getUserMedia: Kullanıcının mikrofonunu kullanarak ses analizi yapılabilmesi için izin alınır. Yüksek ses seviyesi algılandığında belirli mumların alevi söndürülür.

---

- HTML Structure: <br/>
A basic HTML structure is used.
There is a title, an input where we can enter age information, and a button to create candles according to this age.
There are layers and candles in a div that represents the birthday cake.

- CSS (styles.css):<br/>
In general, visual features such as background, positioning, color and size are defined with this CSS.
Style definitions have been made for the cake's layers, plate, oozes and candles.
Additionally, @keyframes definitions are available for animations.

- JavaScript (scripts.js):<br/>
createCandle function: Creates candles according to the age information entered by the user. A certain delay has been added for the creation of each candle.
blowOutFlames function: Determines the number of candles whose flame will be extinguished when sound is detected above a threshold determined by sound analysis.
navigator.mediaDevices.getUserMedia: Permission is obtained to perform voice analysis using the user's microphone. The flame of certain candles is extinguished when high sound levels are detected.


# :hash: Projeden Görseller/ Images from the Project
![screencapture-127-0-0-1-5500-index-html-2023-12-27-16_21_59](https://github.com/burakozdemirtas/birthday-Cake/assets/33163650/be524213-ef8e-48b5-8105-8ae7efb48244)
<br/>
![screencapture-127-0-0-1-5500-index-html-2023-12-27-16_22_55](https://github.com/burakozdemirtas/birthday-Cake/assets/33163650/e88ecb1a-823d-47f2-b51a-079cb8f20396)
<br/>
![screencapture-127-0-0-1-5500-index-html-2023-12-27-16_23_11](https://github.com/burakozdemirtas/birthday-Cake/assets/33163650/9746fd93-07d7-43cb-b404-6b5fd92d5c00)
<br/>

