import { Request, Response, NextFunction } from 'express';

export default (validation) => (req: Request, res: Response, next: NextFunction) => {
    console.log('The config is', validation);
    console.log('The req body is', req.body, req.params, req.query);

    const configKeys = Object.keys(validation);
    configKeys.forEach(key => {
        const keyData = validation[key];
        console.log(keyData);
        const values = keyData.in.map((location) => {
            console.log('\n key is', key);
            console.log('key value is', validation[key]);
            console.log('value is', req[location][key]);
            return req[location][key];
        });

        console.log(values, 'values');





        if (keyData && keyData.required) {

            if (keyData && keyData.string) {
                console.log('your string is true');
                const validateValues = values.filter(item => item);
                console.log(validateValues, 'validateValues');
                if (values.length !== validateValues.length)
                    next({ message: `${key} should be string` });
            }
            if (keyData && keyData.regex && keyData.regex.test(values[0])) {
                console.log('your string is true');
                console.log('your name is valid');
                const validateValues = values.filter(item => item);
                console.log(validateValues, 'validateValues');
                if (values.length !== validateValues.length)
                    next({ message: `${key} is invalid` });
            }
            if (keyData && keyData.required) {
                console.log('____deleted____');
                const validateValues = values.filter(item => item);
                console.log(validateValues, 'validateValues');
                if (values.length !== validateValues.length)
                    next({ message: `${key} is required` });
            }
            if (keyData && keyData.default === 0 && keyData.number) {
                console.log('____IN SKIP____');
                const validateValues = values.filter(item => item);
                console.log(validateValues, 'validateValues');
                if (values.length !== validateValues.length)
                    next({ message: `${key} is not a number` });
            }
            if (keyData && keyData.default === 10 && keyData.number) {
                console.log('____IN LIMIT____');
                const validateValues = values.filter(item => item);
                console.log(validateValues, 'validateValues');
                if (values.length !== validateValues.length)
                    next({ message: `${key} is not a number` });
            }
            if (keyData && keyData.isObject) {
                console.log('____In Data to update ____');
                const validateValues = values.filter(item => item);
                console.log(validateValues, 'validateValues');
                if (values.length !== validateValues.length)
                    next({ message: `${key} is not a object` });
            }
        }

        /* if ((keyData && keyData.required) && (keyData && keyData.string) && (keyData && keyData.regex && keyData.regex.test(name)) && (keyData && keyData.number) && (keyData && keyData.isObject)) {
             console.log('your string is true');
             console.log('your name is valid');
             const validateValues = values.filter(item => item);
             console.log(validateValues, 'validateValues');
             if (values.length !== validateValues.length)
             next({message: `${key} is required`});
         }*/
    });
    next();
};
