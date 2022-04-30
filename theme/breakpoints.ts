const size = {
    xs: "787px",
    sm: "1024px",
    lg: "1366px",
    xl:"2560px"
   }
   const device = {
    xs: `(min-width: ${size.xs})`,
    sm: `(min-width: ${size.sm})`,
    lg: `(min-width: ${size.lg})`,
    xl: `(min-width: ${size.lg})`
   }
   export  {size, device}