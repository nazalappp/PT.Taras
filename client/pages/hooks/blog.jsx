import React from 'react'
import Link from 'next/dist/client/link'

function Blog() {
  return (
    <div>
        <title>Blog</title>
        <p>Blog page</p>
        <p><Link href="hooks"><a>Back to hooks page</a></Link></p>
    </div>
  )
}

export default Blog