import linkedin from "./images/linkedin-logo.png";
import twitter from "./images/twitter-logo.png";
import github from "./images/github-logo.png";
import blog from "./images/dev-to-logo.png";

const data = {
  en: {
    header: {
      name: "Ignas Davulis",
      title: "FrontEnd Developer",
    },
    links: {
      title: "Links",
      items: [
        {
          src: linkedin,
          text: "Linkedin/UserName",
          href: "https://linkedin.com/",
          alt: "linkedin logo",
        },
        {
          src: twitter,
          text: "@IgnasDavulis",
          href: "https://twitter.com/ignasdavulis",
          alt: "twitter logo",
        },
        {
          src: github,
          text: "Ignas Davulis",
          href: "https://github.com/IgnasDav",
          alt: "github logo",
        },
        {
          src: blog,
          text: "My Blog",
          href: "https://dev.to/",
          alt: "dev.to logo",
        },
      ],
    },
    about: {
      title: "About me",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue egestas, dapibus justo et, lobortis ex.",
    },
    education: {
      title: "Education",
      items: [
        {
          title: "CodeAcademy",
          period: "2003 - 2015",
          diploma: "Awesome Diploma",
        },
        {
          title: "CodeAwesome",
          period: "2015 - 2030",
          diploma: "Awesome Cool Diploma",
        },
      ],
    },
    personalSkills: {
      title: "Personal skills",
      items: [
        {
          title: "Teamwork",
          color: "green",
        },
        {
          title: "Communication",
          color: "yellow",
        },
        {
          title: "Oragnization",
          color: "red",
        },
      ],
    },
    technicalSkills: {
      title: "Technical Skills",
      items: [
        {
          title: "HTML",
          color: "green",
        },
        {
          title: "CSS",
          color: "yellow",
        },
        {
          title: "JavaScript",
          color: "red",
        },
        {
          title: "Node.js/Express/Mongo.DB",
          color: "red",
        },
        {
          title: "React",
          color: "red",
        },
      ],
    },
    jobExperience: {
      title: "Work Experience",
      items: [
        {
          company: "Shpotify",
          title: "Wizard",
          period: "2025 - Present",
          achievements: [
            "Listened to whole Db of records",
            "Made Logo",
            "Increased sales with the use of A/B tests",
          ],
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
        },
        {
          title: "Wizard",
          company: "Shpotify",
          period: "2025 - Present",
          achievements: [
            "Listened to whole Db of records",
            "Made Logo",
            "Increased sales with the use of A/B tests",
          ],
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
        },
        {
          title: "Wizard",
          company: "Shpotify",
          period: "2025 - Present",
          achievements: [
            "Listened to whole Db of records",
            "Made Logo",
            "Increased sales with the use of A/B tests",
          ],
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut justo libero. Vestibulum vitae mattis diam. Vivamus eleifend diam vel tempor lacinia. Suspendisse non augue.",
        },
      ],
    },
    contacts: {
      items: [
        {
          title: "Address",
          content: [{ text: "Grove St. 59 " }, { text: "Vilnius, Narnia" }],
        },
        {
          title: "Contacts",
          content: [
            { href: "tel:+37060000333", text: "+37060000333" },
            { href: "mailto:email@test.dev", text: "email@test.dev" },
          ],
        },
        {
          title: "Social",
          content: [
            {
              href: "https://twitter.com/IgnasDavulis",
              text: "Twitter/@IgnasDavulis",
            },
            {
              href: "https://linkedin.com/",
              text: "Linkedin/Ignas-Davulis",
            },
          ],
        },
      ],
    },
  },
  lt: {
    header: {
      name: "Ignas Davulis",
      title: "FrontEnd programuotojas",
    },
    links: {
      title: "Nuorodos",
      items: [
        {
          src: linkedin,
          text: "Linkedin/UserName",
          href: "https://linkedin.com/",
          alt: "linkedin logotipas",
        },
        {
          src: twitter,
          text: "@IgnasDavulis",
          href: "https://twitter.com/ignasdavulis",
          alt: "twitter logotipas",
        },
        {
          src: github,
          text: "IgnasDav",
          href: "https://github.com/IgnasDav",
          alt: "github logotipas",
        },
        {
          src: blog,
          text: "Asmeninis Blogas",
          href: "https://dev.to/",
          alt: "dev.to logotipas",
        },
      ],
    },
    about: {
      title: "Apie Mane",
      body: "Cupcake ipsum dolor sit amet. Lollipop sweet roll pie sweet ice cream tootsie roll. Sweet bonbon pudding lemon drops dragée. Jelly gummies pastry halvah halvah lemon drops cotton candy. Donut sesame snaps bear claw sweet roll fruitcake lemon drops sweet roll chocolate bar. Candy shortbread tootsie roll candy canes candy canes shortbread.",
    },
    education: {
      title: "Išsilavinimas",
      items: [
        {
          title: "CodeAcademy",
          period: "2003 - 2015",
          diploma: "Nuostabus diplomas",
        },
        {
          title: "CodeAwesome",
          period: "2015 - 2030",
          diploma: "Nuostabus kietas diplomas",
        },
      ],
    },
    personalSkills: {
      title: "Asmeniniai įgūdžiai",
      items: [
        {
          title: "Komandiškumas",
          color: "green",
        },
        {
          title: "Komunikacija",
          color: "yellow",
        },
        {
          title: "Organizuotumas",
          color: "red",
        },
      ],
    },
    technicalSkills: {
      title: "Techniniai Įgūdžiai",
      items: [
        {
          title: "HTML",
          color: "green",
        },
        {
          title: "CSS",
          color: "yellow",
        },
        {
          title: "JavaScript",
          color: "red",
        },
        {
          title: "Node.js/Express/Mongo.DB",
          color: "red",
        },
        {
          title: "React",
          color: "red",
        },
      ],
    },
    jobExperience: {
      title: "Darbo Patirtis",
      items: [
        {
          company: "Shpotify",
          title: "Magas",
          period: "2025 - Dabartis",
          achievements: [
            "Išklausyta visa duomenų bazė įrašų",
            "Sukurtas logotipas",
            "Padidinti pardavimai naudojant A/B testus",
          ],
          body: "Cupcake ipsum dolor sit amet. Lollipop sweet roll pie sweet ice cream tootsie roll. Sweet bonbon pudding lemon drops dragée. Jelly gummies pastry halvah halvah lemon drops cotton candy.",
        },
        {
          company: "Shpotify",
          title: "Magas",
          period: "2025 - Dabartis",
          achievements: [
            "Išklausyta visa duomenų bazė įrašų",
            "Sukurtas logotipas",
            "Padidinti pardavimai naudojant A/B testus",
          ],
          body: "Cupcake ipsum dolor sit amet. Lollipop sweet roll pie sweet ice cream tootsie roll. Sweet bonbon pudding lemon drops dragée. Jelly gummies pastry halvah halvah lemon drops cotton candy.",
        },
        {
          company: "Shpotify",
          title: "Magas",
          period: "2025 - Dabartis",
          achievements: [
            "Išklausyta visa duomenų bazė įrašų",
            "Sukurtas logotipas",
            "Padidinti pardavimai naudojant A/B testus",
          ],
          body: "Cupcake ipsum dolor sit amet. Lollipop sweet roll pie sweet ice cream tootsie roll. Sweet bonbon pudding lemon drops dragée. Jelly gummies pastry halvah halvah lemon drops cotton candy.",
        },
      ],
    },
    contacts: {
      items: [
        {
          title: "Adresas",
          content: [{ text: "Grove G. 59 " }, { text: "Vilnius, Narnia" }],
        },
        {
          title: "Kontaktai",
          content: [
            { href: "tel:+37060000333", text: "+37060000333" },
            { href: "mailto:email@test.dev", text: "email@test.dev" },
          ],
        },
        {
          title: "Socialinės medijos",
          content: [
            {
              href: "https://twitter.com/IgnasDavulis",
              text: "Twitter/@IgnasDavulis",
            },
            {
              href: "https://linkedin.com/",
              text: "Linkedin/Ignas-Davulis",
            },
          ],
        },
      ],
    },
  },
};

export default data;
