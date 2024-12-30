import { LinkField } from '@prismicio/client'
import { PrismicNextLink } from '@prismicio/next'
import clsx from 'clsx';


type Props = {
    buttonLink: LinkField;
    buttonText: string | null;
    className: string;
}

export default function Button({buttonLink,buttonText,className}: Props) {
  return (
    <PrismicNextLink 
        className={clsx("", className)}
    field={buttonLink}>
        {buttonText}
    </PrismicNextLink> 
  )
}