export interface Property {
  id: string
  title: string
  location: string
  price: string
  type: 'Plot' | 'Flat' | 'Villa'
  imageUrl: string
  description: string
  rera_status: string
}

/**
 * Fetches property data from a Google Sheet published as CSV
 * @param csvUrl - The published CSV URL from Google Sheets
 * @returns Array of Property objects
 */
export async function fetchPropertiesFromGoogleSheet(
  csvUrl?: string
): Promise<Property[]> {
  // If no URL provided, return mock data
  if (!csvUrl) {
    return getMockProperties()
  }

  try {
    const response = await fetch(csvUrl, {
      cache: 'no-store', // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error('Failed to fetch CSV data')
    }

    const csvText = await response.text()
    const lines = csvText.split('\n').filter((line) => line.trim())

    if (lines.length < 2) {
      return getMockProperties()
    }

    // Parse CSV header
    const headers = lines[0].split(',').map((h) => h.trim().toLowerCase())

    // Find column indices
    const idIndex = headers.indexOf('id')
    const titleIndex = headers.indexOf('title')
    const locationIndex = headers.indexOf('location')
    const priceIndex = headers.indexOf('price')
    const typeIndex = headers.indexOf('type')
    const imageUrlIndex = headers.indexOf('imageurl')
    const descriptionIndex = headers.indexOf('description')
    const reraStatusIndex = headers.indexOf('rera_status')

    // Parse data rows
    const properties: Property[] = []

    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map((v) => v.trim())

      if (values.length < headers.length) continue

      properties.push({
        id: values[idIndex] || `property-${i}`,
        title: values[titleIndex] || 'Untitled Property',
        location: values[locationIndex] || 'Location TBD',
        price: values[priceIndex] || 'Price on Request',
        type: (values[typeIndex] as Property['type']) || 'Plot',
        imageUrl: values[imageUrlIndex] || '',
        description: values[descriptionIndex] || '',
        rera_status: values[reraStatusIndex] || 'Pending',
      })
    }

    return properties.length > 0 ? properties : getMockProperties()
  } catch (error) {
    console.error('Error fetching from Google Sheet:', error)
    return getMockProperties()
  }
}

/**
 * Mock property data for development and fallback
 */
function getMockProperties(): Property[] {
  return [
    {
      id: '1',
      title: 'Premium Plot in Dehradun',
      location: 'Dehradun, Uttarakhand',
      price: '₹25,00,000',
      type: 'Plot',
      imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      description: 'Beautiful plot with mountain views, perfect for building your dream home. Located in a prime residential area with all amenities nearby.',
      rera_status: 'RERA Approved',
    },
    {
      id: '2',
      title: 'Modern 3BHK Flat in Noida',
      location: 'Noida, Uttar Pradesh',
      price: '₹65,00,000',
      type: 'Flat',
      imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      description: 'Spacious 3BHK apartment in a gated community. Fully furnished, modern amenities, close to schools and hospitals. Ready to move in.',
      rera_status: 'RERA Approved',
    },
    {
      id: '3',
      title: 'Luxury Villa in Mussoorie',
      location: 'Mussoorie, Uttarakhand',
      price: '₹1,20,00,000',
      type: 'Villa',
      imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      description: 'Stunning 4BHK villa with panoramic mountain views. Private garden, modern interiors, and premium finishes. Perfect for families seeking tranquility.',
      rera_status: 'RERA Approved',
    },
  ]
}



