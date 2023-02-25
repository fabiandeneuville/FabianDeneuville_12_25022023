export const formatPerformances = (obj) => {
    obj.data.map((item) => {
        item.kind = obj.kind[item.kind]
    })
    return obj.data;
}