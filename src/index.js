import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import { router } from "./routs/routs"

import { store } from "./store/store"
import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material/styles'

import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'

import { theme } from "./theme/theme"

import "react-toastify/dist/ReactToastify.css"
import { HelmetProvider } from "react-helmet-async"


// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <CacheProvider value={cacheRtl} >
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </ThemeProvider>
      </CacheProvider>
    </Provider>
  </StrictMode>
)