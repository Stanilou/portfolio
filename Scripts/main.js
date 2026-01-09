document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       HEADER SCROLL EFFECT
    ========================== */
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    /* ==========================
       NAV ACTIVE LINK (SCROLL SPY)
    ========================== */
    const navLinks = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("main > div[id]");
    const HEADER_OFFSET = 120;

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - HEADER_OFFSET) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            const target = link.getAttribute("href").substring(1);
            link.classList.toggle("active", target === currentSection);
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

    /* ==========================
       NAV CLICK
    ========================== */
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    /* ==========================
       EASTER EGG
    ========================== */
    const logo = document.getElementById("easter-egg");
    const sound = document.getElementById("sound");

    if (logo && sound) {
        logo.addEventListener("click", () => {
            sound.currentTime = 0;
            sound.play();
        });
    }

    /* ==========================
       PROJECT MODAL
    ========================== */
    const projectDetails = [
        {
            title: "Réaliser un développement d'application",
            type: "Développement · Algorithmique · Programmation · Tests · Maintenance",
            description: "Au cours de ma formation en BUT Informatique, j'ai acquis de solides compétences en développement d'applications. Je suis capable d'analyser un besoin, de concevoir une solution adaptée et de la mettre en œuvre à travers des applications fiables et fonctionnelles. J'ai travaillé sur différents types de projets, notamment des applications web et logicielles, en utilisant plusieurs langages de programmation. Cette compétence inclut également les phases de tests, de maintenance et d'amélioration continue afin de garantir la qualité et la pérennité des solutions développées."
        },
        {
            title: "Optimiser des applications informatiques",
            type: "Performance · Optimisation · Qualité · Complexité · Efficacité",
            description: "L'optimisation des applications est un aspect essentiel de mon apprentissage. Je sais analyser le comportement d'un programme afin d'en améliorer les performances, la lisibilité et la maintenabilité. Cela passe par le choix d'algorithmes efficaces, de structures de données adaptées et par une écriture de code claire et optimisée. Cette compétence me permet de proposer des solutions performantes, répondant aux contraintes techniques et aux exigences d'efficacité."
        },
        {
            title: "Administrer des systèmes informatiques communicants complexes",
            type: "Systèmes · Réseaux · Sécurité · Déploiement · Supervision",
            description: "Ma formation m'a permis de développer des compétences en administration des systèmes et des réseaux. Je suis capable d'installer, configurer et maintenir des environnements informatiques, aussi bien sur des systèmes Linux que Windows. J'ai également abordé des notions de virtualisation, de services réseau et de sécurité, me permettant d'assurer le bon fonctionnement et la fiabilité des infrastructures informatiques."
        },
        {
            title: "Gérer des données de l'information",
            type: "Bases de données · Modélisation · SQL · Données · Exploitation",
            description: "La gestion des données occupe une place centrale dans mon parcours, notamment grâce à ma spécialisation. Je sais concevoir et administrer des bases de données, assurer la cohérence et la sécurité des données, et exploiter celles-ci à travers des requêtes et des analyses adaptées. Cette compétence me permet de transformer des données brutes en informations utiles, facilitant la prise de décision et le développement d'applications orientées données."
        },
        {
            title: "Conduire un projet",
            type: "Gestion · Organisation · Planification · Collaboration · Méthodes",
            description: "Au fil de mes projets académiques et collaboratifs, j'ai appris à conduire un projet informatique de manière structurée. Je suis capable de travailler en équipe, de planifier les différentes étapes d'un projet et de respecter un cahier des charges ainsi que des délais imposés. L'utilisation d'outils de gestion de projet et de collaboration m'a permis de développer une organisation efficace et une communication claire au sein d'un groupe de travail."
        },
        {
            title: "Travailler dans une organisation informatique",
            type: "Équipe · Communication · Professionnalisation · Éthique · Entreprise",
            description: "Enfin, ma formation m'a sensibilisé au fonctionnement d'une organisation informatique et à ses contraintes professionnelles. Je suis capable de m'intégrer dans un environnement de travail, de respecter les normes, les règles et les bonnes pratiques, tout en tenant compte des enjeux juridiques, éthiques et sociaux liés à l'informatique. Cette compétence me permet d'adopter une posture professionnelle et responsable, essentielle dans le monde de l'entreprise."
        }
    ];

    // ✅ Rendre les fonctions globales
    window.openModal = function(index) {
        const data = projectDetails[index];
        if (!data) return;

        document.getElementById("modal-title").textContent = data.title;
        document.getElementById("modal-type").textContent = data.type;
        document.getElementById("modal-description").textContent = data.description;
        document.getElementById("project-modal").style.display = "block";
    };

    window.closeModal = function() {
        document.getElementById("project-modal").style.display = "none";
    };

    // Fermer la modal en cliquant à l'extérieur
    window.addEventListener("click", (e) => {
        const modal = document.getElementById("project-modal");
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});