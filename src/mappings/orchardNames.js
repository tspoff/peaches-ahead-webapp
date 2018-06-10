const orchardIndexToName = (index) => {

    let name = '';
    console.log(index, "INDEX");
    switch (+index) {
        case 0: name = 'Vogel'; break;
        case 1: name = 'Orchard 1'; break;
        case 2: name = 'Orchard 2'; break;
        case 9: name = 'Orchard 9'; break;
        default: name = 'None';
    }

    return name;
}

export default orchardIndexToName;