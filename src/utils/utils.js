const translatedKinds = {
    1: "Cardio",
    2: "Energie",
    3: "Endurance",
    4: "Force",
    5: "Vitesse",
    6: "Intensité"
};

export const formatPerformances = (obj) => {
    obj.data.map((item) => {
        item.kind = translatedKinds[item.kind]
    })
    return obj.data;
};