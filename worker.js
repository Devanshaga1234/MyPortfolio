// Cloudflare Worker to serve the React portfolio
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  
  // Handle root path
  if (url.pathname === '/') {
    url.pathname = '/index.html'
  }
  
  // Try to get the file from the site bucket
  try {
    const response = await fetch(request)
    if (response.status === 404) {
      // If file not found, serve index.html for SPA routing
      const indexRequest = new Request(new URL('/index.html', request.url))
      return await fetch(indexRequest)
    }
    return response
  } catch (error) {
    // Fallback to index.html
    const indexRequest = new Request(new URL('/index.html', request.url))
    return await fetch(indexRequest)
  }
}
