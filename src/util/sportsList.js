import ballImg from "../assets/images/ball.png";
import tennisBallImg from "../assets/images/tennisBall.png";
import basketBallImg from "../assets/images/basketBall.png";
import iceHockeyImg from "../assets/images/iceHockey.png";
import valleyBallImg from "../assets/images/valleyball.png";
import tableTennis from "../assets/images/tabelTennis.png";

import australiaImg from "../assets/images/auImg.png";
import japanImg from "../assets/images/japan.png";
import georgiaFlag from "../assets/images/georgiaFlag.png";
import goldenStateImg from "../assets/images/goldenState.png";
import espnImg from "../assets/images/ESPN.png";

export const sportsList = [
  {
    title: "Football",
    count: "(49)",
    img: ballImg,
    league: [
      {
        title: "Australian Cup",
        count: "(3)",
        img: australiaImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            computerIcon: true,
            starIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Japan",
        count: "(3)",
        img: japanImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            computerIcon: true,
            starIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Georgia, Superliga",
        count: "(5)",
        img: georgiaFlag,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            computerIcon: true,
            starIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Tennis",
    count: "(58)",
    img: tennisBallImg,
    league: [
      {
        title: "Australian Cup",
        count: "(3)",
        img: australiaImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            computerIcon: false,
            starIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Japan",
        count: "(3)",
        img: japanImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: false,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Georgia, Superliga",
        count: "(5)",
        img: georgiaFlag,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Basketball",
    count: "(35)",
    img: basketBallImg,
    league: [
      {
        title: "Australian Cup",
        count: "(3)",
        img: australiaImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Japan",
        count: "(3)",
        img: japanImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Georgia, Superliga",
        count: "(5)",
        img: georgiaFlag,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Ice Hockey",
    count: "(14)",
    img: iceHockeyImg,
    league: [
      {
        title: "Australian Cup",
        count: "(3)",
        img: australiaImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: false,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Japan",
        count: "(3)",
        img: japanImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: false,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Georgia, Superliga",
        count: "(5)",
        img: georgiaFlag,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "VolleyBall",
    count: "(67)",
    img: valleyBallImg,
    league: [
      {
        title: "Australian Cup",
        count: "(3)",
        img: australiaImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Japan",
        count: "(3)",
        img: japanImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: false,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Georgia, Superliga",
        count: "(5)",
        img: georgiaFlag,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Table Tennis",
    count: "(18)",
    img: tableTennis,
    league: [
      {
        title: "Australian Cup",
        count: "(3)",
        img: australiaImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Japan",
        count: "(3)",
        img: japanImg,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: true,
            computerIcon: false,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4",
              },
            ],
          },
        ],
      },
      {
        title: "Georgia, Superliga",
        count: "(5)",
        img: georgiaFlag,
        matches: [
          {
            id: 1,
            matchTitle: "Rocket league",
            firstTeam: "Golden State",
            firstTeamLogo: goldenStateImg,
            secondTeam: "ESPN",
            secondTeamLogo: espnImg,
            matchDescription: "2-й Тайм, прошло 51 мин / Тур 5",
            starIcon: false,
            computerIcon: true,
            scores: [
              {
                firstTeamScore: "24",
                secondTeamScore: "52",
              },
              {
                firstTeamScore: "1",
                secondTeamScore: "4ssss",
              },
            ],
          },
        ],
      },
    ],
  },
];
