export const generateTestData = (parameters: any) => {
    let dataSet = [];
    for(let n = 0; n < 10; n++) {
        let data: any = {};
        parameters.map(
            (key: any) => {
                data[key] = n;
            }
        )
        dataSet.push(data);
    }

    return dataSet;
}