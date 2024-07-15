import { createTheme } from "@mui/material"

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    height: "80vh"
                }
            },
        }
    },
});

export default theme
