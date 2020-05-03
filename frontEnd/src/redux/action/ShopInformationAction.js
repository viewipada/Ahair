export const SHOPINFORMATION = "SHOPINFORMATION"
export const SHOPSTOCK = "SHOPSTOCK"
// export const ADDSHOPSTOCK = "ADDSHOPSTOCK"
export const PRICEWOMENSHORT = "PRICEWOMENSHORT"
export const PRICEWOMENMEDIUM = "PRICEWOMENMEDIUM"
export const PRICEWOMENLONG = "PRICEWOMENLONG"
export const PRICEMENSHORT = "PRICEMENSHORT"
export const PRICEMENLONG = "PRICEMENLONG"
export const PRICEWOMENSERVICE ="PRICEWOMENSERVICE"
export const PRICEMENSERVICE ="PRICEMENSERVICE"
export const HAIRSTYLESWOMENSHORT = "HAIRSTYLESWOMENSHORT"
export const HAIRSTYLESWOMENMEDIUM = "HAIRSTYLESWOMENMEDIUM"
export const HAIRSTYLESWOMENLONG = "HAIRSTYLESWOMENLONG"
export const HAIRSTYLESMENSHORT = "HAIRSTYLESMENSHORT"
export const HAIRSTYLESMENLONG = "HAIRSTYLESMENLONG"

export const Information = (data) => {
    return {
        type: SHOPINFORMATION,
        payload: data //object
    }
}
export const Colorstock = (data) => {
    return {
        type: SHOPSTOCK,
        payload: data //object
    }
}
// export const AddColorstock = (data) => {
//     return {
//         type: ADDSHOPSTOCK,
//         payload: data //object
//     }
// }
export const HairStyleswomenShort = (data) => {
    return {
        type: HAIRSTYLESWOMENSHORT,
        payload: data
    }
}
export const HairStyleswomenMedium = (data) => {
    return {
        type: HAIRSTYLESWOMENMEDIUM,
        payload: data
    }
}
export const HairStyleswomenLong = (data) => {
    return {
        type: HAIRSTYLESWOMENLONG,
        payload: data
    }
}
export const HairStylesmenShort = (data) => {
    return {
        type: HAIRSTYLESMENSHORT,
        payload: data
    }
}
export const HairStylesmenLong = (data) => {
    return {
        type: HAIRSTYLESMENLONG,
        payload: data
    }
}
// export const HairStylesDetail = (data) => {
//     return {
//         type: SHOPDETAIL,
//         payload: data
//     }
// }
export const PriceWomenShort = (data) => {
    return {
        type: PRICEWOMENSHORT,
        payload: data
    }
}
export const PriceWomenMedium = (data) => {
    return {
        type: PRICEWOMENMEDIUM,
        payload: data
    }
}
export const PriceWomenLong = (data) => {
    return {
        type: PRICEWOMENLONG,
        payload: data
    }
}
export const PriceMenShort = (data) => {
    return {
        type: PRICEMENSHORT,
        payload: data
    }
}
export const PriceMenLong = (data) => {
    return {
        type: PRICEMENLONG,
        payload: data
    }
}
export const PriceMenService = (data) => {
    return {
        type: PRICEMENSERVICE,
        payload: data
    }
}
export const PriceWomenService = (data) => {
    return {
        type: PRICEWOMENSERVICE,
        payload: data
    }
}
// export const BarberDetail = (data) => {
//     return {
//         type: SHOPDETAIL,
//         payload: data
//     }
// }