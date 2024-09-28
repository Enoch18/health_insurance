export const formatedPrice = (price:any) => {
    if(price){
        // Convert to a string with 2 decimal places
        const priceString = parseFloat(price).toFixed(2);

        // Add ".00" to the end
        const formattedPrice = parseFloat(priceString).toLocaleString('en-US');

        if(!formattedPrice.toString().includes('.')){
            return formattedPrice + '.00';
        }

        return formattedPrice;
    }else{
        return '0.00'
    }
}

export const isNumber = (value: any): boolean => {
    return typeof value === 'number';
}

export const removeCommasFromNumber = (value: string): any => {
    return value.replace(/,/g, '');
}