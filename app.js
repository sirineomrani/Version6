const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
//section1
var SN1 = ["Hi, I'm <span>Sirine NSIR.</span>", "Computer Vision and Embedded AI engineer", "Hi, I'm Sirine NSIR Computer Vision and Embedded AI engineer I'm interested in Artificial Intelligence and Web develpement .<br /> I consider myself as punctual, perfectionist, and very enthusiastic person.<br /> Last but not least I am as effective in a group as by my own and my interpersonal skills are my superpower .", "img/SN.jpeg"]
var SO1 = ["Hi, I'm <span>OMRANI Sirine.</span>", "An Electronic Engineering Student.", "I'm specialized in Microelectronics and Embedded Systems. I really like the field of artificial intelligence and everything related to computer vision. I also want to learn more about web development to be able to manage the different given projects.", "img/sirine.jpg"]
var O1 = ["Hi, I'm <span>Oumaima ZRIBI.</span>", "Data scientist.", " I'm a data scientist. I was hocked by the artificial intelligence, its different field and its possible realisations that's why I chose it as a career.", "img/me.png"]
var M1=["Hi, I'm <span>Mayssen GHARBI.</span>","An Otaku and Mangaka Girl.","I'm an Otaku Girl, I love to watch anime more than anything else. Actually, i love drawing manga too 😁✏️. And guess what! Lately, i started doing some DIY and drawing in clothes..😎<br/> Stop waisting time and take a look at some of my work 👉","img/hero.png"];
var section1 =[SN1, SO1, O1, M1];
var i=1;

document.getElementById("section1_1").innerHTML= section1[i][0];
document.getElementById("section1_2").innerHTML= section1[i][1];
document.getElementById("section1_3").innerHTML= section1[i][2];
document.querySelector('img').src= section1[i][3];

//section2
var SN2 =["This is Sirine Nsir, from Tunisia. I am 25-years-old. I am an Engineering Student at the High Institute of Computer Science and Mathematics of Monastir (ISMM), in Tunisia. I obtained my baccalaureate diploma in natural science in 2016 and a B.A. in Electronicand informatics in 2019. I have recently taken a decision to pursue my studies in the area of Electronic- Microelectronics engineering. My greatest strength is my ability to work well in a team environment. I really love working as part of a wider multi-cultural team. I am someone who sees into the big picture : I dream of initiating my own project/product from the scratch until it becomes something common not only in my country but in the entire world. I am an innovative and creative person. I have many projects ideas to do for this year and I am doing my best and trying to snatch every single opportunity to take part in renowned international challenges… I am interested in Embedded Systems and Web developement and I would like to become a certified expert in this area.",
"Smart Pharmacy Box","KeyWords <br /> #Pic 18F4550 <br /> #GSM 800 L <br /> #PIC C Compiler <br /> #LCD <br /> #Motion sensor <br /> #PCB Design <br />#ISIS ","Raspberry-Pi face Mask Detection",
"KeyWords <br /> #Tensorflow #Keras,<br /> #OpenCV <br /> #Python <br /> #RaspberryPi <br /> #Machine Learning <br /> #Real Time ","Arceau parking","KeyWords <br /> #ISIS <br /> #Android_app <br /> #Arduino <br /> #sensors <br /> #PCB Design <br /> #ISIS ",
"C/C++","85%","Python ","90%","ISIS ","90% ","LABVIEW","50%","My skills ","TUNISIA : 2019-2022","Higher institute of Computer science and Mathematics of Monastir Monastir | Tunisia"," Electronic & MICROELECTRONIC ENGINEERING ","TUNISIA : 2016-2019"," Higher institute of Computer science and Mathematics of Monastir Monastir | Tunisia","Fundamental licence in Information , Communication Sciences and Technologies Electronics ","TUNISIA : 2012-2016","Abdel Aziz El Behi ","Bachelor's degree in Experimental Sciences ","My Academic timeline"];
var SO2 =["I'm a microelectrnics engineering student. During this period, I'm occupied by my end-of-study internship in DB CONSULTING group.<br/>I consider this as an opportunity to master new technologies and  practise my knowledge in the IA and Computer Vision field .",
"13+", "Projects <br /> Completed", "0", "Years of <br /> experience", "In the near future", "Happy <br /> Clients",
"Raspberry","80%","Solidworks","65%","Python65%","75%","Artificial intelligence","90%","My Skills","2019-PRESENT","Microelectronics and Embedded System engineering student<span> - ISIMM</span>","Higher Institute of Computer Science and Mathematics of Monastir",
"2016-2019","Basic license in Science and technology of information and telecommunications<span> (STIC) - ISIMM</span>","Higher Institute of Computer Science and Mathematics of Monastir","2016","Bachelor degree<span> Mathematics</span></h5>","High school Jemmel 1","My Academic timeline"];
var O2 =["I'm a data science engineering student. At the moment, I'm occupied by fulfilling my internship in DB consulting group. For me it's more than just an internship. It's actually an occasion to learn and master new technologies and the most important, it's an opportunity to expand my abilities.",
"20+","Projects <br /> Completed","0","Years of <br /> experience","In the near future","Happy <br /> Clients",
"Machine Learning","80%","Deep Learning","80%","Analatycal statistics","70%","Business Intelligence","80%", "My Skills","2019 - present","Data science engineering student<span> - ENET'COM</span>","Embedded systems and telecommunication institute of Sfax","2017 - 2019","Preparatory student<span> - Mathematics-Phusics</span>"," Preparatory institute of Monastir","2017","bachelor degree<span> Mathematics","high school Ibn khaldoun","My Academic timeline"];
var M2=["My name is Mayssen GHRABI and i'm 23 years old. Im actually in my last year of studies as a Telecomunications engineering the National School of engineering studies ENIT.<br/> I'm passionated about the japanese culture and i have a dream of visiting it one day.<br/>I have a lot of passions, I love watching anime and I really like spending my free time drawing mangas, on clothes and even doing DIY.", "40+", "Mangas","160+", "Anime <br /> Watched", "50+", "Film <br /> Watched","Naruto","90%", "Attack On Titan","85%","HxH","80%", "Bungou Stray Dogs","80%", "My Favorite Anime","First","Gojo <br/><span> Satoru</span>","From <strong>Jujutsu Kaisen</strong>.",
"Second","Aomine <br/><span> Daiki</span>","From <strong>Kuroko No Basuke</strong>.","Third","Levi <br/><span> Akerman</span>","From <strong>Attack On Titan</strong>.", "My 6 Top Characters"]
var section2 =[SN2, SO2, O2, M2];
var j=0;

document.getElementById("section2_1").innerHTML= section2[j][0];
document.getElementById("section2_2").innerHTML= section2[j][1];
document.getElementById("section2_3").innerHTML= section2[j][2];
document.getElementById("section2_4").innerHTML= section2[j][3];
document.getElementById("section2_5").innerHTML= section2[j][4];
document.getElementById("section2_6").innerHTML= section2[j][5];
document.getElementById("section2_7").innerHTML= section2[j][6];
document.getElementById("section2_8").innerHTML= section2[j][7];
document.getElementById("section2_9").innerHTML= section2[j][8];
document.getElementById("section2_10").innerHTML= section2[j][9];
document.getElementById("section2_11").innerHTML= section2[j][10];
document.getElementById("section2_12").innerHTML= section2[j][11];
document.getElementById("section2_13").innerHTML= section2[j][12];
document.getElementById("section2_14").innerHTML= section2[j][13];
document.getElementById("section2_15").innerHTML= section2[j][14];
document.getElementById("section2_16").innerHTML= section2[j][15];
document.getElementById("section2_17").innerHTML= section2[j][16];
document.getElementById("section2_18").innerHTML= section2[j][17];
document.getElementById("section2_19").innerHTML= section2[j][18];
document.getElementById("section2_20").innerHTML= section2[j][19];
document.getElementById("section2_21").innerHTML= section2[j][20];
document.getElementById("section2_22").innerHTML= section2[j][21];
document.getElementById("section2_23").innerHTML= section2[j][22];
document.getElementById("section2_24").innerHTML= section2[j][23];
document.getElementById("section2_25").innerHTML= section2[j][24];
document.getElementById("section2_26").innerHTML= section2[j][25];

//section3
var O3=["Here are some fields that I'm interested in","img/cloud.jpg","Cloud","img/data-mining.jpg"," Data mining","img/ML-DL.jpg","ML & DL"];
var SN3=["Here you will find some of my achievements . 😉" , "img/port1.jpg " , "SFC Certified" , "img/port2.jpg" ,"Python for Data science" , "img/port3.jpg", "Neo4j"];
var SO3=["Here is some of my work that I've done in university career." , "img/Mineur.jpeg", "Miner Robot" ,"img/Mixer.jpeg","Mixer" ,"img/VM1.jpeg", "Vending Machine"];
var M3=["Here is some of my drawings that I've done...Try to enjoy them 😉", "img/pic1.jpg","Drawing original Pub","img/pic2.jpg","Drawing original Pub","img/pic3.jpg","Drawing original Pub"];
var section3=[SN3, SO3, O3];
var k=2;

document.getElementById("section3_1").innerHTML= section3[k][0];
document.getElementById("section3_2").src = section3[k][1];
document.getElementById("section3_3").innerHTML= section3[k][2];
document.getElementById("section3_4").src = section3[k][3];
document.getElementById("section3_5").innerHTML= section3[k][4];
document.getElementById("section3_6").src = section3[k][5];
document.getElementById("section3_7").innerHTML= section3[k][6];


//section4
var O4=["My <span>Resources</span>","img/github.png","Github"," GitHub is a provider of Internet hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features.","img/openClass.png","Open classroom",
"OpenClassrooms is a France-based online education platform for vocational training, providing courses in IT,technology, entrepreneurship, and digital skills. Courses are conducted fully online, through a mix of video resources, online reading, real-life projects and individual mentoring sessions.",
"img/stack.png","Stack Over Flow","Stack Overflow is a question and answer website for professional and enthusiast programmers.It is the flagship site of the Stack Exchange Network. It features questions and answers on a wide range of topics in computer programming."];
var SN4=["My <span>ACTIVITIES AND AWARDS </span>" , "img/logo cis.png" ,"Founder & Chairwoman of IEEE Comptational Intelligence society (CIS) ISIMM Chapter" ," Focuses on computational intelligence, a collection of biologically and linguistically motivated computational paradigms, including the theory, design, application, and development of neural networks, connectionist systems, evolutionary algorithms, fuzzy.",
"img/logo_cri.png" , "Active member for 2 years at Robotic ISIMM Club (CRI)." ,"CRI is a group of young active people talented and interested in robotic design and development at ISIMM .<br /> Our objectives ares : <br /> * Allow the acquisition of knowledge and scientific experience in mechanics and electricity to create robots in order to participate in national and international competitions.<br /> * Allow students, members of the robotics club, to create specific robots for industrial companies in order to possibly improve performance and productivity. We will be grateful to receive your advice, your criticisms, your directives and your possible documents. ",
"img/leader.jpg" , "Secretary General for 2 years at LeaderShip Club ISIMM ." , "We help individuals become more effective communicators, planners and leaders. <br />we offer you occasionsgain practical leadership experience while helping people learnand grow in their professional and personal lives."];
var SO4=["My <span>Certificate and Activities</span" , "img/blog1.jpg", "Neo4j","Is an open-source graph-based database management system developed in Java", "img/blog2.jpg","Scrum Fundamentals Certificate",
"SCRUM Fundamental Certification Training (SFC™) is a systematic and detailed approach to find and eliminate defects from all the processe","img/cri.png","Responsable Ressources Humaines (3 Years)", "CRI is a Robotics Club within the Higher Institute Of Comuter Scienceand Mathematics in Monastir.We organize Training courses in the field of Electronics and Robotics. We have also participated in Several national Competitions."];
var M4=["My <span>Blogs</span>","img/blo1.jpg","DIY: How To Draw On Your Clothes (1)","Using the new Faber-Castel Textile Markers, I'll show you haw to draw Gojo Saturu on your Jacket.","img/blo2.jpg","DIY: How to Create Your Own PhoneCase","Using only Magazines, I'll show you how to personalise your PhoneCase.","img/blo3.jpg","DIY: How To Draw On Your Clothes (2)","Using the new Faber-Castel Textile Markers, I'll show you haw to draw Kimetsu no yaiba'S Characters on your Jacket."]
var section4=[SN4, SO4, O4, M4];
var m=3;

document.getElementById("section4_1").innerHTML= section4[m][0];
document.getElementById("section4_2").src= section4[m][1];
document.getElementById("section4_3").innerHTML= section4[m][2];
document.getElementById("section4_4").innerHTML= section4[m][3];
document.getElementById("section4_5").src= section4[m][4];
document.getElementById("section4_6").innerHTML= section4[m][5];
document.getElementById("section4_7").innerHTML= section4[m][6];
document.getElementById("section4_8").src= section4[m][7];
document.getElementById("section4_9").innerHTML= section4[m][8];
document.getElementById("section4_10").innerHTML= section4[m][9];


//section5
var SO4=["","MONASTIR, Tunisia","sirine.o@db-consulting-group.com","ISIMM University","92775913","Arabic, English, French"];
var SN4=["",": 18 Street Corniche Sousse" , ": sirine.n@db-consulting-group.com" , ": ISIMM , Monastir" , ": +216 50 669 519" ,": Arabic, Frensh, English, Spanish"];
var O4=["",": Siliana, Tunisia","oumaima.z@db-consulting-group.com", "ENET'COM University","93769127","Arabe, English, French"];
var M4=["Feel free to contact me in any time 😉",": Tunis,Tunisie",": gharbimayssen00@gmail.com",": ENIT, Campus el Manar, Tunis",": +216 90 60 79 12",": Arabic, Frensh, English"]
var section5=[SN4, SO4, O4, M4];
var l=1;

document.getElementById("section5_1").innerHTML= section5[l][0];
document.getElementById("section5_2").innerHTML= section5[l][1];
document.getElementById("section5_3").innerHTML= section5[l][2];
document.getElementById("section5_4").innerHTML= section5[l][3];
document.getElementById("section5_5").innerHTML= section5[l][4];
document.getElementById("section5_6").innerHTML= section5[l][5];



function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections Active 
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //resmove selected from the other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() =>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}

PageTransitions();