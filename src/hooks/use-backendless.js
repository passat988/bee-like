import { useEffect } from 'react'
import Backendless from 'backendless'

import config from '../configs/backendless'

export const useBackendless = () => {
  useEffect(() => {
    const { APP_ID, API_KEY } = config

    Backendless.serverURL = 'https://eu-api.backendless.com'
    Backendless.initApp(APP_ID, API_KEY)
  }, [])
}