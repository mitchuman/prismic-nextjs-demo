import { SliceZone } from '@prismicio/react'
import { components } from '../slices'
import { createClient } from '../prismicio'

const HomePg = ({ page }) => (
  <SliceZone slices={page.data.body} components={components} />
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
