import { redirect } from 'next/navigation'

// The Sanity Studio runs as a standalone app in /studio/
// Run `cd studio && npm run dev` to access it at localhost:3333
// Or deploy it with `cd studio && npx sanity deploy`
export default function StudioRedirect() {
  redirect('https://www.sanity.io/manage')
}
