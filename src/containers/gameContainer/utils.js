import dragon from '../../services/img/dragon.png';
import girl from '../../services/img/girl.png';
import men from '../../services/img/men.png';
import men2 from '../../services/img/men2.png';
import ork from '../../services/img/ork.png';
import spider from '../../services/img/spider.png';
import witch from '../../services/img/witch.png';
import ork2 from '../../services/img/ork2.png';

// import shirt_1 from '../../services/img/shirt_1.png';
// import shirt_2 from '../../services/img/shirt_2.png';
// import shirt_3 from '../../services/img/shirt_3.png';


const items = [dragon, girl, men, men2, ork, spider, witch, ork2];

// const itemsBack = [shirt_1, shirt_2, shirt_3];
// /**
//  * Generates a name for the card based on the image it will hold.
//  * @param {String} imgName name of image 
//  */
const getCardName = (imgName) => {
    return imgName.split("/")[3].split(".")[0];
}
export { items, getCardName };

export const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
};

export const delay = ms => new Promise(_ => setTimeout(_, ms));

export const getResGame = (sec, level) =>
    Math.round(10000 * level * (level / 12) / sec);

