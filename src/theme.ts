import { createTheme } from "@mui/material"

const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    minHeight: "8vh"
                }
            },
        }
    },
});

export default theme
