import dragon from '../../services/img/dragon.png';
import girl from '../../services/img/girl.png';
import men from '../../services/img/men.png';
import men2 from '../../services/img/men2.png';
import ork from '../../services/img/ork.png';
import spider from '../../services/img/spider.png';
import witch from '../../services/img/witch.png';
import ork2 from '../../services/img/ork2.png';

const items = [dragon, girl, men, men2, ork, spider, witch, ork2];

/**
 * Generates a name for the card based on the image it will hold.
 * @param {String} imgName name of image 
 */
const getCardName = (imgName) => {
    return imgName.split("/")[3].split(".")[0];
}


export { items, getCardName };