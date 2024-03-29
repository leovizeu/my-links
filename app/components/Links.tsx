import Link, { LinkProps } from 'next/link'
import React, { AnchorHTMLAttributes } from 'react'

const CustomLinks = ({ href, ...rest}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }
  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
}

export default CustomLinks