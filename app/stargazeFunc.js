const getMoonPhase = (year, month, day) => {
    let daysFromYears = 0
    let daysFromMonths = 0
    let  totalDaysElapsed = 0
    let howFarIntoPhase = 0

    if (month < 3) {
        year--
        month += 12
    }

    month++
    daysFromYears = 365.25 * year
    daysFromMonths = 30.6 * month
    totalDaysElapsed = daysFromYears + daysFromMonths + day - 694039.09 //find total days elapsed from set new moon
    totalDaysElapsed  /= 29.5305882 //divide by the moon cycle
    howFarIntoPhase = parseInt(totalDaysElapsed); //fractional part is how far date is into current lunar phase
    totalDaysElapsed -= howFarIntoPhase;
    howFarIntoPhase = Math.round(totalDaysElapsed * 8); //scale fraction from 0-8 and round
    if (howFarIntoPhase >= 8 ) {
        howFarIntoPhase = 0; //0 and 8 are the same
    }
    
    // 0 => New Moon
    // 1 => Waxing Crescent Moon
    // 2 => Quarter Moon
    // 3 => Waxing Gibbous Moon
    // 4 => Full Moon
    // 5 => Waning Gibbous Moon
    // 6 => Last Quarter Moon
    // 7 => Waning Crescent Moon
    
    if (howFarIntoPhase === 4) { //convert to usable point system for stargaze index
        return [0, 'no moonlight']
    }  else if (howFarIntoPhase === 3 || howFarIntoPhase === 5) {
        return [10, 'low moonlight']
    } else if (howFarIntoPhase === 2 || howFarIntoPhase === 6) {
        return [20, 'some moonlight']
    } else if (howFarIntoPhase === 1 || howFarIntoPhase === 7) {
        return [30, 'strong moonlight']
    } else {
        return [40, 'full moonlight']
    }
}

export const getStargazeIndex = (cloudIndex, hasPrecipitation) => {
    const dateObj = new Date()
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    const year = dateObj.getUTCFullYear()
    const moonClip = getMoonPhase(year, month, day)

    let precipClip = [0, 'no impact from precipitation']
    if (hasPrecipitation) {
        precipClip = [20, 'impact from precipitation']
    }

    let total = cloudIndex + precipClip[0] + moonClip[0]
    let responseObj = {
        precipClip: precipClip[1],
        moonClip: moonClip[1],
    }

    if (cloudIndex < 25) {
        responseObj['cloudClip'] = 'zero cloud cover'
    } else if (cloudIndex < 50) {
        responseObj['cloudClip'] = 'some cloud cover'
    } else {
        responseObj['cloudClip'] = 'heavy cloud cover'
    }

    if (total < 32) {
        responseObj['keyword'] = 'super'
        return responseObj
    } else if (total < 64) {
        responseObj['keyword'] = 'high'
        return responseObj
    } else if (total < 96) {
        responseObj['keyword'] = 'medium'
        return responseObj
    } else if (total < 128) {
        responseObj['keyword'] = 'low'
        return responseObj
    } else if (total < 161) {
        responseObj['keyword'] = 'no'
        return responseObj
    } else {
        responseObj['keyword'] = 'low'
        return responseObj
    }
}