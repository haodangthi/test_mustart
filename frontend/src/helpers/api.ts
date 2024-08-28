export const apiRequest = async <T>(
  url: string,
  endpoint: string,
  options: RequestInit,
): Promise<T> => {
  try {
    const response = await fetch(`${url}/${endpoint}`, options)
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }
    const data: T = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw new Error('Something went wrong. Please try again later.')
  }
}
