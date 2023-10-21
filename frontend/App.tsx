import React from "react"
import logo from "./assets/dfinity.svg"
/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core"
import { defaultProviders } from "@connect2ic/core/providers"
import { ConnectButton, ConnectDialog, Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
/*
 * Import canister definitions like this:
 */
import * as vivero from "../.dfx/local/canisters/vivero"
import * as planta from "../.dfx/local/canisters/planta"
/*
 * Some examples to get you started
 */

import ViveroForm from "./components/FormCrearVivero"
import AsideMenu from "./components/AsideMenu"

function App() {
  const onSelect = (categoryId) => {}
  return (
    <div className="App" style={{display: 'flex'}}>
      <div className="auth-section">
        <ConnectButton />
      </div>
      <ConnectDialog />

      <AsideMenu onSelect={onSelect} />
      <div>
        Mi cultivo

        {/* <InformationVivero /> */}
      </div>
      <div className="examples">
        {/* <ViveroComponent/> */}
        <ViveroForm/>
      </div>
    </div>
  )
}

const client = createClient({
  canisters: {
    vivero,
    planta
  },
  providers: defaultProviders,
  globalProviderConfig: {
    dev: import.meta.env.DEV,
  },
})

export default () => (
  <Connect2ICProvider client={client}>
    <App />
  </Connect2ICProvider>
)
