/*
 * Complete the 'pylons' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 */

const pylons = (k, arr) => {
    let powerPlants = 0;
    let idx = 0;
    let currCity = idx + k - 1;
    
    while(idx < arr.length) {
        // check to see if the city can have a power plant
        if(arr[currCity] == 1) {
            powerPlants++;
            // where last power plant built can reach to
            idx = currCity + k;
            // furthest possible next location a power plant can be built
            currCity = idx + k - 1;
            if(currCity >= arr.length) {
                currCity = arr.length - 1;
            }
        } else {
            currCity--;
            if(currCity < 0 || currCity <= idx - k) {
                return -1;
            }
        }
    }
    console.log(powerPlants);
    return powerPlants;
}
