let sortJsonArray = (array, field, order) =>  {
    if(array && array.length > 0 && array[0].hasOwnProperty(field)){
        array.sort((a,b) => {
            if(a[field] === b[field]){
                return true;
            }
            return a[field] > b[field] ? 1 : -1;
        });
        if(order === 'desc'){
            return array.reverse();
        }
        return array;
    }
    return array;
}

let extractUserNameFromEmail = (emailId) => {
    return emailId.split('@')[0];
}

let getTotalVote = (vote) => {
    if(vote > 9)
        return vote;
    else if(vote <= 9 &&  0 <= vote)
        return `0${vote}`;
    else return vote;
}

let getDateTimeFromTimestamp = (timestamp) => {
    let timestampData = new Date(timestamp);
    let date = `${timestampData.getDate()}/${timestampData.getMonth()+1}/${timestampData.getFullYear()}`;
    let time = timestampData.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    return [date, time]
}

let decodeBase64 = ( str ) =>  {
    str = str.replace(/\s/g, '');    
    return decodeURIComponent(escape(window.atob( str )));
}

let findInJsonArray = (array, key, value) => {
    let indexOfItem = -1;
    let element = array.find((item, index) => {
        if(item[key] === value){
            indexOfItem = index;
            return true;
        }
        return false;
    })
    return [indexOfItem, element];
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export {
    sortJsonArray,
    extractUserNameFromEmail,
    getTotalVote,
    getDateTimeFromTimestamp,
    decodeBase64,
    findInJsonArray,
    capitalizeFirstLetter,
    validateEmail,
};