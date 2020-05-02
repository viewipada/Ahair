export const SHOPINFORMATION = "SHOPINFORMATION"
export const SHOPSTOCK = "SHOPSTOCK"
// export const ADDSHOPSTOCK = "ADDSHOPSTOCK"
export const SHOPDETAIL = "SHOPDETAIL"
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
export const PriceListDetail = (data) => {
    return {
        type: SHOPDETAIL,
        payload: data
    }
}
export const BarberDetail = (data) => {
    return {
        type: SHOPDETAIL,
        payload: data
    }
}