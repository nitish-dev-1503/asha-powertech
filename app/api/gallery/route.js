import { readdirSync } from 'fs'
import { join } from 'path'

export async function GET() {
    try {
        const galleryPath = join(process.cwd(), 'public', 'gallery')
        const files = await readdirSync(galleryPath)
        
        // Filter for image files only
        const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
        const images = files.filter(file => {
            const ext = file.substring(file.lastIndexOf('.')).toLowerCase()
            return imageExtensions.includes(ext)
        }).sort()

        return Response.json({ images })
    } catch (error) {
        console.error('Error reading gallery:', error)
        return Response.json({ images: [], error: error.message }, { status: 500 })
    }
}
