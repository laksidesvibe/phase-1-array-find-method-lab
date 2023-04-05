// code your solution here


function superbowlWin(record) {   
    const win = record.find(record => record.result === "W"); // Use find() to search for an object with result === "W" 
    return win ? win.year : undefined; // If win is found, return the year property. Otherwise, return undefined.
}
