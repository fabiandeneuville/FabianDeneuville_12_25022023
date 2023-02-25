export const mockedUserData = {
    id: 10,
    userInfos: {
        firstName: "Fabian",
        lastName: "Deneuville",
        age: 36
    },
    score: 0.3,
    keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbonhydrateCount: 150,
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

export const mockedUserAverageSessions = {
    userId: 10,
    sessions: [
        {
            day: 1,
            sessionLength: 45,
        },
        {
            day: 2,
            sessionLength: 45,
        },
        {
            day: 3,
            sessionLength: 65,
        },
        {
            day: 4,
            sessionLength: 60,
        },
        {
            day: 5,
            sessionLength: 0,
        },
        {
            day: 6,
            sessionLength: 30,
        },
        {
            day: 7,
            sessionLength: 45,
        },
    ]
};

export const mockedUserPerformance = [
    {
        value: 80,
        kind: "cardio",
    },
    {
        value: 120,
        kind: "energy",
    },
    {
        value: 140,
        kind: "endurance",
    },
    {
        value: 50,
        kind: "strength",
    },
    {
        value: 200,
        kind: "speed",
    },
    {
        value: 90,
        kind: "intensity",
    },
];

