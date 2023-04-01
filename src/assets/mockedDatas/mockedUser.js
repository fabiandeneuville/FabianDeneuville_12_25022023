export const mockedUserData = {
    id: 10,
    userInfos: {
        firstName: "Fabian",
        lastName: "Deneuville",
        age: 36
    },
    todayScore: 0.3,
    keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120
    }
};

export const mockedUserActivity = {
    userId: 10,
    sessions: [
        {
            day: "2023-02-01",
            kilogram: 100,
            calories: 250,
        },
        {
            day: "2023-02-02",
            kilogram: 99,
            calories: 270,
        },
        {
            day: "2023-02-03",
            kilogram: 99,
            calories: 260,
        },
        {
            day: "2023-02-04",
            kilogram: 97,
            calories: 280,
        },
        {
            day: "2023-02-05",
            kilogram: 98,
            calories: 150,
        },
        {
            day: "2023-02-06",
            kilogram: 97,
            calories: 170,
        },
        {
            day: "2023-02-07",
            kilogram: 96,
            calories: 290,
        },
    ]
};

export const mockedUserAverageSessions = 
[
    {
        day: 'L',
        sessionLength: 45,
    },
    {
        day: 'M',
        sessionLength: 45,
    },
    {
        day: 'M',
        sessionLength: 65,
    },
    {
        day: 'J',
        sessionLength: 60,
    },
    {
        day: 'V',
        sessionLength: 0,
    },
    {
        day: 'S',
        sessionLength: 30,
    },
    {
        day: 'D',
        sessionLength: 45,
    },
]

export const mockedUserPerformance = [
    {
        value: 100,
        kind: "Cardio",
    },
    {
        value: 120,
        kind: "Energie",
    },
    {
        value: 140,
        kind: "Endurance",
    },
    {
        value: 80,
        kind: "Force",
    },
    {
        value: 40,
        kind: "Vitesse",
    },
    {
        value: 90,
        kind: "intensité",
    },
];

