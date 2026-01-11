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
       DISCORD NOTIFICATION
    ========================== */
    function showDiscordNotification() {
        // Créer la notification si elle n'existe pas
        let notification = document.querySelector('.discord-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'discord-notification';
            notification.textContent = '✓ Identifiant Discord copié !';
            document.body.appendChild(notification);
        }

        // Afficher la notification
        notification.classList.add('show');

        // La masquer après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Ajouter l'événement aux icônes Discord
    const discordIcons = document.querySelectorAll('.discord-icon-home, .discord-icon');
    discordIcons.forEach(icon => {
        icon.parentElement.addEventListener('click', () => {
            navigator.clipboard.writeText('stanilou');
            showDiscordNotification();
        });
    });

    /* ==========================
       FORM NOTIFICATION
    ========================== */
    // Vérifier si on revient après l'envoi du formulaire
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('sent') === 'true') {
        // Créer et afficher la notification
        let notification = document.querySelector('.form-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'form-notification';
            notification.textContent = '✓ Message envoyé avec succès !';
            document.body.appendChild(notification);
        }

        notification.classList.add('show');

        // La masquer après 3 secondes
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);

        // Nettoyer l'URL (enlever le paramètre ?sent=true)
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    /* ==========================
       PROJECT MODAL
    ========================== */
    const projectDetails = [
        {
            title: "Réaliser un développement d'application",
            type: "Développement · Algorithmique · Programmation · Tests · Maintenance",
            description: `
                Au cours de ma formation en BUT Informatique, j'ai acquis de solides compétences en <strong>développement d'applications</strong>. Je suis capable d'analyser un besoin, de concevoir une solution adaptée et de la mettre en œuvre à travers des applications fiables et fonctionnelles.
                <br><br>
                J'ai travaillé sur différents types de projets, notamment des <strong>applications web et logicielles</strong>, en utilisant plusieurs langages de programmation tels que <strong>C</strong>, <strong>Java</strong>, <strong>Python</strong>, etc.
                <br><br>
                J'ai validé cette compétence à travers divers projets tels que la création d'un <strong>jeu de Sudoku jouable en terminal</strong> en passant par les phases de conception, développement et rédaction d'une <strong>documentation technique complète</strong>. Un autre projet notable est le développement de fonctionnalités pour une <strong>application de gestion de matériel</strong> lors d'un stage de 2 mois au sein de l'entreprise <strong><a href="https://www.norgayitservices.com/" target="_blank">NORGAY IT & Digital Services</a></strong> où il a fallu développer des solutions techniques en réponse aux besoins exprimés par un client.
            `
        },
        {
            title: "Optimiser des applications informatiques",
            type: "Performance · Optimisation · Qualité · Complexité · Efficacité",
            description: `
                L'optimisation des applications est un aspect essentiel de mon apprentissage. Je sais analyser le comportement d'un programme afin d'en <strong>améliorer les performances</strong>, la <strong>lisibilité</strong> et la <strong>maintenabilité</strong>.
                <br><br>
                Cela passe par le choix d'<strong>algorithmes efficaces</strong>, de <strong>structures de données adaptées</strong> et par une écriture de code claire, optimisée et bien documentée.
                <br><br>
                Cette compétence me permet de proposer des <strong>solutions performantes</strong> répondant aux contraintes techniques et aux exigences d'efficacité. J'ai eu l'occasion de la mettre en pratique lors de la création d'un <strong>algorithme permettant de résoudre <a href="https://fr.wikipedia.org/wiki/Problème_du_cavalier_d%27Euler" target="_blank">le problème du cavalier</a></strong> mais bien entendu, cette compétence a été mobilisée dans l'ensemble de mes projets de développement d'application.
            `
        },
        {
            title: "Administrer des systèmes informatiques communicants complexes",
            type: "Systèmes · Réseaux · Sécurité · Déploiement · Supervision",
            description: `
                Ma formation m'a permis de développer des compétences en <strong>administration des systèmes et réseaux</strong>. Je suis capable d'installer, configurer et maintenir des environnements informatiques, aussi bien sur des systèmes <strong>Linux</strong> que <strong>Windows</strong>.
                <br><br>
                J'ai également abordé des notions de <strong>virtualisation</strong>, de <strong>services réseau</strong> et de <strong>sécurité</strong>, me permettant d'assurer le bon fonctionnement et la fiabilité des infrastructures informatiques.
                <br><br>
                J'ai mis en pratique cette compétence lors de la configuration et de la gestion d'un <strong>serveur web Apache</strong> dans le cadre d'un projet académique, où j'ai assuré le déploiement, la maintenance et la <strong>gestion de la sécurité</strong>. J'ai également mis en place une <strong>machine virtuelle</strong> lors d'un stage au sein de l'entreprise <strong><a href="https://www.norgayitservices.com/" target="_blank">NORGAY IT & Digital Services</a></strong> afin de recréer un environnement d'exécution d'applications métier développées en Visual Basic.
            `
        },
        {
            title: "Gérer des données de l'information",
            type: "Bases de données · Modélisation · SQL · Données · Exploitation",
            description: `
                La gestion des données occupe une place centrale dans mon parcours, notamment grâce à ma spécialisation. Je sais <strong>concevoir et administrer des bases de données</strong>, assurer la cohérence et la sécurité des données, et exploiter celles-ci à travers des <strong>requêtes SQL</strong> et des <strong>analyses adaptées</strong>.
                <br><br>
                Cette compétence me permet de transformer des <strong>données brutes en informations exploitables</strong>, facilitant la prise de décision et le développement d'applications orientées données.
                <br><br>
                J'ai mis en pratique cette compétence lors de l'<strong>analyse d'un jeu de données</strong> portant sur la musique et la santé mentale où j'ai utilisé <strong>Python</strong> et <strong>SQL</strong> pour extraire des informations pertinentes et créer des <strong>visualisations claires et informatives</strong>. J'ai également exploité les publications de recherche du laboratoire de l'<strong><a href="https://www.irisa.fr/" target="_blank">IRISA</a></strong> et présenté les résultats via un <strong>globe interactif en 3D</strong>.
            `
        },
        {
            title: "Conduire un projet",
            type: "Gestion · Organisation · Planification · Collaboration · Méthodes",
            description: `
                Au fil de mes projets académiques et collaboratifs, j'ai appris à <strong>conduire un projet informatique de manière structurée</strong>. Je suis capable de travailler en équipe, de <strong>planifier les différentes étapes</strong> d'un projet et de respecter un cahier des charges ainsi que des délais imposés.
                <br><br>
                L'utilisation d'<strong>outils de gestion de projet</strong> et de <strong>collaboration</strong> (GitHub, GitLab, Jira) m'a permis de développer une organisation efficace et une communication claire au sein d'un groupe de travail.
                <br><br>
                Cette compétence a été mise en œuvre dans différents projets de groupe durant ma formation. Le plus notable était la réalisation d'une <strong>plateforme de gestion d'offres touristiques</strong> où j'ai occupé le rôle de <strong>Scrum Master</strong>. J'ai coordonné les efforts de l'équipe et veillé au respect des échéances tout en assurant une communication fluide entre les membres.
            `
        },
        {
            title: "Travailler dans une organisation informatique",
            type: "Équipe · Communication · Professionnalisation · Éthique · Entreprise",
            description: `
                Ma formation m'a sensibilisé au fonctionnement d'une <strong>organisation informatique</strong> et à ses contraintes professionnelles. Je suis capable de m'intégrer dans un environnement de travail, de respecter les <strong>normes, règles et bonnes pratiques</strong>, tout en tenant compte des enjeux juridiques, éthiques et sociaux liés à l'informatique.
                <br><br>
                Cette compétence me permet d'adopter une <strong>posture professionnelle et responsable</strong>, essentielle dans le monde de l'entreprise.
                <br><br>
                J'ai mis en pratique cette compétence lors d'un stage au sein de l'entreprise <strong><a href="https://www.norgayitservices.com/" target="_blank">NORGAY IT & Digital Services</a></strong>, où j'ai appris à naviguer dans les <strong>dynamiques organisationnelles</strong> et à <strong>collaborer efficacement</strong> avec divers acteurs. J'ai également organisé un événement de <strong>Team Building</strong> en planifiant une journée complète pour une entreprise (planning, flyer, vidéo promotionnelle, etc.).
            `
        }
    ];

    window.openModal = function(index) {
        const data = projectDetails[index];
        if (!data) return;

        document.getElementById("modal-title").textContent = data.title;
        document.getElementById("modal-type").textContent = data.type;
        // Utiliser innerHTML au lieu de textContent pour interpréter le HTML
        document.getElementById("modal-description").innerHTML = data.description;
        document.getElementById("project-modal").style.display = "block";
    };

    window.closeModal = function() {
        document.getElementById("project-modal").style.display = "none";
    };

    window.addEventListener("click", (e) => {
        const modal = document.getElementById("project-modal");
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});