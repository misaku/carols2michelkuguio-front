export const size = {
    mobileL: '650px',
    tablet: '850px',
    laptop: '1074px',
    desktop: '1170px',

}

export const device = {
    mobile: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`
};

export const theme = {
   colors:{
       borderColor: '#ae8472',
       colorWhite: '#fff',
       titleColor: '#a0715e',
       defaultColor: '#9f9693',
   },
    measures:{
        gap: '2rem',
        borderMinRadius: '3px',
        borderRadius: '5px',
        borderMaxRadius: '8px',
    }
};
