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

/**
 * Formating function that returns user performances with translated kinds
 * @category Formating function
 * @function
 * @param {Object} userData user performances datas returned by API
 * @return {Array<{value: Number, kind: String}>} User performances with translated kinds
 */
export const formatPerformances = (obj) => {
    let clone = Object.assign({}, obj)
    clone.data.map((item) => {
        item.kind = translatedKinds[item.kind]
    })
    return clone.data;
};

/**
 * Formating function that returns sessions with day first letter instead of day index in week
 * @category Formating function
 * @function
 * @param {Array<{day: Number, sessionLength: Number}>} sessions Array of user sessions
 * @return {Array<{day: String, sessionLength: Number}>} Formated user sessions with day first letter instead of index in week
 */
export const formatDays = (array) => {
    let formatedArray = [...array]
    formatedArray.map((session) => {
        session.day = days[session.day]
    })
    return formatedArray;
};

/**
 * Function that returns day index instead of actual date
 * @category Formating function
 * @function
 * @param {Array<{day: String, kilogram: Number, calories: Number}>} dailyActivity Array of user indicators per day
 * @return {Array<{day: Number, kilogram: Number, calories: Number}>}
 */
export const getDaysIndex = (array) => {
    let data = [...array];
    data.map((session, index) => {
        session.day = index + 1;
    });
    return data;
};