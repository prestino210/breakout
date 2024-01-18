export default class Utils {
    static rect_circleCollision(rX, rY, rW, rH, cX, cY, cR) {
        let collision = false; 
        let testX = cX; let testY = cY;
        if(cX < rX) {
            testX = rX;
        } else if(cX > rX + rW) {
            testX = rX + rW;
        }

        if(cY < rY) {
            testY = rY;
        } else if(cY > rY + rH) {
            testY = rY + rH;
        }

        let distX = testX - cX;
        let distY = testY - cY;
        let dist = Math.sqrt((distX*distX)+(distY*distY));
        if(dist < cR) {
            collision = true;
        }

        return collision;

    }
}