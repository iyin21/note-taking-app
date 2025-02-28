import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import "@mantine/core/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"
import { Provider } from "react-redux"
import { store } from "@redux/store/index.ts"
import { Notifications } from "@mantine/notifications"
import '@mantine/notifications/styles.css';


const theme = createTheme({
    /** Put your mantine theme override here */
})

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <MantineProvider theme={theme}>
            <Provider store={store}>
                
                <Notifications position="top-center" />
                <App />
            </Provider>
        </MantineProvider>
    </StrictMode>
)
