import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { revalidatePath } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

// Maps Sanity document _type → the page(s) that should revalidate
const PATH_BY_TYPE: Record<string, string[]> = {
  guitarTab:       ['/guitar'],
  pricingPlan:     ['/guitar'],
  faqItem:         ['/guitar', '/software'],
  softwareProject: ['/software'],
  clientProject:   ['/software'],
  skill:           ['/software'],
}

export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET
  if (!secret) {
    return NextResponse.json({ error: 'SANITY_REVALIDATE_SECRET is not configured.' }, { status: 500 })
  }

  const signature = req.headers.get(SIGNATURE_HEADER_NAME)
  if (!signature) {
    return NextResponse.json({ error: 'Missing signature header.' }, { status: 401 })
  }

  const rawBody = await req.text()
  const valid = await isValidSignature(rawBody, signature, secret)
  if (!valid) {
    return NextResponse.json({ error: 'Invalid signature.' }, { status: 401 })
  }

  let body: { _type?: string }
  try {
    body = JSON.parse(rawBody)
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  const type = body._type
  if (!type) {
    return NextResponse.json({ error: 'Missing _type in payload.' }, { status: 400 })
  }

  const paths = PATH_BY_TYPE[type]
  if (!paths) {
    return NextResponse.json({ revalidated: false, message: `No path mapped for _type "${type}".` })
  }

  paths.forEach((p) => revalidatePath(p))
  return NextResponse.json({ revalidated: true, paths, type })
}
