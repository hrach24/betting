import japanImg from "../assets/images/japan.png";
import azulImg from "../assets/images/azulClaro.png";
import conImg from "../assets/images/Consadole.webp";
export const LIVE_GAME = [
  {
    id: 1,
    league: [
      {
        id: 1,
        leagueName: "Japan. Nabisco Cup",
        leagueImg: japanImg,
        leagueSvgIcon: "#ball-football",
        lastNumber: "+5",
        numbers: [
          {
            id: 1,
            firstNumber: 1,
            secondNumber: "X",
            thirdNumber: 1,
          },
          {
            id: 2,
            firstNumber: 1,
            secondNumber: "X",
            thirdNumber: 1,
          },
        ],
      },
    ],
    leftIcons: [
      {
        id: 1,
        svgIcon: "#pin",
      },
      {
        id: 2,
        svgIcon: "#star-sharp",
      },
    ],
    teams: [
      {
        id: 1,
        firstTeamName: "Azul Claro Numazu",
        firstTeamLogo: azulImg,
        secondTeamName: "Yokohama",
        secondTeamLogo: conImg,
        teamLastNumber: "+5",
        scores: [
          {
            id: 1,
            firstTeamScore: 1,
            secondTeamScore: 1,
          },
        ],
      },
    ],
    murkUp: [
      [
        {
          id: 1,
          number: 7652,
          redFlag: true,
          greenFlag: false,
        },
        {
          id: 2,
          number: 7652,
          redFlag: true,
          greenFlag: false,
        },
        {
          id: 3,
          number: 7652,
          redFlag: true,
          greenFlag: false,
        },
      ],
      [
        {
          id: 1,
          number: 7652,
          redFlag: true,
          greenFlag: false,
        },
        {
          id: 2,
          number: 7652,
          redFlag: true,
          greenFlag: false,
        },
        {
          id: 3,
          number: 7652,
          redFlag: true,
          greenFlag: false,
        },
      ],
    ],
  },
];
