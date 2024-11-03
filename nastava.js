export class Nastava{
    constructor(){
        this.mainContainer = null;
    }
    crtajStranicu(host){

            this.crtajNavbar(document.body);
            this.crtajHeroSekciju(document.body);
            this.crtajAboutSekciju(document.body);
            this.crtajMenuSekciju(document.body);
            this.crtajUslugeSekciju(document.body);
            this.crtajContactSekciju(document.body);
            this.crtajFooter(document.body);

    }
    crtajNavbar(host){
        let headerDiv =  document.createElement("header");
        headerDiv.classList.add("headerDiv");
        host.appendChild(headerDiv);

        let navbar = document.createElement('nav');
        navbar.classList.add("navbar", "section-content");
        headerDiv.appendChild(navbar);

        let navLogo = document.createElement('a');//hyperlink
        navLogo.classList.add("navLogo", "logoText");
        navLogo.innerHTML = `<h2>📖Privatna Nastava</h2>`;
        navLogo.href = "#hero";
        navbar.appendChild(navLogo);

        let nizNAVBAR = ["Ko smo mi?", "Naši nastavnici", "Usluge", "Kontakt"];
        let nizNAVBARlinkova = ["#about","#nasinastavnici", "#usluge", "#kontakt"];

        let navMenu = document.createElement('ul');
        navMenu.classList.add('nav-menu');
        navbar.appendChild(navMenu);

        // dugme za navbar za male ekrane
        let closeBtn = document.createElement("button");
        closeBtn.classList.add("fas", "fa-times", "menu-close");
        closeBtn.id = "menu-close-button";
        navMenu.appendChild(closeBtn);

        let listItem
        nizNAVBAR.forEach((el, indeks)=>{
            listItem = document.createElement('li');
            let textItem = document.createElement('a');
            textItem.innerHTML = el;
            textItem.href = nizNAVBARlinkova[indeks];
            textItem.classList.add('navLink');
            navMenu.appendChild(listItem);
            listItem.appendChild(textItem);  
          
        });    
        let openBtn = document.createElement("button");
        openBtn.classList.add("fas", "fa-bars", "menu-open");
        openBtn.id = "menu-open-button";
        navbar.appendChild(openBtn);

        //--mehanizam otvaranje/zatvaranje--

        const navLinks = document.querySelectorAll(".nav-menu .navLink");
        const menuOpenButton = document.querySelector("#menu-open-button");

        const menuCloseButton = document.querySelector("#menu-close-button");

        menuOpenButton.addEventListener("click", () => {
            
            document.body.classList.toggle("show-mobile-menu")
        });

        navLinks.forEach(link=>{
            link.addEventListener("click", () => {
                menuOpenButton.click();
            });
        });

        menuCloseButton.addEventListener("click", () => menuOpenButton.click
        ());


    }
    crtajHeroSekciju(host){
        let mainDiv = document.createElement("main");
        mainDiv.classList.add("mainDiv");
        mainDiv.id = "hero";
        host.appendChild(mainDiv);

        let heroSection = document.createElement("section");
        heroSection.classList.add("hero-section");
        mainDiv.appendChild(heroSection);

        let sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");
        heroSection.appendChild(sectionContent);
        
        let heroDetails = document.createElement("div");
        heroDetails.classList.add("hero-details");
        sectionContent.appendChild(heroDetails);

        let naslov = document.createElement("h2");
        naslov.classList.add("title");
        naslov.innerHTML = "Učimo Zajedno";
        heroDetails.appendChild(naslov);

        let podnaslov = document.createElement("h3");
        podnaslov.classList.add("subtitle");
        podnaslov.innerHTML = "Svaki Problem Ima Rešenje!"
        heroDetails.appendChild(podnaslov);

        let opis = document.createElement("p");
        opis.classList.add("description");
        opis.innerHTML = `Muče vas matematika, informatika ili fizika? Ne brinite, mi smo tu da vam pomognemo! Pronađite privatnog predavača koji će vam objasniti sve što vam nije jasno i pomoći vam da poboljšate svoje znanje i ocene. Zakazivanje časova je brzo i lako – izaberite predmet i vreme koje vama odgovara.`;
        heroDetails.appendChild(opis);

        let divBTNhero = document.createElement("div");
        divBTNhero.classList.add("buttons");

        let nizBtnHeroClass = ["button zakazi-odmah", "button kontaktiraj-nas"];
        let nizBtnHero = ["Zakaži odmah", "Kontaktiraj nas"];
        let nizBtnHeroLinkovi = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"];
        
        nizBtnHeroClass.forEach((el, index)=>{
            let btnHero = document.createElement('a');
            btnHero.className = el;
            btnHero.innerHTML = nizBtnHero[index];

            btnHero.href = nizBtnHeroLinkovi[index];
            divBTNhero.appendChild(btnHero);
        });
        heroDetails.appendChild(divBTNhero);

        let imgWrapper = document.createElement("div");
        imgWrapper.className = "hero-image-wrapper";
        sectionContent.appendChild(imgWrapper);

        let heroIMG = document.createElement("img");
        heroIMG.classList.add("hero-image");
        heroIMG.src = "https://img.freepik.com/premium-photo/education-elements-illustration-with-education-day-back-school-poster-earth-globe-graduation-cap-pencil-book-white-background_551826-23999.jpg";        heroIMG.alt = "SlikaEdukacija";
        imgWrapper.appendChild(heroIMG);
     

    }
    crtajAboutSekciju(host){
        let aboutSekcija = document.createElement("section");
        aboutSekcija.classList.add("about-section");
        aboutSekcija.id = "about";
        host.appendChild(aboutSekcija);

        let sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");
        aboutSekcija.appendChild(sectionContent);

        let aboutImgWrapper = document.createElement("div");
        aboutImgWrapper.classList.add("about-image-wrapper");
        sectionContent.appendChild(aboutImgWrapper);

        let imgAbout = document.createElement('img');
        imgAbout.classList.add("about-image")
        imgAbout.src = "https://cdn.vectorstock.com/i/500p/62/93/seamless-pattern-with-doodle-questions-vector-39606293.jpg";
        imgAbout.alt = "Ko smo mi???"
        aboutImgWrapper.appendChild(imgAbout);

        let aboutDetails = document.createElement("div");
        aboutDetails.classList.add("about-details");
        sectionContent.appendChild(aboutDetails);

        let sectionTitle = document.createElement('h2');
        sectionTitle.classList.add("section-title");
        sectionTitle.innerHTML = "O nama";
        aboutDetails.appendChild(sectionTitle);

        let aboutText = document.createElement("p");
        aboutText.classList.add("text");
        aboutText.innerHTML = `Naša misija je da učenicima pružimo podršku i samopouzdanje 
                               koje su im potrebne za uspeh u školi. 
                               Bilo da vam je potrebna pomoć u matematici, informatici, fizici ili nekom drugom predmetu,
                               naši predavači su tu da vas vode kroz svaku lekciju, objašnjavajući gradivo na jednostavan i pristupačan način. 
                               Verujemo da svako može da postigne odlične rezultate uz pravu pomoć, 
                               a naš cilj je da vam olakšamo učenje i omogućimo da napredujete svojim tempom.`;
    
        aboutDetails.appendChild(aboutText);

        let socialLinks = document.createElement("div");
        socialLinks.classList.add("social-link-list");
        aboutDetails.appendChild(socialLinks);

        let nizSocKlasa = ["fa-facebook", "fa-instagram", "fa-x-twitter"];
        let nizLinkovaSoc = ["https://www.facebook.com/?locale=sr_RS", "https://www.instagram.com/", "https://x.com/"]
        let linkSoc;
        let socSlika;
        nizSocKlasa.forEach((el, indeks)=>{
            linkSoc = document.createElement("a");
            linkSoc.classList.add("social-link");
            linkSoc.href = nizLinkovaSoc[indeks];
            socialLinks.appendChild(linkSoc);

            socSlika = document.createElement("i");
            socSlika.classList.add("fa-brands", el);
            linkSoc.appendChild(socSlika);

        });


    }
    crtajMenuSekciju(host){
        let menuSection = document.createElement('section');
        menuSection.classList.add("menu-section");
        menuSection.id = "nasinastavnici";
        host.appendChild(menuSection);

        let naslovSekcije = document.createElement("h2");
        naslovSekcije.innerHTML = "Naši nastavnici";
        naslovSekcije.classList.add("section-title");
        menuSection.appendChild(naslovSekcije);

        let sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");
        menuSection.appendChild(sectionContent);

        let menuList = document.createElement("ul");
        menuList.classList.add("menu-list");
        sectionContent.appendChild(menuList);

    

        let NizNastavnika = ["https://images.generated.photos/u5SZMAr5IvktHd5qcAlDONNnyirTZinterWp1mQ7cGE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDc0MDkyLmpwZw.jpg",
                            "https://images.generated.photos/o7f5i7z8avuFPpbm0XvqObrbrRO7Stq9XifsZX9Eayw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/OTI5NDY2LmpwZw.jpg",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnIDMCDMHNDOrtA5BDnMXiz-UgF38SqY27sF7REm1NvmP-t-et23BKWuD_a-TuYUBsHOc",
                            "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-05.jpg",
                            "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-02.jpg",
                            "https://kottke.org/cdn-cgi/image/format=auto,fit=scale-down,width=1200,metadata=none/plus/misc/images/ai-faces-01.jpg"
                            ];
        let NizImenaNastavnika = ["Vladimir Kovačević", "Nikola Lukić", "Maja Krstić", "Tamara Đorđević", "Aleksandar Rakić", "Ivana Marković"];
        let NizOpisaNastavnika = ["Matematičar sa darom za objašnjavanje, koji svakom učeniku prilazi sa strpljenjem i osmehom.",
                                  "Profesor informatike koji kroz primere iz svakodnevnog života uči programiranju i razvoju logičkog mišljenja.",
                                  "Matematičarka koja voli da razjasni svaki detalj, gradeći kod učenika samopouzdanje u rešavanju zadataka.",
                                  "Profesorka fizike koja kroz interaktivne pristupe pomaže učenicima da zavole nauku i razumeju svet oko sebe.",
                                  "Fizičar sa puno energije, poznat po tome što gradivo čini zanimljivim kroz zabavne eksperimente.",
                                  "Profesorka informatike sa velikim znanjem i strpljenjem, koja kod učenika razvija ljubav prema tehnologiji i inovacijama."
                                 ];
        let slikaNastavnika;
        let listItem;
        let imeNastavnika;
        let oNastavniku;
        NizNastavnika.forEach((el, index) => {
            slikaNastavnika = document.createElement("img");
            slikaNastavnika.className = "slika-nastavnika";
            imeNastavnika = document.createElement("h3");
            oNastavniku = document.createElement("p");

            imeNastavnika.innerHTML = NizImenaNastavnika[index];
            imeNastavnika.classList.add("name");

            oNastavniku.innerHTML = NizOpisaNastavnika[index];
            oNastavniku.className = "text";



            slikaNastavnika.src = el;
            slikaNastavnika.alt = "Slika nastavnika";
            slikaNastavnika.classList.add("name");

            listItem = document.createElement("li");
            listItem.classList.add("menu-item");


            listItem.appendChild(slikaNastavnika);
            listItem.appendChild(imeNastavnika);
            listItem.appendChild(oNastavniku);
            menuList.appendChild(listItem);

        });
    }
    crtajUslugeSekciju(host){
        let uslugeSekcija = document.createElement('section');
        uslugeSekcija.classList.add("usluge-sekcija");
        uslugeSekcija.id = "usluge";
        host.appendChild(uslugeSekcija);

        let naslov = document.createElement("h2");
        naslov.innerHTML = "Naše usluge";
        naslov.classList.add("section-title");
        uslugeSekcija.appendChild(naslov);

        let sectionContent = document.createElement('div');
        sectionContent.classList.add("section-content");
        uslugeSekcija.appendChild(sectionContent);

        let sliderContainer = document.createElement("div");
        sliderContainer.classList.add("slider-container", "swiper");
        sectionContent.appendChild(sliderContainer);

        let sliderWrapper = document.createElement("div");
        sliderWrapper.classList.add("slider-wrapper");
        sliderContainer.appendChild(sliderWrapper);

        let listaUsluga = document.createElement("ul");
        listaUsluga.classList.add("lista-usluga", "swiper-wrapper");
        sliderWrapper.appendChild(listaUsluga);

        let nizUsluga = ["https://honorarci.rs/wp-content/uploads/Aplikasi-Belajar-Matematika.png",
                         "https://www.psvprelog.hr/wp-content/uploads/2019/04/physics-chalkboard_cropped-553x400.jpg",
                         "https://www.itcode.co.uk/wp-content/uploads/2023/01/home-img-1-1024x1024.jpg",
                         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLNXS8xWWXidClgImux2StZ8gW1M5n63xz3HdhHEF4ntM8ouDuU9Fh4kJTriQhQ_mBT8E",
                         "https://images.inc.com/uploaded_files/image/1920x1080/getty_473627578_120283.jpg"
                        ];
        let nizNaslovaUsluga = ["Matematika", "Fizika", "Informatika", "Mentorstvo", "Brzo učenje"];
        let nizOpisaUsluga = ["Naučite kako da rešavate zadatke brzo i efikasno, od osnovnih do naprednih matematičkih pojmova.",
                              "Razumite zakone prirode i njihovu primenu kroz praktične primere i zanimljive vežbe.",
                              "Savladajte osnove programiranja, algoritama i logike, uz podršku za izgradnju vlastitih projekata.",
                              "Jedan-na-jedan mentorstvo sa stručnjacima koji će vas voditi ka boljim rezultatima i samopouzdanju.",
                              "Brza i efikasna pomoć za hitne situacije za bolje rezultate u kraćem vremenskom roku."
                             ];
        let usluga;
        let slika;
        let naslovUsluge;
        let opisUsluge;
        nizUsluga.forEach((el, indeks)=>{
            usluga = document.createElement("li");
            slika = document.createElement("img");
            naslovUsluge = document.createElement("h3");
            opisUsluge = document.createElement("p");

            usluga.classList.add("usluga", "swiper-slide");
            slika.classList.add("slika-usluge");
            naslovUsluge.classList.add("naslov-usluge");
            opisUsluge.classList.add("opis-usluge");

            slika.src = el;
            slika.alt = "Slika usluge";
            naslovUsluge.innerHTML = nizNaslovaUsluga[indeks];
            opisUsluge.innerHTML = nizOpisaUsluga[indeks];

            
            
            usluga.appendChild(slika);
            usluga.appendChild(naslovUsluge);
            usluga.appendChild(opisUsluge);
            listaUsluga.appendChild(usluga);

        });

        // -- INICIJALIZACIJA SWAPERA --
        let swaperNizKlasa = ["swiper-pagination", "swiper-button-prev", "swiper-button-next"];
        let swiperDiv;
        swaperNizKlasa.forEach((el, i)=>{
            swiperDiv = document.createElement('div');
            if(i >= 1){
                swiperDiv.classList.add("swiper-slide-button", el);    
            }else{
                swiperDiv.classList.add(el);
            }
            sliderWrapper.appendChild(swiperDiv);
        });


        const swiper = new Swiper('.slider-wrapper', {
            loop: true,
            grabCursor: true,
            spaceBetween: 25,
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: true,
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // Responsive breakpoints
            breakpoints:{
               640:{
                slidersPerView: 1
               },
               1024:{
                slidersPerView: 2
               },
               1070:{
                slidersPerView: 3
               }
            }

          });
        //-------------------------------


        
    }
    crtajContactSekciju(host){
        let contactSekcija = document.createElement("section");
        contactSekcija.classList.add("contact-section");
        contactSekcija.id = "kontakt";
        host.appendChild(contactSekcija);

        let naslov = document.createElement("h2");
        naslov.classList.add("section-title");
        naslov.innerHTML = "Kontaktirajte nas!";
        contactSekcija.appendChild(naslov);

        let sectionContent = document.createElement("div");
        sectionContent.classList.add("section-content");
        contactSekcija.appendChild(sectionContent);

        let contactInfoLista = document.createElement("ul");
        contactInfoLista.classList.add("contact-info-list");
        sectionContent.appendChild(contactInfoLista);

        let contactInfo;
        let nizKlasaKontaktINFO = [["fa-solid","fa-location-crosshairs"],["fa-regular","fa-envelope"], ["fa-solid", "fa-phone"], ["fa-regular","fa-clock"], ["fa-solid","fa-globe"]];
        let nizSadrzajaINFO = ["123 Neka ulica", [`privatnamatematika@gmail.com<br>privatnafizika@gmail.com<br>privatnainformatika@gmail.com`],"+381-64-xxxxxxx","Ponedeljak - Petak: 08:00 - 20:00", "www.privatnanastava.rs"];
        let sadrzaj;
        let infoTekst;

        nizKlasaKontaktINFO.forEach((el, i)=>{
            contactInfo = document.createElement("li");
            contactInfo.classList.add("contact-info");
            
            
            sadrzaj = document.createElement("i");
            sadrzaj.className = el.join(" ");

            infoTekst = document.createElement("p");
            infoTekst.innerHTML = nizSadrzajaINFO[i];
            


            contactInfo.appendChild(sadrzaj);
            contactInfo.appendChild(infoTekst);
            contactInfoLista.appendChild(contactInfo);
        });
        
        let kontaktForma = document.createElement("form");
        kontaktForma.action = "#";
        kontaktForma.classList.add("contact-form");
        sectionContent.appendChild(kontaktForma);
        
        let inputPolje;
        let nizInputa = ['text', 'email'];
        let nizPlaceholdera = ['Vaše ime', 'Vaš mejl'];
        nizInputa.forEach((el, i)=>{
            inputPolje = document.createElement("input");
            inputPolje.classList.add("form-input");
            inputPolje.type = el;
            inputPolje.required = true;
            inputPolje.placeholder = nizPlaceholdera[i];
            kontaktForma.appendChild(inputPolje);
        });
        
        let textArea = document.createElement("textarea");
        textArea.classList.add("form-input");
        textArea.placeholder = "Vaša poruka";
        textArea.required = true;
        kontaktForma.appendChild(textArea);

        let btnPosalji = document.createElement("button");
        btnPosalji.classList.add("submit-button");
        btnPosalji.innerHTML = 'Pošalji';
        kontaktForma.appendChild(btnPosalji);


    }
    crtajFooter(host){
        let footerSekcija = document.createElement('footer');
        footerSekcija.classList.add("footer-section");
        host.appendChild(footerSekcija);
        let divFooter = document.createElement("div");
        divFooter.classList.add("section-content");
        footerSekcija.appendChild(divFooter);
        let copyrigntText = document.createElement("p");
        copyrigntText.classList.add("copyright-text");
        copyrigntText.innerHTML = "© 2024 Privatna Nastava";
        divFooter.appendChild(copyrigntText);

        let socialLinks = document.createElement("div");
        socialLinks.classList.add("social-link-list");
        divFooter.appendChild(socialLinks);

        let nizSocKlasa = ["fa-facebook", "fa-instagram", "fa-x-twitter"];
        let nizLinkovaSoc = ["https://www.facebook.com/?locale=sr_RS", "https://www.instagram.com/", "https://x.com/"];
        let linkSoc;
        let socSlika;
        nizSocKlasa.forEach((el, indeks)=>{
            linkSoc = document.createElement("a");
            linkSoc.classList.add("social-link");
            linkSoc.href = nizLinkovaSoc[indeks];
            socialLinks.appendChild(linkSoc);

            socSlika = document.createElement("i");
            socSlika.classList.add("fa-brands", el);
            linkSoc.appendChild(socSlika);  
        });
        
        let policyTekst = document.createElement("p");
        policyTekst.classList.add("policy-text");

        let linkPolicy = document.createElement('a');
        linkPolicy.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        linkPolicy.classList.add("policy-link");
        linkPolicy.innerHTML = "Privacy policy";
        policyTekst.appendChild(linkPolicy);     
        divFooter.appendChild(policyTekst);

        let spanSeparator = document.createElement("span");
        spanSeparator.innerHTML = "•";
        spanSeparator.classList.add("separator");
        policyTekst.appendChild(spanSeparator);

        linkPolicy = document.createElement('a');
        linkPolicy.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        linkPolicy.classList.add("policy-link");
        linkPolicy.innerHTML = "Refund policy";
        policyTekst.appendChild(linkPolicy);     


    }
}