const orchardIndexToName = (index) => {

    let name = '';
    console.log(index, "INDEX");
    switch (+index) {
        case 0: name = 'Vogel'; break;
        case 1: name = 'Gold'; break;
        case 2: name = 'Jenschke'; break;
        case 9: name = 'Burgs'; break;
        default: name = 'None';
    }

    return name;
}

export default orchardIndexToName;
