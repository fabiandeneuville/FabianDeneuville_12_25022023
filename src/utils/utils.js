const translatedKinds = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité"
};

const days = {
    1: "L",
    2: "M",
    3: "M",
    4: "J",
    5: "V",
    6: "S",
    7: "D",
}

export const formatPerformances = (obj) => {
    let clone = Object.assign({}, obj)
    clone.data.map((item) => {
        item.kind = translatedKinds[item.kind]
    })
    return clone.data;
};

export const formatDays = (array) => {
    let formatedArray = [...array]
    formatedArray.map((session) => {
        session.day = days[session.day]
    })
    return formatedArray;
};

export const getDaysIndex = (array) => {
    let data = [...array];
    data.map((session, index) => {
        session.day = index + 1;
    });
    return data;
};