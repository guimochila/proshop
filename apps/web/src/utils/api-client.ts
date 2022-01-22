function client(endpoint: string, { body, ...customConfig }: RequestInit = {}) {
  const headers = { 'Content-Type': 'application/json', 'x-app': 'proshop' }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
    body,
  }

  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async (response) => {
      if (response.ok) {
        return await response.json()
      } else {
        const errorMessage = await response.text()
        return Promise.reject(new Error(errorMessage))
      }
    })
}

export { client }
