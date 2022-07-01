import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import { createClient } from '../prismicio'

const HomePg = ({ page }) => (
  <main>
    <h1>Home</h1>

    {console.log(page)}

    <SliceZone slices={page.data.slices} components={components} />
  </main>
)

export default HomePg

export async function getStaticProps({ previewData }) {
  const page = await createClient({ previewData }).getSingle('home_page')

  return {
    props: {
      page,
    }
  }
}
