<template>
  <v-container fluid justify-content>
    <v-card width="min(90%,550px)" class="mx-auto" color="#ffffff00" flat>
      <v-img src="@/assets/arbre_postesV1_fond_noir.png"></v-img>
    </v-card>
    <v-card width="min(90%,700px)" class="mx-auto mt-12 mb-6" color="#ffffff00">
      <v-row justify="center">
        <v-expansion-panels v-model="panel">
          <v-expansion-panel v-for="(member, i) in members" :key="i">
            <v-expansion-panel-header class="pa-0" hide-actions>
              <v-row align="center" no-gutters>
                <v-avatar size="125" tile>
                  <img :src="member.picture" />
                </v-avatar>
                <v-col v-if="$vuetify.breakpoint.xs" class="pl-4">
                  <v-card-title class="hacked-small">
                    {{ member.name }}
                  </v-card-title>
                  <v-card-subtitle class="text-h6">{{
                    member.role
                  }}</v-card-subtitle>
                </v-col>
                <template v-else>
                  <v-col align="center">
                    <strong class="hacked"> {{ member.name }} </strong>
                  </v-col>
                  <v-col align="center">
                    <strong class="hacked"> {{ member.role }} </strong>
                  </v-col>
                </template>
              </v-row>
            </v-expansion-panel-header>

            <v-expansion-panel-content>
              <v-divider></v-divider>
              <v-card-text class="text-left">
                {{ member.description }}
              </v-card-text>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Trombi",
  data() {
    return {
      panel: 0,
      members: [
        {
          name: "Thomas",
          role: "President",
          picture: require("@/assets/pp/thomas.png"),
          description:
            "On ne le présente plus : Thomas, notre prez préféré. Au-delà de sa carrure insane et de son charisme incontestable, Thomas est avant tout un gros nounours qui fera tout son possible pour assurer le bien-être de tous. Très investi dans la vie associative, il a les épaules (littéralement) pour diriger le BDE d'une main de maître et améliorer la vie à l'ENSTA. Grâce à son expérience de prez BDA, il connaît déjà tous les rouages d'une présidence de bureau et sait comment gérer chaque situation en gardant la bonne humeur. ",
        },
        {
          name: "Sebastien",
          role: "Vice-President",
          picture: require("@/assets/pp/seb.png"),
          description:
            "Sébastien… quel homme ! Du haut de ses 1m89 où ses cheveux soyeux nous éclairent de leurs beaux reflets roux, sa vue panoramique lui permet de superviser les projets de MeTA. Tel le druide du village de Palaiseau, avec son charisme inégalable et son haussement de sourcil il en fera chavirer plus d'un, sa sagesse vous éclairera tous.",
        },
        {
          name: "Ayoub",
          role: "Sec-Ge",
          picture: require("@/assets/pp/ayoub.png"),
          description:
            "Triple champion européen de Pa Kua Chang (ou l'art martial de la paume des huit trigrammes pour les incultes). Il a perfectionné son art pendant de longues années dans un monastère tengriste du nord de la Chine. Il n'hésitera pas à faire la démonstration de ses talents pour obliger les membres du BDE à venir en réu ou pour calmer un débat trop houleux. Il écrit des comptes rendus de réunion à faire pâlir le prix Goncourt et l'académie française, c'est le secrétaire général le plus intéressant au monde.",
        },
        {
          name: "Achraf",
          role: "Tresorier",
          picture: require("@/assets/pp/achraf.png"),
          description:
            "Ce champion d'équitation et amoureux des animaux est notre respectable et honorable trésorier. Jeune cadre dynamique il aime voyager, si vous avez un peu de chance, il vous racontera ses différentes excursions autour d'un délicieux thé à la menthe qu'il vous aura préparé avec les membres de son asso favorite ENSTAJINE. Un véritable délice! Et je ne parle pas du thé 😉.",
        },
        {
          name: "Odile",
          role: "Vice-Trez 1",
          picture: require("@/assets/pp/odile.png"),
          description:
            "Odile est vice-trésorière. Bien que petite, elle est très vivace. Elle sait induire un dynamisme sans égal. Alors attendez vous à une trésorerie au taquet ! Petite de taille, mais grande d'esprit. Droite dans ses bottes, elle saura empêcher toute tentative de détournement de fonds, possiblement perpétrés par les amoureux de l'argent (Cyprien). Alors élisez MeTA l'esprit léger, les comptes seront bien faits ! ",
        },
        {
          name: "Cyprien",
          role: "Vice-Trez 2",
          picture: require("@/assets/pp/cyprien.png"),
          description:
            "Nous avons l'honneur de vous présenter Cyprien, notre vice-trésorier. D'un naturel paresseux et rêveur, le Cyprien est un animal monovore : il ne mange que des raviolis en boîte. S'il n'a pas le COVID n'hésitez pas à l'approcher il est très amical et social. Malgré sa passion pour les échecs Cyprien a tout pour réussir dans la vie ! Ce grand gaillard au sourire resplendissant saura faire briller MeTA, l'ENSTA et surtout les comptes du BDE grâce à son intellect supérieur (il a eu 20 a MA102) et sa passion pour les jeux d'argent et le trading.",
        },
        {
          name: "Fabien",
          role: "Com Interieure",
          picture: require("@/assets/pp/fabien.png"),
          description:
            "Lui c'est Fabien, le respo com interne. Si vous ne l'avez jamais vu, vous l'avez forcément entendu: faire une blague en amphi, un jeu de mot aventureux en soirée ou encore parler de son sud adoré. La liste serait reconnaissante si vous pouviez éviter de lui parler de “train” et de “bandol” dans la même phrase. En bref, on ne s'ennuie jamais avec ce jeune homme, on espère que vous avez hâte qu'il vous régale avec ses posts sur campus. ",
        },
        {
          name: "Paul",
          role: "Com Exterieure",
          picture: require("@/assets/pp/paul.png"),
          description:
            "Vous connaissez forcément Paul, que ça soit pour son sérieux et son implication en tant que président de l'Anim ou pour ses folies nocturnes qui le poussent à foncer dans des murs. Vous ne trouverez pas plus bavard, il le dit lui-même il est addict à l'interaction avec les humains. On ne pouvait donc pas rêver mieux pour un respo com externe. Une chose est sûre, son sourire et sa bonne humeur sauront faire rayonner l'Ensta. ",
        },
        {
          name: "Marie",
          role: "Events",
          picture: require("@/assets/pp/marie.png"),
          description:
            "Marie. Derrière ses énormes lunettes se cachent un cœur immense. Passionnée de musique, Marie ne forme qu'un avec son violoncelle. Grâce à lui, elle vous enchantera lors de l'organisation de ses nombreux évènements. A chaque soirée vous la voyez s'ambiancer sur le dancefloor sans jamais fatiguer. Avec ça, attendez-vous à avoir des soirées couleur MeTA cette année qui vous en mettront plein les yeux. N'attendez plus, et Mariez-vous avec Didier.",
        },
        {
          name: "Laroudie",
          role: "Assos 2A",
          picture: require("@/assets/pp/laroudie.png"),
          description:
            "S'il ne pilote pas des drones pour la gendarmerie du Jura, il est sûrement au fond d'une salle obscure en train de se connecter au serveur de la NASA. Cet homme aux multiples facettes n'a pas fini de vous surprendre. Qui peut s'asseoir à sa table et dire qu'il connait les assos de l'ENSTA mieux que lui ? ",
        },
        {
          name: "Tadeusz",
          role: "Assos 1A",
          picture: require("@/assets/pp/tade.png"),
          description:
            "Si vous venez de rejoindre l'ENSTA, il est certainement LA personne qu'il vous faut ! Si vous voulez une conversation agréable et calme, c'est le bon gars ! Tade est la personne la plus polie, aimable, patiente et charismatique pour vous accueillir et vous expliquer la vie associative de l'école.   ",
        },
        {
          name: "Bastaert",
          role: "Scolarite 2A",
          picture: require("@/assets/pp/bastaert.png"),
          description:
            "Ce vrai shark sportif et amoureux de la nature ne dira pas non pour vous emmener pour un voyage méditatif original aux fonds des océans. Organisé, sérieux et travailleur, comme en attestent ses 20/20 à chaque MA, Clément est le meilleur candidat pour la scola !",
        },
        {
          name: "Melanie",
          role: "Scolarite 1A",
          picture: require("@/assets/pp/melanie.png"),
          description:
            "Si on a pu faire une chorégraphie du futur, c'est bien grâce à la patience de Mélanie ! Dotée d'une magnifique crinière, danseuse dans l'âme et conductrice infatigable, elle est l'incarnation du calme et de la rigueur. Avec Mélanie aux commandes du pôle scolarité, vous pouvez voter les yeux fermés !",
        },
        {
          name: "Margaux",
          role: "VSS",
          picture: require("@/assets/pp/margaux.png"),
          description:
            "Disons les mots. Lister avec Margaux est peut-être la nouvelle qui nous a le plus réjouis au moment de fonder MeTA. Bien que venant de la ville de Saint-Maur, ne vous détrompez pas elle est bien vivante, et nous le montre avec sa bonne humeur et son énergie permanente. C'est une visionnaire en matière de décoration et d'idées qui semblent impossibles, mais qu'elle vous fera réaliser et apprécier avec une conviction impressionnante. Mais pour mieux connaître Margaux, passez donc faire un tour au stand Meta, je suis même sûr que c'est elle qui viendra vers vous ;) ",
        },
        {
          name: "Jonas",
          role: "Dev Durable",
          picture: require("@/assets/pp/jonas.png"),
          description:
            "Vous avez appelé un respo DD ? Vous allez vous régaler avec cet être débordant d'idées et d'énergie. Vous ne pourrez pas le rater avec sa belle chevelure et son sourire dévastateur, toujours motivé et plein d'entrain ce sera à chaque fois un plaisir d'être à ses côtés et il ne vous décevra jamais. ",
        },
        {
          name: "Oskar",
          role: "Entreprise 2A",
          picture: require("@/assets/pp/oskar.png"),
          description:
            "Lui, c'est Oskar, notre respo Entreprises 2A. C'est royal ! Ce bon vivant s'armera de ses fossettes et de sa bonne humeur que ça soit pour pratiquer du sport avec ses copaings ou nous casser les oreilles à coups de clic clic pan pan pan et de jeux sensuels… Grâce à son âme de Shark et son sérieux sans faille, il parviendra à dénicher les contacts auprès des entreprises qui nous intéressent le plus et n'hésitera pas à nous en faire découvrir de nombreuses autres !",
        },
        {
          name: "Alexandre",
          role: "Entreprise 1A",
          picture: require("@/assets/pp/alex.png"),
          description:
            "Lorsque le football et le ski se rencontrent à Nantes, Alexandre naît avec le sourire. Toujours bon vivant, le petit beauf de la liste s'impose avec son boule au moins aussi gros que sa passion pour la bière. Ce sportif de haut niveau adorant l'argent, il saura sourire aux entreprises pour en tirer le meilleur !",
        },
        {
          name: "Bernerd",
          role: "WEI et VdC",
          picture: require("@/assets/pp/bernerd.png"),
          description:
            "Oyez Oyez, le Ténard du fameux Äbracadabar a rangé sa pinte magique pour rejoindre MeTA en tant que Soutien au Wei et de Vie de Campus. Par son expérience du Bar et de la TechnoParade, Clément saura vous organiser un WEI des plus quali avec son acolyte Vincent. Et comment ne pas penser que la vie de campus ne pourra être que plus palpitante avec Clément puisqu'il l'améliore déjà tous les jours grâce aux bonnes bières de l'Äbracadabar. ",
        },
        {
          name: "Vincent",
          role: "WEI et VdC",
          picture: require("@/assets/pp/vincent.png"),
          description:
            "On peut le dire, il n'y en a pas deux comme Vincent. Cet amoureux de la musique s'implique tellement dans la vie associative qu'il a fait du foyer sa nouvelle maison. On raconte même qu'il a forcé son repassage en 1ère année pour profiter 1 an de plus de notre magnifique zone 5. Le WEI ne peut être qu'exceptionnel avec Vincent aux commandes. Que ce soit à l'orga ou derrière les platines avec des sons chill house sunset rooftop topless, il va nous vendre du rêve.",
        },
        {
          name: "Andre",
          role: "AST",
          picture: require("@/assets/pp/andre.png"),
          description:
            "Ce magnifique sportif, venu tout droit des plages ensoleillées du Brésil, a ramené dans sa valise toute sa bonne humeur et son ingéniosité (il est capable de réparer une chaussure avec une seule bande de scotch!!). Mais ce n'est pas tout, il a aussi rapporté de nombreuses idées qui vont révolutionner la vie de tous les AST sur le campus !",
        },
        {
          name: "Amaury",
          role: "Alumni",
          picture: require("@/assets/pp/amaury.png"),
          description:
            "Voici notre respo alumni Amaury ! Petit par sa taille mais grand par son charisme, Amaury adorera vous raconter ses anecdotes autour d'une bonne bière. Heureusement pour sa ligne, Amaury compense son amour pour l'alcool avec celui pour le sport. Débrouillard et sérieux, il saura vous dégoter les meilleurs afterworks et interviews alumni. ",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hacked {
  font-family: "hackedregular";
  font-size: 3em;
}
.hacked-small {
  font-family: "hackedregular";
  font-size: 2em;
}
</style>