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
    obj.data.map((item) => {
        item.kind = translatedKinds[item.kind]
    })
    return obj.data;
};

export const formatDays = (array) => {
    array.map((session) => {
        session.day = days[session.day]
    })
    return array;
};